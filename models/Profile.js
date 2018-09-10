const mongoose = require('mongoose');

const Profile = new mongoose.Schema({
    firstName: {type:String, trim:true, ignoreCase:true, default:''},
    lastName: {type:String, trim:true, ignoreCase:true, default:''},
    age: {type:Number, default:0},
    team: {type:String, trim:true, ignoreCase:true, default:''},
    position: {type:String, trim:true, ignoreCase:true, default:''}
})

module.exports = mongoose.model('Profile', Profile)