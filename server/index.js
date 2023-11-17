import express from "express";
import dotenv from 'dotenv'
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from './routes/authRoute.js'
import userRoute from './routes/userRoute.js'
import cors from 'cors'

//configure env
dotenv.config()

//database config
connectDB();

//rest object
const app = express();

//middlewares
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('/api/auth',authRoute);

app.use('/api/user',userRoute)

//rest api
app.get('/',(req,res)=>{
    res.send(
        `<h1> Welcome to Blood Bank </h1>`
        )
})

//port
const Port = process.env.PORT || 8080;

//run listen
app.listen(Port,()=>{
    console.log(`Server is running on ${Port}`)
})