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
## React port 2200
C.R.U.D
create
read 
update
delete

login page -/
Master Page -/ holidays/master
Detail Page -/holidays/:id 

## Schema

* Holiday
  * Name - String
  * Likes - number
  * Celebrated - boolean
  * Description - String

## CRUD

Create - /holidays/ - POST - /api/holidays/
Read - /holidays - GET - /api/holidys 
Read (Secret) - /holidays/:id - GET - /api/holidays/:id

Update - PUT - /api/holidays/:id
Delete - DELETE - /api/holidays/:id


## Security

* Hide Detail Link when not logged in
* Direct access to Detail URL is bounced out
