const express = require("express");
require('dotenv').config()
require("./src/DB/db");
const Bus_Model = require("./src/Models/bus_model");
const Train_Model = require("./src/Models/Train_model");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/bus",async (req,res)=>{
    console.log(req.body);
    try{
        let customerData = await new Bus_Model(req.body);
        let createdData = await customerData.save();
        res.status(200).send({
            message:"Ticket Booked Successfully!!"
        });
    }catch(e){
        res.status(404).send(e);
    }
});

app.get("/bus/:email",async (req,res)=>{
    try{
        let email = req.params.email;
        let receivedData = await Bus_Model.find({email:email});
        res.status(200).send({
            data:receivedData
        })
    }catch(e){
        res.status(404).send(e)
    }
});

app.get("/train/:email",async (req,res)=>{
    try{
        let email = req.params.email;
        let receivedData = await Train_Model.find({email:email});
        res.status(200).send({
            data:receivedData
        })
    }catch(e){
        res.status(404).send(e)
    }
});

app.post("/train",async (req,res)=>{
    console.log(req.body);
    try{
        let customerData = await new Train_Model(req.body);
        let createdData = await customerData.save();
        res.status(200).send({
            message:"Ticket Booked Successfully!!"
        });
    }catch(e){
        res.status(404).send(e);
    }
});

app.listen(5000,()=>{
    console.log("Listening to port Number 5000....");
});