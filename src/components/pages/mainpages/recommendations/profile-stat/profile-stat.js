import React from 'react';
import styles from './profile-stat.module.css';


const ProfileStat = ({ statsTitle, statsValue}) => {

    return (
        <div className={styles.ProfileStat}>
            <div>
                <h3>{statsTitle.split(' ')[0]}<br/>{statsTitle.split(' ')[1]}</h3>  
                <p>{statsValue}</p>
            </div>
        </div>
    );
}


export default ProfileStat;