const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const callSchema = new Schema({
    _id: {type: String},
    source: {type: String},
    destination: {type: String},
    sourceLocation: {type: String},
    destinationLocation: {type: String},
    callDuration: {type: String},
    roaming: {type: String},
    callCharge: {type: String}
});

module.exports = mongoose.model("call", callSchema);