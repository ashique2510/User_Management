import User from "../models/User.js";

// createUser
export const createUser=async (req,res,next)=>{

    const newUser=new User(req.body)

    try{
    const savedUser=await newUser.save();
    res.status(200).json(savedUser)

    }catch(err){
        next(err)
    }
}

// Update Method
export const updatedUser=async (req,res,next)=>{

    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id, 
        {$set:req.body},
        {new:true})
        res.status(200).json(updatedUser)
    
        }catch(err){
        next(err)
    }
}

// Delete Method
export const deletedUser=async (req,res,next)=>{

    try{
        await User.findByIdAndDelete(req.params.id, )
        
        res.status(200).json("User has been delete ")
    
        }catch(err){
        next(err)
    }
}

// Get Method
export const getUser=async (req,res,next)=>{

    try{
        const getMehod = await User.findById(req.params.id )
          
          res.status(200).json("User has been shown ")
      
          }catch(err){
        next(err)
    }
}

// Get All User
export const getAllUser=async (req,res,next)=>{

    try{
        const getAlll = await User.find()
          
          res.status(200).json(getAlll)
      
          }catch(err){
        next(err)
    }
}