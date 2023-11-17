import React,{useState} from 'react'
import "../../cssfiles/register.css"
import Layout from '../../Components/Layout/layout'
import {toast} from 'react-toastify'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'



const Register = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [state,setState] = useState("");
  const [city,setCity] = useState("");
  const [bloodgroup,setBloodgroup] = useState("");
  const [gender,setGender] = useState("");
  const [password,setPassword] = useState("");
  const [donar,setDonar] = useState("0");
  const navigate = useNavigate();

  //form handle
  const handleSubmit = async (e)=>{
    e.preventDefault();
     try {
        const res= await axios.post(`${process.env.REACT_APP_API}/api/auth/register`,{
          name,email,password,address,state,city,donar,gender,bloodgroup,phone
        })
        if(res.data.success){
          navigate('/signin')
          setTimeout(() => {
            toast.success(res.data.message);
          }, 1000);
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
    <Layout title={"SignUp and help save lives in your Neighbourhood | Donate"}>
   <div className="container">
  <h1 className="form-title">Registration</h1>
  <form onSubmit={handleSubmit}>
    <div className="main-user-info">
      <div className="user-input-box">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" placeholder="Enter Username" value={name}
        onChange={(e)=>setName(e.target.value)} required/>
      </div>
      <div className="user-input-box">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter Email" value={email}
        onChange={(e)=>setEmail(e.target.value)} required/>
      </div>
      <div className="user-input-box">
        <label htmlFor="bloodgroup">Blood Group</label>
        <input type="text" id="bloodgroup" name="bloodgroup" placeholder="Blood Group" value={bloodgroup}
        onChange={(e)=>setBloodgroup(e.target.value)} required/>
      </div>
      <div className="user-input-box">
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" placeholder="Enter Address" value={address}
        onChange={(e)=>setAddress(e.target.value)} required/>
      </div>
      <div className="user-input-box">
        <label htmlFor="address">State</label>
        <input type="text" id="state" name="state" placeholder="Enter State Name" value={state}
        onChange={(e)=>setState(e.target.value)} required/>
      </div>
      <div className="user-input-box">
        <label htmlFor="address">City</label>
        <input type="text" id="city" name="city" placeholder="Enter City Name" value={city}
        onChange={(e)=>setCity(e.target.value)} required/>
      </div>
      <div className="user-input-box">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="text" id="phoneNumber" name="phoneNumber" placeholder="Enter Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} required/>
      </div>
      <div className="user-input-box">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
      </div>

    </div>
    <div className="gender-details-box">
      <span className="gender-title">Gender</span>
      <div className="gender-category">
        <input type="radio" name="gender" id="male" value="male" onChange={(e)=>setGender(e.target.value)} required/>
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="female" value="female" onChange={(e)=>setGender(e.target.value)} required/>
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="other" value="other" onChange={(e)=>setGender(e.target.value)} required/>
        <label htmlFor="other">Other</label>
      </div>
    </div>
    <input type="checkbox" id="donar" name="donar" value="1" onChange={(e)=>setDonar(e.target.value)} />
     <label for="donar"> Mark this to be a donar </label><br></br>
    <div className="form-submit-btn">
      <input type="submit" defaultValue="Register" />
    </div>
  </form>
</div>

    </Layout>
  )
}

export default Register