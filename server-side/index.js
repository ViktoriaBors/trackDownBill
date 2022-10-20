import express from "express"
import cors from "cors"
import {MongoClient, ObjectId} from "mongodb"
import { v4 as uuidv4 } from 'uuid';
import bcrypt from "bcryptjs"
import cookieParser from "cookie-parser"

// server
const server = express()

// middlewares 
server.use(express.json())
server.use(cookieParser())
server.use(cors({credentials: true, origin: ['http://192.168.1.172:8080', 'http://localhost:8080']}))

// connect to mongodb
const client = new MongoClient("mongodb://localhost:27017")
let db = (client.db("trackDownBill"))
let projectDb = db.collection("projects")
let userDb = db.collection("users")
let billsDb = db.collection("bills")

// server routes

///////////// USERS routes ////////////
/* Might missing the following features:
After login / dashboard should check if the user is logged in with a session. But sessions are not saved in db.
Look into session/local storage and document.cookies on frontend side to access cookies. 
*/

// Login - gives new cookies in every new login - sessions are not saved in db - cannot check them
// req.body for login looks like
/*
email: smth,
password: smth
*/
server.post("/user/login", async (req,res) => {
    console.log("user login")
    let user = await userDb.findOne({email: req.body.email})
    console.log(user.expires, new Date(Date.now()))
    if(!user){
        res.status(401)
        res.send("User cannot found")
        return
    }
    // check hashed password matches
    if(bcrypt.compareSync(req.body.password, user.password)){
        if(user.expiration < new Date(Date.now()) || user.expiration == null || user.session == null){
            console.log('session expired')
            const sessionId = uuidv4();
            const expiration = new Date(Date.now()+86400000)
            userDb.updateOne({email:req.body.email}, {$set: {session:sessionId, expires:expiration, httpOnly: true}})
            res.cookie("session", sessionId, {expires:  expiration}) // session is valid for a day
            res.send(JSON.stringify("Login is successful"))
        } else {
            console.log('session not expired')
            res.send(JSON.stringify("Login is successful"))
        }
    } else {
        res.status(401)
        res.send(JSON.stringify("Authorization is denied"))
    }    
})

// Registration - give cookies back
// req.body for a new user looks like
/*
firstName : smth,
lastName : smth,
email: smth,
password : smth,
*/
server.post("/user/registration", async (req,res)=>{
    console.log("add new user and session")
    let user = await userDb.findOne({email: req.body.email})
    if(user){
        res.status(401)
        res.send(JSON.stringify(("User is already existing")))
        return
    }
    // session
    const sessionId = uuidv4();
    const expiration = new Date(Date.now()+86400000)
   // console.log(expiration) 
   res.cookie("session", sessionId, {expires:  expiration, httpOnly: true}) // session is valid for a day
   // password hash
    const hash = bcrypt.hashSync(req.body.password, 10);
    userDb.insertOne({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        email: req.body.email,
        password: hash,
        session: sessionId,
        expires : expiration
    }).then(result => res.send(result))
})

server.get('/user/session', async (req,res)=>{
    console.log('checking for session')
    const sessionId = req.cookies.session
    let userSession = await userDb.findOne({session: sessionId})
    if(!userSession || userSession.expires < new Date(Date.now())){
        res.status(401)
        res.send(JSON.stringify('No session found'))
        return
    } else {
        res.send(JSON.stringify({
            email:userSession.email,
            firstName: userSession.firstName,
            lastName : userSession.lastName
        }))
    }
})

server.get('/user/logout', async (req, res) => {
    console.log('logging out')
    const sessionId = req.cookies.session
    let userSession = await userDb.findOne({session: sessionId})
    if(userSession){
        console.log('user found')
        userDb.updateOne({session:sessionId}, {$set: {session:null, expires:null, httpOnly: true}})
        res.send(JSON.stringify('user is logged out'))
    } else {
        console.log('problem')
        res.status(401)
        res.send(JSON.stringify('No session found'))
    }
})

//////////// PROJECT ROUTES ///////////
// get all ongoing projects for the specific user
// fetch on the front end should look like http://localhost:8000/project?user=email
server.get("/project", async (req,res)=>{
    console.log("getting all ongoing projects")
    let user = req.query.user
    // find all project under the specific user
    let projects = [];
    let project = await projectDb.find({updatedBy : user}).sort({name:1}) //sort by name
    await project.forEach(result => projects.push(result))
    res.send(projects)
})

// get specific project
// fetch on the front end should look like http://localhost:8000/project/64567468451 id
server.get("/project/:id", async (req,res)=>{
    console.log("get specific project")
    let id = req.params.id
    // find the specific project
    let project = await projectDb.findOne({_id:ObjectId(id)})
    let projectName = await project.name
    // find all the bills which belongs to the specific project 
    // DONT FORGET - on the front end there should be a SUM span to calculate and insert the sum of the all bill
    let bills = [];
    let cursor = await billsDb.find({project : project.name})
    await cursor.forEach(result => bills.push(result))
    res.send(bills)
})

// add new project on the database under a specific user
/* req.body look
name: smth,
type: smth,
sum:0
updated: Date.now(),
updatedBy : email- comes from login dashboard email
*/
server.post("/project", async (req,res)=>{
    console.log("new project added")
    let cursor = await projectDb.findOne({name: req.body.name})
    if(cursor){
        res.status(404)
        res.send("Project is already exist")
        return
    }
    projectDb.insertOne(req.body).then(result => res.send("new project is added"))
})

// update specific project
server.put("/project/:id", async(req,res)=>{
    let id = req.params.id
    console.log(id)
    console.log("update specific project with id" + id)
    const newData = req.body;
    let project = await projectDb.findOne({_id: ObjectId(id)})
    if(!project){
        res.status(404)
        res.send("Project is not found")
        return
    } 
    projectDb.updateOne({_id: ObjectId(id)}, {$set: newData})
    res.send("specific project is updated")
})

// delete one project
server.delete("/project/:id", async (req,res)=>{
    let id = req.params.id
    console.log("delete specific project with id "+ id)
    let project = await projectDb.findOne({_id: ObjectId(id)}) // find the project which is going to be deleted
    await billsDb.deleteMany({project: project.name}) // find all the bills under this specific project
    projectDb.deleteOne({_id:ObjectId(id)}).then(result => res.send("specific project is deleted with all bills"))
})

//////////// Bill Routes ////////////////
// add new bill under a specific project
/*req.body should look like
shopName: smth,
description: stmh
sum: 123456
project: project name
updated: date.now
*/
server.post("/bill", (req,res)=>{
    console.log("adding new bill under a specific project")
    billsDb.insertOne(req.body).then(result => res.send("new bill is added"))
})
// Update a specific bill
server.put("/bill/:id", async (req,res)=>{
    const id = req.params.id;
    let bill = await billsDb.findOne({_id:ObjectId(id)})
    if(!bill){
        res.status(401) //? check status code
        res.send("Specific bill is not found")
        return
    }
    billsDb.updateOne({_id:ObjectId(id)}, {$set: req.body})
    res.send("bill is updated")
})
// Delete a specific bill
server.delete("/bill/:id", async (req,res)=>{
    console.log("delete a specific bill")
    let bill = await billsDb.findOne({_id:ObjectId(id)})
    if(!bill){
        res.status(401) //? check status code
        res.send("Specific bill is not found")
        return
    }
    billsDb.deleteOne({_id:ObjectId(id)})
    res.send("bill is deleted")
})

// server listen
client.connect().then(()=>{
    db = (client.db("trackDownBill"))
    server.listen(8000,()=>{console.log("server is running with mongodb")})
}).catch(err => console.log(err))
