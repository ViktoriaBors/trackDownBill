const baseRoute = "http://localhost:8000/"

// fetch all the ongoing projects
fetch(baseRoute+"project")
.then(res => res.text())
.then(data => console.log(data))

document.querySelector("#submitProjectNew").addEventListener("click", (event)=>{
    event.preventDefault()
    console.log("add new project")
    //Check the values are not empty later!
   const formValues = (JSON.stringify({
        projectNameNew:document.querySelector("#projectNameNew").value,
        projectTypeNew : document.querySelector("#projectTypeNew").value
}))
    fetch(baseRoute+"project",{ 
        method: "POST", 
        headers:
            {"content-type": "application/json"},
        body:(formValues) } )
    .then(res => res.text())
    .then(data => console.log(data))
})

document.querySelector("#moreDetails").addEventListener("click", (event)=>{
    event.preventDefault();
    console.log("see details about a specific project")
    let id = 1;

    fetch(baseRoute+"project/"+id)
    .then(res => res.text())
    .then(data => console.log(data))
})

document.querySelector("#updateProject").addEventListener("click", (event)=>{
    event.preventDefault();
    console.log("update project")
    let id = 1;
    const formValues = (JSON.stringify({
        projectName:document.querySelector("#projectName").value,
        projectType : document.querySelector("#projectType").value
}))
    fetch(baseRoute+"project/"+id,{
        method: "PUT",
        headers:
        {"content-type":"application/json"},
        body: formValues
    })
    .then(res => res.text())
    .then(data => console.log(data))
})

document.querySelector("#deleteProject").addEventListener("click", (event)=>{
    event.preventDefault();
    console.log("delete specific project")
    let id = 1;

    fetch(baseRoute+"project/"+id,{
        method: "Delete"})
    .then(res => res.text())
    .then(data => console.log(data))
})