import express from 'express'
import User from '../models/User.js'
import { creatError } from '../utils/error.js';
import { createUser } from '../controllers/user.js';
import { updatedUser } from '../controllers/user.js';
import { deletedUser } from '../controllers/user.js';
import { getUser } from '../controllers/user.js';
import { getAllUser } from '../controllers/user.js';
import { verifyAdmin, VerifyToken } from '../utils/verifyToken.js';
import { verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauth',VerifyToken,(req,res,next)=>{
//     res.send("hello user ,you are logged in")
// })

// router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.send("hello user ,you are logged in You can delete your account")
// })

// router.get('/checkadmin/:id',verifyAdmin,(req,res,next)=>{
//     res.send("hello admin ,you are logged in You can delete all account")
// })



// Create Method
router.post("/",createUser);

// Update Method
router.put("/:id",updatedUser);

// Delete Method
router.delete("/:id",deletedUser)

// Get Method
router.get("/:id",getUser)

// Get All
router.get("/",getAllUser)

// verifyUser



export default router