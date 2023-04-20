const mongoose = require("mongoose");

const Bus_Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    source:{
        type:String,
        required:true
    },
    destination:{
        type:String,
        required:true
    },
    NumberOfAdults:{
        type:Number,
        required:true
    },
    NumberOfChildren:{
        type:Number,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    TotalPrice:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
}
);


const Bus_Model = new mongoose.model("Bus-Ticket", Bus_Schema);

module.exports = Bus_Model;