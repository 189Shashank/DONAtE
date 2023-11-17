import React,{useEffect, useState} from 'react'
import { useAuth } from '../../Context/auth'
import Layout from '../../Components/Layout/layout'
import { NavLink } from 'react-router-dom';
import {toast} from 'react-toastify'
import axios from 'axios';
import '../../cssfiles/dashboard.css'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [auth,setAuth] = useAuth();
  
  const handleLogout = ()=>{
    localStorage.removeItem('auth');
    setAuth({
      ...auth,user:null,token:''
    })
  }
     
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [phone,setPhone] = useState("");
  const [address,setAddress] = useState("");
  const [state,setState] = useState("");
  const [city,setCity] = useState("");
  const [bloodgroup,setBloodgroup] = useState("");
  const [gender,setGender] = useState("");
  const [donar,setDonar] = useState("0");
  const navigate = useNavigate();

//get user data
useEffect(()=>{
  const {name,email,address,state,city,donar,gender,bloodgroup,phone} = auth?.user;
  setName(name);
  setEmail(email);
  setAddress(address);
  setState(state);
  setCity(city);
  setDonar(donar);
  setGender(gender);
  setBloodgroup(bloodgroup);
  setPhone(phone);
  if(gender==='male')
  {
    document.getElementById("m").checked = true;
  }else if(gender==='female')
  {
    document.getElementById("f").checked = true;
  }else if(gender==="other")
  {
    document.getElementById("o").checked = true;
  }
  if(donar==="1")
  {
    document.getElementById("d").checked = true;
  }

},[auth?.user])

  //form handle
  const handleSubmit = async (e)=>{
    e.preventDefault();
    console.log(donar,gender);
     try {
        const res= await axios.put(`${process.env.REACT_APP_API}/api/auth/update-profile`,
        {
          name,email,address,state,city,donar,gender,bloodgroup,phone,
        },{
          headers:{"Authorization":auth?.token}
      })
        if(res.data.success){
          setAuth({...auth,user:res.data.updateduser});
          let ls = localStorage.getItem('auth');
          ls = JSON.parse(ls);
          ls.user = res.data.updateduser;
          localStorage.setItem("auth",JSON.stringify(ls));
          navigate('/')
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
    <Layout title={"SignUp and help lives in your Neighbourhood | Donate"}>
   <div className="container">
  <h1 className="form-title">Welcome {auth?.user?.name}</h1>
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
        onChange={(e)=>setEmail(e.target.value)} style={{backgroundColor:'white',color:'gray'}}   disabled/>
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

    </div>
    <div className="gender-details-box">
      <span className="gender-title">Gender</span>
      <div className="gender-category">
        <input type="radio" name="gender" id="m" value="male" onClick={()=>setGender("male")} required/>
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="f" value="female" onClick={()=>setGender("female")} required/>
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="o" value="other" onClick={()=>setGender("other")} required/>
        <label htmlFor="other">Other</label>
      </div>
    </div>
    <input type="checkbox" id="d" name="donar" value="1" onClick={()=>{if(donar==="1"){setDonar("0")} else {setDonar("1")}
      }} />
     <label for="donar"> Mark this to be a donar </label><br></br>
    <div className="form-submit-btn">
    <button type="submit" className="btn">Update</button>
    <NavLink onClick={handleLogout} to='/signin' style={{textDecoration:'none'}}  >Logout</NavLink>
    </div>
  </form>
</div>
    </Layout>
  )
}

export default Dashboard;