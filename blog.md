# Track Down Bill - blog
## Own side project to help myself and my family with bills

**Day 1 - 3**
Setting up the backend first.

That was a really interesting way to start the project. Why? Normally I would start with front end and some design ideas. BUT the project is going to be used with some JS framework (probably VUE.js), what I am just learning up right now. So I decided to try to set up the NodeJs back end instead. It was challenging without knowing 100% what data is going to come to back end. Of course I have some ideas how the data should look like and I expect that it is going to be the same. But there is this little what if... I cannot achieve the same structure. Anyway I set up the back end and tested through POSTMAN application.

**Day 4 - 5**
Design ideas

I started to think about the design and hard-coded to the html. I tried to make the design thinking in COMPONENTS, what I can use later for the framework to set up templates. 

**Day 6**

I started the front-end side as a vue app project, therefore I separated the project in 2 folder. One for back-end and one for Vue front-end. Right now the 2 side runs on separate localhost too. I implemented some basic view models and routes in the Vue app. Next step is to take the view parts to more smaller components. 

**Day 7**

I made the registration and login to work with the database. After that it redirects to another view (dahsboard). I need to find out how I can save and "send" some data from one view to another view as a next step

**Day 8**

So my frontend and backend does not run on the same localhost server. That is a problem when I need to send http requests. Luckily I found that I can use the cors middleware, so the request came through. Before I was not sure about how I want to track the user (cookies or session storage or token). I sticked with the cookie option as I have some experience with that. So I thought... I remembered to get cookieParser package and so started the setup. But because of the cors problem, I could not send cookie back. I found a solution to set credentials to true inside the cors. Now everything works again :)

Next check if the user has a session at the dashboard view. I think here I need to use some lifecycle hook. 

**Day 9**

Today did not go as planned. Somehow the fix cors problem came back to hunt me :D Even though I fixed and set the cors origin right, it did not work. When I got an error, it said I needed to set the mode to no-cors inside the fetch. Which solved the problem, but came  a problem with the cookies.. So that was not the right way. Then I realized the http request comes sometimes from localhost and sometimes from the IP address itself. So I made an array containing all the possible ways. And voila, works. 
Then I had a little struggle with cookie expiration date. But now I have a working login/register.

During the mount of the dashboard, I send a http request to check if the user session is expired or not. Also works.

Next - writing out the personal welcome message.

**Day 10**

So no more cors problem! Yeess. Now I needed to figure out how to handle user login. I decided to make the navbar different - as a component and every time it gets mounted, it fetch data about the user (has session, email and name). Then I could make the navbar to look different if the user logged in and if not (v-if). 

Only little thing is bothering me that if the user go to home page - even if he/she logged in - it says register or login. So thinking to change that to have a different message if the user is logged in already. Probably props needs to be used ?!