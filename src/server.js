const express = require("express");

const app = express()

const connect = require("./configs/db");

const User = require("./models/user.model");

const userController = require("./controllers/user.controller");











app.use(express.json());



app.use("/users", userController);





const start = async () =>{

    await connect();

    app.listen(3898,() =>{
        console.log("PORT 3898")
    })
}

module.exports = start