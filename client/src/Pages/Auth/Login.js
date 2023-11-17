import React,{useState} from 'react'
import Layout from '../../Components/Layout/layout'
import { NavLink,useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
import "../../cssfiles/login.css"
import { useAuth } from '../../Context/auth'

const Login = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();
  const [auth,setAuth] = useAuth();

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const res= await axios.post(`http://localhost:8080/api/auth/signin`,{
        email,password
      })
      if(res.data.success){
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token
        })
        localStorage.setItem("auth",JSON.stringify(res.data));
        setTimeout(() => {
          toast.success(res.data.message);
        }, 1000);
        navigate('/')
      }else
      {
        toast.error(res.data.message);
      }
   } catch (error) {
     console.log(error);
     toast.error('something went wrong')
   }
  }
  return (
    <Layout title={"Save lives around you | Donate"}>
      <div className='logbody'>
        <div className='wrapper'>
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className='input-box'>
              <input type="text" placeholder='Enter Email' value={email} 
              onChange={(e)=>{setEmail(e.target.value)}} required />
              <i class='bx bxs-envelope'></i>
            </div>
            <div className='input-box'>
            <input type="password" placeholder="Enter Password" value={password}
             onChange={(e)=>{setPassword(e.target.value)}} required />
            <i class='bx bxs-lock-alt'></i>
            </div>
            <div className='remember-forget'>
             <label><input type="checkbox" /> Remember me </label> 
              <NavLink to="#">Forget Password?</NavLink>
            </div>

            <button type="submit" className="btn">Login</button>

            <div className='register-link'>
              <p>Don't have an account? <NavLink to="/register" >Register</NavLink></p>
            </div>
          </form>
        </div>
        </div>
    </Layout>
  )
}

export default Login