const Course = require("../models/course");

exports.add = async (req, res, next) => {
    try {
        let course = new Course();
        course.id = req.body.id;
        course.name = req.body.name;
        course.description = req.body.description;
        course.amount = req.body.amount;
        course = await course.save();

        res.send(course);
    } catch (err) {
        next(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        let course = await Course.findById(req.params.id);
        course.amount = req.body.amount;
        course = await course.save();

        res.send(course);
    } catch (err) {
        next(err);
    }
};

exports.delete = async (req, res, next) => {
    try {
        let course = await Course.findById(req.params.id);
        course = await course.delete();
        res.send({message: "success"});
    } catch (err) {
        next(err);
    }
};

exports.show = async (req, res) => {
    try {
        const course = await Course.findOne().populate("user");
        res.send(course);
    } catch (err) {
        next(err);
    }
}