const mongoose = require("mongoose");
const validator = require("validator");



const studentSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:true
    },
    lastname: {
        type:String,
        required:true
    },
    gender: {
        type:String,
        required:true
    },
    batch: {
        type:Number,
        required:true
       
    },
    college: {
        type:String,
        required:true
    },
    branch: {
        type:String,
        required:true

    },
    city: {
        type:String,
        required:true
    },
    state: {
        type:String,
        required:true
    },
    contact: {
        type:Number,
        required:true,
        unique:true
        // validate(value){
        //     if(!validator.isContact(value)){
        //         throw new Error("Wrong contact no.");
        //     }
    },
    email: {
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("No such email exists.");
            }
        }
    },
    linkedin: {
        type:String,
        required:true
        // unique:true
    },
    instagram: {
        type:String,
        // required:true
        // unique:true
    },
    designation: {
        type:String
        // required:true
    },
    skills:{
        type:String
        // required:true
    },
    about:{
        type:String
        // required:true
    },
    password:{
        type:String
        // required:true
    },
    cpassword:{
        type:String
        // required:true
    }
    // img:{
    //     data:Buffer,
    //     contentType: String,
    // }
});

//we will create a new connection

const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;