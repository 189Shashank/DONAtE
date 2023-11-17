import express from "express";
import { requireSignIn } from './../middlewares/authMiddleware.js';
import { getDonarController, getSingleDonarController, searchDonarController } from "../controllers/userController.js";

//router object
const router = express.Router()

//Donar List ---> GET
router.get('/get-donars',getDonarController)

//Single Donar ---> GET
router.get('/user-donar/:id',getSingleDonarController);

//search product
router.get('/search/:keyword',searchDonarController);

export default router