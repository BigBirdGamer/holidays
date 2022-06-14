require('dotenv').config()
const express = require("express")
const app = express()
const port = process.env.PORT ;
const path = require("path")

//?
app.use(express.static("./frontend/dist"))

app.get("/api/", (req,res)=>{
    res.send("Test Lucas holidays")
})
app.get("/*", (req,res)=>{
    res.sendFile(path.join(__dirname, "./frontend/dist/index.html"))
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  