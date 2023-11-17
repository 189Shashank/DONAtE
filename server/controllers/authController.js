import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import userModel from '../models/userModel.js'
import Jwt from 'jsonwebtoken';

export const registerController = async (req,res)=>{
   try {
    const {name,email,password,phone,address,gender,donar,bloodgroup,city,state} = req.body;

    //validations
    if(!name){return res.send({error:'Name is required'})}
    if(!email){return res.send({error:'Email is required'})}
    if(!phone){return res.send({error:'Phone is required'})}
    if(!password){return res.send({error:'Password is required'})}
    if(!address){return res.send({error:'Address is required'})}
    if(!gender){return res.send({error:'Gender is required'})}
    if(!donar){return res.send({error:'Donar Type is required'})}
    if(!bloodgroup){return res.send({error:'Blood Group is required'})}
    if(!city){return res.send({error:'City is required'})}
    if(!state){return res.send({error:'State is required'})}

    //already existing user
    const existinguser = await userModel.findOne({email});
    if(existinguser)
    {
        return res.status(200).send({
            success:true,
            message:'Already Register Please Login'
        })
    }
   
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({name,email,phone,address,password:hashedPassword,gender,bloodgroup,donar,city,state}).save();
    res.status(201).send({
        success:true,
        message:'User Registerd Successfully',
        user
    })
    
   } catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:'Error while registration',
        error
    })
   }
}

export const loginController = async (req,res)=>{

    try {
         const {email,password} = req.body;

         //validation
         if(!email || !password){
            return res.status(200).send({
                success:false,
                message:"Invalid Credentials"
            })
        }
          //check user
          const user = await userModel.findOne({email})
          if(!user)
          {return res.status(200).send({
            success:false,
            message:"Email is not registered"
          })}

            const match = await comparePassword(password,user.password);
            if(!match)
            {
                return res.status(200).send({
                    success:false,
                    message:'Invalid Password'
                })
            }
         //token generation
         const token = await Jwt.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
         res.status(200).send({
            success:true,
            message:"Login Successfully",
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                gender:user.gender,
                bloodgroup:user.bloodgroup,
                donar:user.donar,
                state:user.state,
                city:user.city,
                _id:user._id,
            },
            token
         })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Login",
            error
        })
    }
}


//update profile
export const updateProfileController = async (req,res)=>{
    try {
        const {name,email,address,phone,gender,donar,bloodgroup,state,city} = req.body;
        const user = await userModel.findOne({email});


        const updatedUser = await userModel.findByIdAndUpdate(user._id,{
           name : name,
           email : email,
           phone : phone,
           address : address,
           donar : donar,
           state : state,
           city : city,
           gender : gender,
           bloodgroup : bloodgroup
        },{new:true})
     
        res.status(200).send({
           success:true,
           message:'Profile Updated Successfully',
           updateduser:{
               _id:updatedUser._id,
              name:updatedUser.name,
              gender:updatedUser.gender,
              email:updatedUser.email,
              phone:updatedUser.phone,
              address:updatedUser.address,
              donar:updatedUser.donar,
              bloodgroup:updatedUser.bloodgroup,
              state:updatedUser.state,
              city:updatedUser.city,
              phone:updatedUser.phone
           }
        })
        
      } catch (error) {
        console.log(error);
        res.status(400).send({
           success:false,
           message:'Error while updating Profile',
           error
        })
      }
}