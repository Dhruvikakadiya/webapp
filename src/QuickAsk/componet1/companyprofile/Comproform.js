import React from 'react'
import Field from './Field'
import Department from './Department'
import Manager from './Manager'
import Jobtitle from './Jobtitle'
import  '../index.css';

const Comproform=()=> {
    return (
        <>
         <div className="card0">
        <div className="header2">
        <h4>Comapany Information</h4>
        </div>
            <Field/>
            <Department/>
            <Manager/>
            <Jobtitle/>
            </div>

        </>
    )
}

export default Comproform