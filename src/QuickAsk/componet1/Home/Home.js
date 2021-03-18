import React from 'react'
import Button from '@material-ui/core/Button';

import img1 from '../img/About/Admininterview.png'
import img2 from '../img/About/homeinter.png'

function Home() {
    return (
        <>
        <div className="header"></div>
        <div className="headtitle">
        <h3 style={{fontSize:"50px",color:"#38d39f",fontFamily:"DIN"}}>WE</h3>
        <h3 style={{fontSize:"50px",color:"#38d39f",fontFamily:"DIN"}}>ON-SCREEN</h3>
     <h3 style={{fontSize:"50px",color:"#38d39f",fontFamily:"DIN"}}>INTERVIEWERS</h3>

     <h4 style={{fontStyle:"-moz-initial"}}> so you don't have to worry</h4><br></br>

     <div style={{borderBottom:"7px solid #38d39f ",marginRight:"930px"}}></div><br></br>

     <Button className="freebutton" variant="contained" color="secondary">Try It Free</Button><br></br><br></br><br></br><br></br><br></br>
    
     <img  style={{height:"400px",width:"450px"}} src={img2}></img>
    
    
    
        </div><br></br><br></br><br></br>

        <div className="aboutfooter">
        <img  style={{height:"300px",width:"380px",marginLeft:"100px"}} src={img1}/>
      <div className="col-8">
     <h4 style={{color:"white",fontSize:"55px",marginLeft:"60px",marginTop:"40px"}}>WIN YOUR TIME BACK!!</h4>
     <h4 style={{fontSize:"20px",marginLeft:"60px"}}>Rather Than Spending Precious Time Interviewing
The Wrong Candidates, We’ll On-Screen For You So
You Can Spend Your Time On Other Endeavors.</h4>
     </div>
        </div>
            

        
        </>
    )
}

export default Home
