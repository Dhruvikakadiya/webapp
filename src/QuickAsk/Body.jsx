import react from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './body.css';
const Body = () =>{
    return(
        <>
        <div className="btn"><Button   variant="contained" color="secondary" >
        Create Interview
        </Button></div>
        <div className="comdata">
        <div className="header1">
           <h4>ALLCANDIDATESss</h4>
           <div className='input'>Search
             <TextField  type="date" style={{ margin:'15px'}} id="outlined-basic"  variant="outlined" />
             <TextField id="outlined-basic" label="By Name or ID" variant="outlined" />
           </div>
        </div>
       <div className="header2">fffff</div>
     </div>
     </>
    )
}
export default Body;