const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    // id:{type:Number, required:true},
    first_name:{type:String, required:true},
    last_name:{type:String, required:true},
    email_id:{type:String, required:true},
    pincode:{type:Number, required:true},
    age:{type:Number, required:true},
    gender:{type:String, required:true},
    },
    {
        versionKey: false,
        timestamps:true,

    }
    )

const User = mongoose.model("user", userSchema);

module.exports = User;