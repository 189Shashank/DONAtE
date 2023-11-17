import React from 'react'
import Layout from '../Components/Layout/layout'
import heartlogo from '../Components/Layout/image/heart_logo.jpg'
import '../cssfiles/index.css'

const Home = () => {
  return (
    <Layout title={"Connecting volunteer blood donars with patients within zero minutes | Donate"}>
     <div class="about-container">
    <img src={heartlogo} alt=""></img>
    <h3>Find blood donors in your area</h3>
    <p class="about-content">
    Our application makes it easier to find volunteer blood donors near your location. Our smart system will find blood donors closer to you and will connect you in a matter of minutes at zero cost.
    </p>
    <br></br>
    <h3>What could you do?</h3>
    <p class="about-content">
    In as little as few minutes, you can become someones unnamed, unknown, but all-important hero. Saving a life is noble work that starts very simply and easily. You can join our cause in a variety of ways. Every form of contribution you make is important, valued and essential in our shared mission to save lives. Register now and enroll as a blood donor. A financial donation can also help save lives.
    </p>
     </div>
    </Layout>
    
  )
}

export default Home