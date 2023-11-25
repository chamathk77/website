import express from "express";
import bodyParser from "body-parser";

import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));


const app =express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));


app.get("/",(req,res)=>{
    res.render("login.ejs");
});

// app.get("/home",(req,res)=>{
//     res.render("home.ejs");
// });



    





app.post("/submit" , (req,res)=>{

    const PasswordCheck=req.body["Password"];
    const emailcheck=req.body["email"];
    
    
    if(PasswordCheck=== "ch123" && emailcheck==="chamath@gmail.com"  ){

        res.render("home.ejs");
    }
     else{
        res.render("login.ejs");
    }



});




app.listen (port ,()=>{
    console.log(`listen to port ${port}`);
});