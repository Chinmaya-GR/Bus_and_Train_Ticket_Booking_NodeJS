const mongoose = require("mongoose");

const Train_Schema = new mongoose.Schema({
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


const Train_Model = new mongoose.model("Train-Ticket", Train_Schema);

module.exports = Train_Model;