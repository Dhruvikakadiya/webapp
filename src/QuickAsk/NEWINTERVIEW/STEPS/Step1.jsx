import React from 'react';
import TextField from '@material-ui/core/TextField';
import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';


const Step1 = () =>{
    return(
        <div className="step1">
            <div className="inputfield">
               <PersonIcon style={{ marginTop:'3px' , width:'25px' , color:'gray'}}/><TextField id="standard-basic" placeholder="First Name" />
               <PersonIcon style={{ marginTop:'3px' , marginLeft:'30px' ,color:'gray'}}/><TextField id="standard-basic" placeholder="Last Name" />
               <EmailIcon style={{ marginTop:'3px' ,  marginLeft:'30px' , color:'gray'}}/><TextField id="standard-basic" placeholder="Email-Id" />
               <PersonIcon style={{ marginTop:'3px', marginLeft:'30px' ,color:'gray'}}/><TextField id="standard-basic" placeholder="Id" />
           </div>
        </div>

    );
}
export default Step1;