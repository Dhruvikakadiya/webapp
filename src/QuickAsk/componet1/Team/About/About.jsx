import React from 'react'
import img from '../../img/About/inter.png'
import img1 from '../../img/About/admin.png'

function About() {
    return (
      <>
      <div className="header"></div>
     
      <div className="title">
      <div>
        <img  className="about-img" src={img}/>
      </div>
     <span style={{fontSize:"70px",color:"#38d39f",fontFamily:"cursive"}}>HOW WE</span><br></br>
     <span style={{fontSize:"70px",color:"#38d39f",fontFamily:"cursive"}}>CAN HELP YOU</span>
     <h3> And why we care</h3><br></br>
     
     

      <div style={{borderBottom:"7px solid black",marginRight:"950px"}}></div><br></br>
     <h4 style={{color:"red"}}>we are just getting started!!</h4>
     <h6  style={{fontSize:"18px"}}>QuickAsk is a new startup that has every intention of making your life easier.<br></br>
      The idea came about after Founder, Leo Gonzalez found himself awake at all <br></br>
      hours in order to appease our new Global Market and Tech Lifestyle</h6><br></br><br></br>
    
    
     <h4 style={{color:"red"}}> Many of us have been there, right?</h4>
     <h6  style={{fontSize:"18px"}}>As the world becomes united and technology allows for constant and instant communication, <br></br>
     a new challenge of timing has arrived-while the west coast is sleeping, the east coast rises and Europe is well within their day.<br></br>
      When on Earth can we all get together to meet.</h6><br></br>

      <h6 style={{fontSize:"18px"}}>Due to this global collaboration, Leo found himself tired of working all hours of the day and night and decided to create QuickAsk.</h6>


     </div><br></br><br></br>

      <div className="aboutfooter">
     
    
     <img  style={{height:"360px",width:"380px",marginLeft:"100px"}} src={img1}/>
      <div className="col-8">
     <h4 style={{color:"white",fontSize:"55px",marginLeft:"60px",marginTop:"40px"}}>MISSION STATMENT</h4>
     <h4 style={{fontSize:"20px",marginLeft:"60px"}}>We believe that the shortest video is longer than the longest memory. Our mission is to provide
      you the tools that will make your interviewing process easier,quick, and your hiring … a team choice</h4>
     </div>
     </div> 

    

      </>
    )
}

export default About


