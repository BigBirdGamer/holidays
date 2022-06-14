
require("dotenv").config();
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const debug = require("debug")
const path = require("path");

const app = express();
const PORT = process.env.PORT ?? 2000;
const log = debug("simon:server");

app.use(morgan("dev"));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // cookie: { secure: true }
}))

app.use(express.static("./frontend/dist"));

app.get("/api/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/login/", (req, res) => {
    const {username , password} = req.body
if(username === "admin" && password === "123"){
    res.send({ status: "ok"})

}else{
    res.send({ status: "error"})

}
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/dist/index.html"));
});

app.listen(PORT, () => {
  log(`Server is running on port ${PORT}`);
});
