const mongoose = require("mongoose");
const Contact=mongoose.Schema({
    email:String,
    phone:String,
    comment:String,
});

module.exports = mongoose.model("contacts",Contact);
