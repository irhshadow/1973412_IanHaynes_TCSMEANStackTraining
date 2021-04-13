const {body} = require('express-validator/check');

exports.hasDescription = body('description')
    .isLength({min: 5})
    .withMessage("Description is required")

exports.isEmail = body("email")
    .isEmail()
    .withMessage("Invalid Email")

exports.hasPassword = body("password")
    .exists()
    .withMessage("Password is required")

exports.hasName = body("name")
    .isLength({min: 3})
    .withMessage("Name is required. Minimum 5 characters")