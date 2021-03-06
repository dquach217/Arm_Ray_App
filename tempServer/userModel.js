'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
let userSchema = new Schema({
	username:{type:String,required:true},
	email:{type:String,required:true},
	password:{type:String,required:true}
});

// we need to create a model using it
let User = mongoose.model('User', userSchema);
// make this available to our users in our Node applications
module.exports = User;