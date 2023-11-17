import express from "express";
import {loginController, registerController, updateProfileController} from "../controllers/authController.js";
import { requireSignIn } from './../middlewares/authMiddleware.js';

//router object
const router = express.Router()
 
//routing

//Register --> POST
router.post('/register',registerController);

//Login --> POST
router.post('/signin',loginController)

//protected route
router.get('/user-auth',requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

//update profile
router.put('/update-profile',requireSignIn,updateProfileController)

export default router
