import React from 'react'
import Button from '@material-ui/core/Button';
import AddManager from '../companyprofile/Add/AddManager'

const Manager=()=> {
    return (
        <>
              <div className="card1">
        <h5 className="title-font">Manager</h5>
        
        <div className="row">
         <div className="col-12">
           <div className="table">
             <thead>
               <tr>
               <th style={{paddingLeft:"10px"}}>Name</th>
               <th style={{paddingLeft:"113.3px"}}>Email</th>
               <th style={{paddingLeft:"113.3px"}}>Status</th>
               <th style={{paddingLeft:"113.3px"}}>Date</th>
               <th style={{paddingLeft:"113.3px"}}>Deleted</th>
               <th style={{paddingLeft:"113.6px"}}>Actions</th>
               </tr>
              
             </thead>
           </div>
         </div>
         </div>
         <AddManager/><br></br>
      

        </div>
        </>
    )
}

export default Manager
