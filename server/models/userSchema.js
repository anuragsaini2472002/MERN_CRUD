const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{type:String, required: true },
    email:{ type: String, required: true, unique:true},
    age:{ type: Number, required: true},
    mobile:{type:Number, required: true, unique: true},
    work:{type: String, required: true},
    address:{type: String, required: true},
    desc:{ type: String, required: true}
})

const user = new mongoose.model("crud_project", userSchema);

module.exports = user;
