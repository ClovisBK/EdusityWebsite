import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_img from '../../assets/play-icon.png'
const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt=""  className='about-img'/>
            <img src={play_img} alt=""  className='play-icon' onClick={() => {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative educational journey with out universty's comprehensive education programs. Our cutting-edge curriculum is desgned to empower students with teh knowledge, skills, and experiences needed to excel in the dynmic field of education.</p>
            <p>With a focus on Innovation, hands-on learing, and personalized mentorship, our programs prepare aspiring educatiors to make a meaningful impact in classrooms, schools, and communities.</p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs offers othe perfect pathway to achieve your goals and unlock you full potential in shaping the future of education.</p>
        </div>
      
    </div>
  )
}

export default About
