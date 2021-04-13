const path = require("path");
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const passportJWT = require('./middlewares/passportJWT')();
const errorHandler = require("./middlewares/errorHandler");
const postRoutes = require("./routes/post");
const authRoutes = require("./routes/auth");
const mongoose = require("mongoose");
const app = express();

app.use(cors());

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/instagram-clone-api', { useNewUrlParser: true});


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(passportJWT.initialize());

app.use("/api/post", passportJWT.authenticate(), postRoutes);
app.use("/api/auth", authRoutes);

app.use(errorHandler)

app.listen(8000, () => {
    console.log("Listening");
})