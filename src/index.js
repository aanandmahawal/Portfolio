const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/main")
const detail = require("./models/detail")

app.use(bodyParser.urlencoded({
    extended:true
}))

//Setting public folder or static folder
//  /static/images/photo.jpeg will give image in that folder
app.use("/static",express.static("public"));

//Setting routes 
app.use("",routes);



//Setting Template Engine 
app.set("view engine","hbs");
app.set("views","views");

//Setting Partials i.e. sections that are used in many routes 
hbs.registerPartials("views/partials");

//db connections
 let db=mongoose.connect("mongodb+srv://12215092:9813094435@mongocloud.hjva6l0.mongodb.net/portfolio").then(success=>console.log("db connected"))
// detail.create({
//         siteName:"Mahawal's Domain",
//         siteAuthor:"Aanand Mahawal",
//         links:[
//             {
//                 label:"Home",
//                 url:"/",
//             },
//             {
//                 label:"About",
//                 url:"/about",
//             },
//              {
//                  label:"Skills",
//                  url:"/skills",
//              },
//             {
//                 label:"Projects",
//                 url:"/projects",
//             }, 
//             {
//                 label:"Contact us",
//                 url:"/contact",
//             }
//         ]

//     }))


app.listen(process.env.PORT | 3000);
