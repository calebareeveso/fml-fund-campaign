import React from 'react';
import styles from './fundee-campaign.module.css';

const FundeeCampaign = ({title, description, amount, location, occupation, fundeepic, currency}) => {
    if (!fundeepic){
       const fundeepic = "https://miro.medium.com/max/500/0*-ouKIOsDCzVCTjK-.png";
       return (
        <div className={styles.RecommendBox}>
            <div>
                <img src={fundeepic} className="img-fluid" alt="Fundee" />
                <h5>{title}</h5>
                <h6>{description}</h6>
                <p>{location}</p>
                <p>{occupation}</p>
                <p>{currency} {amount}</p>
            </div>
        </div>
    );
    }else {
        return (
            <div className={styles.RecommendBox}>
                <div>
                    <img src={fundeepic} className="img-fluid" alt="Fundee" />
                    <h5>{title}</h5>
                    <h6>{description}</h6>
                    <p>{location}</p>
                    <p>{occupation}</p>
                    <p>{currency} {amount}</p>
                </div>
            </div>
        );
    } 
}


export default FundeeCampaign;