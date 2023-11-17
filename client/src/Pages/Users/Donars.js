import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {toast} from 'react-toastify'
import '../../cssfiles/donar.css'
import Layout from '../../Components/Layout/layout'
import maledonar from '../../images/maledonarr.jpg'
import femaledonar from '../../images/femaledonarr.jpg'
import otherdonar from '../../images/otherdonarr.jpg'
import { useAuth } from '../../Context/auth'
import { NavLink, useNavigate } from 'react-router-dom'
import {useSearch} from '../../Context/search'

const Donars = () => {
  const [donars,setDonars] = useState([]);
  const [auth,setAuth] = useAuth();
  const [values,setValues] = useSearch();
  const navigate = useNavigate();
  
  const handleSubmit = async ()=>{
   try {
    if(!values.keyword){
      values.results=[];
      navigate('/search');
      return;
    }
    const {data} = await axios.get(`${process.env.REACT_APP_API}/api/user/search/${values.keyword}`)
    setValues({...values,results:data,keyword:""})
    navigate('/search')
   } catch (error) {
     console.log(error)
   }
}

  //get all donars
  const getAllDonars = async (req,res)=>{
    try {
      const {data} = await axios.get(`${process.env.REACT_APP_API}/api/user/get-donars`)
      setDonars(data.donars);
    } catch (error) {
      console.log(error);
      toast.error("something went wrong")
    }
  }

  useEffect(()=>{
    getAllDonars();
  },[])

  return (
    <Layout title={"We depend on volunteers | Blood donars are Heros | Donate"}>
      <div className="search-container">
  <input type="text" className="search-bar" placeholder="Search Donars City" value={values.keyword} 
  onChange={(e)=>{setValues({...values,keyword:e.target.value})}} />
  
    <button className="search-button" onClick={handleSubmit}>Search</button>
   
</div>

<br></br>
        <h1 style={{textAlign:'center'}}>Our Volunteer Donars</h1>
        {
          donars?.map((d)=>(
               <div className='cardbody'>
               <div className="card">
                 {d.gender==='male' && <img src={maledonar} alt="Card Image" />}
                 {d.gender==='female' && <img src={femaledonar} alt="Card Image" />}
                 {d.gender==='other' && <img src={otherdonar} alt="Card Image" />}
          <div className="card-content">
            <h2 className="card-title">{d.name}</h2>
            <h5 className="card-description">Gender : {d.gender}</h5>
            <h5 className="card-description">Blood Group : {d.bloodgroup}</h5>
            <h5 className="card-description">City : {d.city}</h5>
            <button><NavLink to={`/user-donar/${d._id}`} >Contact</NavLink></button>
          </div>
           </div>
            </div>
          ))
        }
       
    </Layout>
  )
}

export default Donars