const express = require("express")
const router = express.Router()
const Holiday = require("../models/holidays")
const {StatusCodes} = require("http-status-codes")

router.post("/", async (req,res)=>{
        res.status(404).send("Likes cannot be negative")
    try{
        const holiday = await Holiday.create(req.body);
        res.status(201).send(holiday)
    }catch(error){
        res.send(error)
    }
})

//? Request + Cookie -> Session -> req.session
router.get("/:id", async(req, res) => {
   if(!req.session.user){
    res.status(StatusCodes.UNAUTHORIZED).send({status: "failed", data: "no access"});
   } else{

       const id = req.params.id;
       try {
           const holiday = await Holiday.findById(id);
           if (holiday === null) {
               res.status(StatusCodes.NOT_FOUND).send("Holiday not found");
            } else {
                res.status(StatusCodes.OK).send(holiday);
            }
        } catch (error) {
            res.send(error);
        }
    }
    });
    

module.exports = router;