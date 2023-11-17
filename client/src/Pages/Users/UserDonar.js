import React,{useState,useEffect} from 'react'
import Layout from '../../Components/Layout/layout'
import axios from 'axios'
import {toast} from 'react-toastify'
import "../../cssfiles/user.css"
import maledonar from '../../images/maledonarr.jpg'
import femaledonar from '../../images/femaledonarr.jpg'
import otherdonar from '../../images/otherdonarr.jpg'
import { useAuth } from '../../Context/auth'
import { NavLink, useParams } from 'react-router-dom'

const UserDonar = () => {
    const [donar,setDonar] = useState({});
    const [auth,setAuth] = useAuth();
    const params = useParams();

    //get user donar
    const getSingleDonar = async (req,res)=>{
        try {
          const {data} = await axios.get(`${process.env.REACT_APP_API}/api/user/user-donar/${params.id}`)
          setDonar(data.user);
        } catch (error) {
          console.log(error);
          toast.error("something went wrong")
        }
      }

      useEffect(()=>{
        getSingleDonar();
      },[])

  return (
    <Layout title={"Our donars are life savers | Donate"}>
        <div className="profile-card">
        {donar.gender==='male' && <img src={maledonar}  alt="Card Image" />}
        {donar.gender==='female' && <img src={femaledonar} alt="Card Image" />}
        {donar.gender==='other' && <img src={otherdonar} alt="Card Image" />}
  <div className="profile-content">
    <h1 className="profile-name">{donar.name}</h1>
    <h4 className="profile-title">Gender : {donar.gender}</h4>
    <h4 className="profile-title">Blood Group : {donar.bloodgroup}</h4>
    <h4 className="profile-title">Contact No : {donar.phone}</h4>
    <h4 className="profile-title">Email : {donar.email}</h4>
    <h5 className="profile-details">Address : {donar.address}</h5>
    <h4 className="profile-title">State : {donar.state}</h4>
    <h4 className="profile-title">City : {donar.city}</h4>
  </div>
</div>

    </Layout>
  )
}

export default UserDonar