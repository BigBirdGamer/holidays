require("dotenv").config();
const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const holidaysController = require("./controllers/HolidaysController");

const app = express();
const PORT = process.env.PORT || 2000;

mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose, lucas");
});

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.static("./frontend/dist"));
app.use("/api/holidays", holidaysController);

app.get("/api/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/login/", (req, res) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "123") {
    req.session.user = "admin"; //? create the session & store the cookie
    console.log("login session", req.session)
    res.send({ status: "Sucess", data:{name: "admin", id: "aaa"}});
  } else {
    res.send({ status: "error" });
  }
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./frontend/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
