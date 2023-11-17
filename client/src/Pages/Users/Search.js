import React,{useState} from 'react'
import { useSearch } from '../../Context/search'
import Layout from '../../Components/Layout/layout';
import { NavLink } from 'react-router-dom';
import maledonar from '../../images/maledonarr.jpg'
import femaledonar from '../../images/femaledonarr.jpg'
import otherdonar from '../../images/otherdonarr.jpg'
import '../../cssfiles/donar.css'


const Search = () => {
    const [values,setValues] = useSearch();
    const [donars,setDonars] = useState([]);
  return (
    <Layout title={"Raise a blood request among our volunteer blood donars | Donate"}>
      <h1 style={{textAlign:'center'}} >Donars Search Results</h1>
      <h5 style={{textAlign:'center'}} >{values?.results.length < 1 ? "No Products Found" : 
      `Found : ${values?.results.length}`}</h5>

{
          values?.results.map((d)=>(
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

export default Search