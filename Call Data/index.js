const call = require("./call");
const fs = require("fs");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
let url = "mongodb://localhost:27017/callData";
const mongooseDbOption = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(url, mongooseDbOption);
let db = mongoose.connection;
db.on("error",(err)=>console.log(err));

let data = fs.readFileSync("call_data.json");
let calls = JSON.parse(data);

calls.forEach(element => {
    let newCall = new call();
    newCall._id = element._id;
    newCall.source = element.source;
    newCall.destination = element.destination;
    newCall.sourceLocation = element.sourceLocation;
    newCall.destinationLocation = element.destinationLocation;
    newCall.callDuration = element.callDuration;
    newCall.roaming = element.roaming;
    newCall.callCharge = element.callCharge;
    newCall.save((err,res) => {
        if(!err){
            console.log("Success " + res);
        }else {
            console.log(err);
        }
    })
});

