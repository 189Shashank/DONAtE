import React from 'react'
import Layout from '../Components/Layout/layout'
import '../cssfiles/about.css'

const About = () => {
  return (
    <Layout title={"About Non Profit | Donate"}>
    <div class="about-container">
    <h1 class="about-heading">About Us - DENOtE</h1>
    <h3 style={{textAlign:'center'}}>Give Blood Save Life</h3>
    <br></br>
    <h3>What is this all about ?</h3>

    <p class="about-content">
     DONAtE is an innovative approach to address global health. We provide immediate access to blood donors within 24 hours a day, 7 days a week! DONAtE is one of several community organizations working together as a network that respond to disasters or emergency situations in an efficient manner.
    </p>
    <br></br>
    <h3>What we do ?</h3>

    <p class="about-content">
       The ultimate goal of this project is to provide an easy-to-use, easy-to-access, efficient, and reliable way to get life-saving blood, free of cost. Save Life Connect works with network partners to connect blood donors and recipients our mobile application. Our network of volunteer blood donors are ready to help save lives any time, any place.
    </p>
    <br></br>

    <h3>How it works ?</h3>
    <p class="about-content">
        The First step for the users is to register with us where we also give an option while registering weather the user wants to be a donar with us. After proper authentication and Login the users can access and search our volunteers ie donars where all their contact details will be displayed. Users can also filter donars based on particular city state name bloodgroup which makes their experience even better. 
    </p>
</div>
    </Layout>
   
  )
}

export default About