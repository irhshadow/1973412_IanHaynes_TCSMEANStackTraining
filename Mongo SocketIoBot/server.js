const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const message = require("./message");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost/MongoSocketIo', { useNewUrlParser: true})

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html");
})

io.on("connection",(socket)=>{
    console.log("User Connected");

    socket.on("message",(data) => {
        console.log("Successful emit");
        let currMessage = new message();
        currMessage.name = data.name;
        currMessage.message = data.message;
        saveMessage(currMessage);        
    })
});

async function saveMessage(currMessage) {
    console.log("In save function");
    currMessage = await currMessage.save();
}




server.listen(9090,()=>console.log("Server is running on port number 9090"));