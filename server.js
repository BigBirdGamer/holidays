require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT;
const path = require("path");
const morgan = require("morgan");
const { request } = require("http");
const session = require("express-session");


//?
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true },
  })
);
app.use(express.static("./frontend/dist"));

app.get("/api/", (req, res) => {
  res.send("Test Lucas holidays");
});
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/dist/index.html"));
});

app.post("/api/login", (req, res) => {
  const { uname, psw } = req.body;
  if (uname === "admin" && psw === "admin") {
    req.session.loggedIn = true;
    res.send("logged in");
  } else {
    res.send("User name or password is incorrect");
  }
  res.send("login as");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
