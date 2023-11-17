import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Spinner = () => {
    const [count,setCount] = useState(5);
    const navigate = useNavigate();

    useEffect(()=>{
      const interval = setInterval(()=>{
        setCount((prevValue) => --prevValue)
      },1000)
      count===0 && navigate('/signin')
      return ()=> clearInterval(interval)

    },[count,navigate])
  return (
    <>
    <div className='pnf'>
      <h1 className='pnf-title'>404</h1>
      <h2 className='pnf-heading'>Oops ! Page Not Found</h2>
      <h2 className='pnf-heading'>Please Login To Access This Page</h2>
      <Link to="/" className='pnf-btn'>
      Redirecting you to SignIn Page in {count} seconds
      </Link>
      </div>
    {/* <div>
    <h1>Please Login To Access Blood Donars List</h1>
    <br></br>
    <h2>Redirecting you to SignIn Page in {count} seconds</h2>
    </div> */}
    </>
  )
}

export default Spinner