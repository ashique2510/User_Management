import jwt from "jsonwebtoken"
import { creatError } from "./error.js";

export const VerifyToken=(req,res,next)=>{
    const token=req.cookies.access_token;
    if(!token){
        return next(creatError(401,"You are not authenticated"))
    }
    jwt.verify(token,process.env.JWT,(err,user)=>{
        if(err) return next(creatError(403,"Token is not valid"))
        req.user=user;
        next()
    })
}

// Verify user(user can delete their account)
export const verifyUser=(req,res,next)=>{
    VerifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id ||req.user.isAdmin){
            next()
        }else{
             return next(creatError(403,"You are not authorized"))
        }
    })
}

// Verify Admin(Admin can delete user account)
export const verifyAdmin=(req,res,next)=>{
    VerifyToken(req,res,next,()=>{
        if(req.user.isAdmin){
            next()
        }else{
             return next(creatError(403,"You are not authorized"))
        }
    })
}
