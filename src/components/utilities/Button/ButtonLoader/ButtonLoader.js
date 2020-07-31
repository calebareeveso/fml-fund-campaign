import React from 'react';
import btn from './ButtonLoader.module.css';

const ButtonLoader = () => {
    return(
        <div className={btn.loading}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    )
}

export default ButtonLoader;