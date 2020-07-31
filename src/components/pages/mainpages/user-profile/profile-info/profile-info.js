import React from 'react';
import styles from './profile-info.module.css';

const ProfileInfo = ({children, title}) => {
    return (
        <div className={styles.ProfileInfo}>
            <h3>{title}</h3>
            <p>{children}</p>
        </div>
    );
}


export default ProfileInfo;