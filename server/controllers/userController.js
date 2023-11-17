import userModel from "../models/userModel.js";

export const getDonarController = async (req,res)=>{
   try {
    const donars = await userModel.find({donar:"1"})
    .select("-password");

    res.status(200).send({
      success:true,
      message:"Donars List",
      total:donars.length,
      donars,
    })

   } catch (error) {
    console.log(error);
    res.status(500).send({
        success:false,
        message:"Error in Fetching Donars",
        error
    })
   }
}

export const getSingleDonarController = async (req,res)=>{
    try {
        const id = req.params.id;
        const user = await userModel.findOne({_id:id})
        .select("-password");
        res.status(200).send({
            success:true,
            message:"User Details Fetched",
            user
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:"Error in fetching single user details",
            error
        })
}
}

//search donar
export const searchDonarController = async (req,res)=>{
    try {
        const {keyword} =req.params;
         
          const result = await userModel.find({
            $or:[
              {city:{$regex:keyword,$options:"i"}},
              {bloodgroup:{$regex:keyword,$options:"i"}},
              {name:{$regex:keyword,$options:"i"}},
              {state:{$regex:keyword,$options:"i"}},
            ]
          }).select("-password");
 
          res.json(result);
      } catch (error) {
       console.log(error);
       res.status(400).send({
         success:false,
         message:'Error in searching Donar',
         error
       })
      }
}