import Jwt  from "jsonwebtoken";

//Protected route ---> Token Based
export const requireSignIn = async (req,res,next)=>{
    try {
        const decode = Jwt.verify(req.headers.authorization,process.env.JWT_SECRET)
        req.user=decode;
        next();   
    } catch (error) {
        console.log(error)
    }
}