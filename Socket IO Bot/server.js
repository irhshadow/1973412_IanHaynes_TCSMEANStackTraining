const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/index.html");
})

io.on("connection",(socket)=>{
    console.log("User Connected");

    socket.on("message",(data) => {
        console.log(`Hello ${data.name},`);
        console.log(`Your ${data.message}`);
    })
});




server.listen(9090,()=>console.log("Server is running on port number 9090"));