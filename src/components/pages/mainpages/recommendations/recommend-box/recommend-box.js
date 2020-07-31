import React from 'react';
import styles from './recommend-box.module.css';


const RecommendBox = ({trusteeName, trusteePic, children}) => {
    return (
        <div className={styles.RecommendBox}>
            <div>
                <img src={trusteePic} alt="Trustees" />
                <h3>{trusteeName}</h3>
                <p>{children}</p>
            </div>
        </div>
    );
}

export default RecommendBox;