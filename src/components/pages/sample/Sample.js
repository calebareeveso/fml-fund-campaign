import React from 'react';
import SampleCss from './Sample.module.css'
import { Navbar,Footer } from '../navigation/navigation';

const Sample = () => {

    let id = process.env.REACT_APP_USERNAME;

    return(
        <>
        <Navbar/>
        <div className={SampleCss.sample}>
         
            <h1>Sample Page</h1>
            {id}
          
        </div>
        <Footer/>
        </>
    )
}

export default Sample;
