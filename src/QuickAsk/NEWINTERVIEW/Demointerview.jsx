import React from 'react';
import './Createinter.css';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
const CreateInterview = () =>{
    return(
        <>
          <div className="Main_box">
              <h2>NEW INTERVIEW</h2>
                  <div className="stepper">
                      <Stepper activeStep={activeStep} orientation="vertical"/>
                  </div>
          </div>
        </>
    );
}
export default CreateInterview;
