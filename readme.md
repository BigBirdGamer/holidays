# MERN Stack

## Expres on Heroku

* git init + gitignore
* Express Hello World
    * express
    * nodemon
    * dotenv - PORT
* Deploy to herouku
* create react project 
* cd react project file and npm install
* Build react locally ( npm run dev)
* setup heroku post build 
 "frontend-install" :"cd frontend && npm install --production=false",
    "frontend-build": "cd frontend && npm run build",
    "heroku-postbuild": "npm run frontend-install && npm run frontend-build"
* change backend routes to api using app.use(express.static("./frontend/dist"))
*
## React
C.R.U.D
create
read 
update
delete

login page -/
Master Page -/ holidays/master
Detail Page -/holidays/:id 

