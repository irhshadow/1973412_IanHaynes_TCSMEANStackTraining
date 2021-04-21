const path = require("path");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const Course = require("./models/course");
const errorHandler = require("./middlewares/errorHandler");

const mongoose = require("mongoose");
const app = express();

app.use(cors());

mongoose.Promise = global.Promise;
var db = mongoose.connect('mongodb://localhost/MongoDBWebsite', { useNewUrlParser: true});


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.get('/', function (req,res) {
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.post("/add", async function(req, res){
    let course = new Course();
    course.name = req.body.name;
    course.description = req.body.description;
    course.amount = req.body.amount;
    course = await course.save();

    res.send(course);
})

app.patch("/update/:id", async function(req, res){
    let course = await Course.findById(req.params.id);
    course.amount = req.body.amount;
    course = await course.save();

    res.send(course);
});

app.delete("/delete/:id", async function(req, res){
    let course = await Course.findById(req.params.id);
    course = await course.delete();
    res.send({message: "success"});
});

app.get("/show", async function (req, res){
    const course = await Course.find().populate("user");
    res.send(course);
});

app.use(errorHandler);

app.listen(8000, () => {
    console.log("Listening");
})

