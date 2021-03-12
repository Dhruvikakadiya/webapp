import React from 'react'
import Button from '@material-ui/core/Button';
import AddJob from '../companyprofile/Add/AddJob';

const Jobtitle=()=> {
    return (
        <>
              <div className="card1">
          <h5 className="title-font">Job Title</h5>
          
         <div className="row">
         <div className="col-12">
           <div className="table">
             <thead>
               <tr>
               <th style={{paddingLeft:"10px"}}>Name</th>
               <th style={{paddingLeft:"347px"}}>Department</th>
               <th style={{paddingLeft:"347px"}}>Actions</th>
               </tr>
             </thead>
           </div>
         </div>
         </div>
         <AddJob/><br/>
        </div>
      
        </>
    )
}

export default Jobtitle
