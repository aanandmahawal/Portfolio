const mongoose = require("mongoose");
const Detail=mongoose.Schema({
    siteName:String,
    siteAuthor:String,
    links:[
        {
            label:String,
            url:String,
        },
    ],
});

module.exports = mongoose.model("detail",Detail);
