import React from 'react';
import './footer.css';

const Footer = () =>{
    const year = new Date().getFullYear();
    return(
         <>
             <div className="footer2"></div>
            <div className="footer">Quick Ask © {year}</div>
        </>
    );
}

export default Footer;