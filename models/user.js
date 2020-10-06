var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    number: { type: String, required: true },
    gender: { type: String, required: true },
    date: { type: Date, require: true, default: Date.now() },
});


//Export model
module.exports = mongoose.model("User", UserSchema);
