import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema=new mongoose.Schema({

   

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true,
        min:3
    },
    address:{
        type:String,
    },
    age:{
        type:Number,
    },
    isAdmin:{
        type:Boolean,
        default:false
    },

},{timestamps:true});

export default mongoose.model('User',userSchema)