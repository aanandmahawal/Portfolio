const express = require("express");
const  { route } = require('express/lib/application');

const Detail=require("../models/detail");
const Contact=require("../models/contact");



const routes=express.Router();


routes.get("/",async(req,res)=>{
    const details=await Detail.findOne({"_id":"664f88a4e1d00e8ff85da2b1"})
    res.render("index",{
        details:details,
    });
})
routes.post("/process-contact-form",async(req,res)=>{
    console.log(req.body)
    //save the data in db
    try{
        const data=await Contact.create(req.body);
        console.log(data);
        res.redirect("/");
    }catch(e){
        console.log(e);
        res.redirect("/");
    }

})

module.exports=routes;
