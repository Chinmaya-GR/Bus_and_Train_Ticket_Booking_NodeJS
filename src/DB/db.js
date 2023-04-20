const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("DataBase Connected Successfully...");
}).catch((e)=>{
    console.log("error "+ e);
});