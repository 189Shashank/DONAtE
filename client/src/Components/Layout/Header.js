import React from 'react'
import heartify from '../Layout/image/heartfiy.jpg'
import close from '../Layout/image/close.png'
import hamburger from '../Layout/image/hamburger.png'
import heart from '../Layout/image/blood.jpg'
import userlogo from '../Layout/image/users.png'
import {NavLink,Link} from 'react-router-dom'
import { useAuth } from '../../Context/auth'


function showSidebar(){
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display = 'flex'
}
function closeSidebar(){
  const sidebar=document.querySelector('.sidebar');
  sidebar.style.display = 'none' 
}
const Header = () => {
  const [auth,setAuth] = useAuth();


  return (
    <>
       <div className="nav">
       <img className='xyz' src={heart} width="70px" height="70px" alt=""/>
       <h1 className='hideonMobile'>DONAtE</h1>
       <h1 className='hideonTab' style={{fontSize:'15px',marginTop:'55px'}}>GIVE BLOOD SAVE LIFE</h1>
       <ul>
       <li className='hideonMobile'><NavLink to='/'>HOME</NavLink></li>
       <li className='hideonMobile'><NavLink to='/about'>ABOUT</NavLink></li>
        <li className='hideonMobile'><NavLink to='/donars'>DONARS</NavLink></li>
        {
          !auth.user ? (
            <>
            <li className='hideonMobile'><NavLink to='/signin'>SIGNIN</NavLink></li>
            <li className='hideonMobile'><NavLink to='/register'>REGISTER</NavLink></li>
            </>
          ) 
          : (
            <>
            <NavLink to='/dashboard' className='hideonMobile'>
            <img src={userlogo} style={{objectFit:'contain',marginTop:'25px',marginRight:'7px',backgroundColor:'red',borderRadius:'25px'}} width='45px' height='45px'   alt="user profile"></img>
            </NavLink>
            </>
          )
        }
       </ul>
       <Link onClick={showSidebar} className='hideonTab'><img src={hamburger} alt="" width='50px' height='50px' style={{marginTop:'35px',marginRight:'20px',objectFit:'contain',listStyle:'none'}}/></Link>
      </div>

      <div className="sidebar">
        <div>
        <img src={heartify} width="60px" height="60px" alt=""/>
       <h1>DONAtE</h1>
       <Link onClick={closeSidebar}><img src={close} alt="" width='40px' height='40px' style={{marginTop:'30px',objectFit:'contain',listStyle:'none'}}/></Link>
       </div>
       <ul>
       <li><NavLink to='/'>HOME</NavLink></li>
       <li><NavLink to='/about'>ABOUT</NavLink></li>
        <li><NavLink to='/donars'>DONARS</NavLink></li>
        {
          !auth.user ? (
            <>
            <li ><NavLink to='/signin'>SIGNIN</NavLink></li>
            <li ><NavLink to='/register'>REGISTER</NavLink></li>
            </>
          ) 
          : (
            <>
            
            <NavLink to='/dashboard' >
            <img src={userlogo} style={{objectFit:'contain',marginTop:'25px',marginRight:'7px',backgroundColor:'white',color:'black',borderRadius:'25px'}} width='50px' height='50px'   alt="user profile"></img>
            </NavLink>
            </>
          )
        }
       </ul>
      </div>
    </>
  )
}

export default Header