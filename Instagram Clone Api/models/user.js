const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true, select: false },
    name: { type: String, required: true},
    following: [{type: Schema.Types.ObjectId, ref: "user" }]
});

userSchema.methods.encryptPassword = async password => {
    const salt = await bcrypt.genSalt(5);
    const hash = await bcrypt.hash(password, salt);
    return hash;
}

userSchema.methods.validPassword = async function(givenPassword) {
    const result = await bcrypt.compare(givenPassword, this.password);
    return result;
}

module.exports = mongoose.model("user", userSchema);