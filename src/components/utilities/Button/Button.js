import React from 'react';
import ButtonLoader from './ButtonLoader';
import button from './button.module.css';

export default ({propsTitle, buttonStyle,load,propDisplay,...props}) => {
    const loader = <ButtonLoader/>
    return(
        <button {...props} className={`${button.btnstyle_qobi} ${buttonStyle}`} style={{display:propDisplay}}> 
            {propsTitle === null ? 'Button' : load ? loader : propsTitle }
        </button>
    )
}