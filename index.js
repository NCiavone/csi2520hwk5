/*
-----------------------------------------------------------------------------
Name: index.js
Author: @NCiavone
Date Created: 12/2/21
Purpose: The js landing page for the server.
Notes:
    -The noted from this come from fullstack.js from Prof Sen and his 
    recording from Nov. 18th
-----------------------------------------------------------------------------
*/


const express = require('express');
const mysql = require("mysql");
const ejs = require("ejs");


const app = new express();
// DataBase Config
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rocknroll1!",
   // database: "testDB",
});

// Creating the DB connection
db.connect((err) => {
    if (err) {
      throw err;
    } else {
      console.log(`Successful connected to the DB....`);
    }
  });

//Middleware Function init
//Body Parser!
app.use(express.json());
app.use(express.urlencoded({extended:true})); //to parse the HTML form

//Initialize ejs Middleware
app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));

//route <url the client will use and how the server will repons to that url>
app.get("/",(req,res) => {
    res.render('index');
});


// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server is running on ${PORT}`));


