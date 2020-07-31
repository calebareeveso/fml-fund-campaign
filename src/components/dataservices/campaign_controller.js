import React, { useState, useEffect } from 'react';
import '../pages/mainpages/landingPage/landingPage.css';
import arrow from '../pages/mainpages/landingPage/img/arrow.png';
import { Reveal, Tween, Timeline } from 'react-gsap';
import axios from 'axios';

const Campaign = () => {
  // const [campaign, setCampaign] = useState('');
  // useEffect(() => {
  //   const apiUrl =
  //     'https://api.fundmylaptop.com/api/campaigns/fetchSixFeaturedCams';
  //   axios.get(apiUrl).then((response) => setCampaign(response.data.data));
  // }, []);

  const campaign = [
		{
			_id: 1,
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit',
			name: 'Scott Eyawo',
			photoUrl: 'https://placeimg.com/400/400/people1',
      occupation: 'Student',
      currency: 'N',
      amountAccumulated: '100,000',
      repaymentTimes: '5',
      createdAt: '01/01/2020',
      title: 'Laptop Search',
      level: '89%'
		},
		{
			_id: 2,
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit',
			name: 'Ekene Adim',
			photoUrl: 'https://placeimg.com/400/400/people2',
      occupation: 'Engineer',
      currency: 'N',
      amountAccumulated: '160,000',
      repaymentTimes: '15',
      createdAt: '07/04/2020',
      title: 'Laptop Repair',
      level: '50%'
		},
		{
			_id: 3,
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit',
			name: 'Chizo Nwazuo',
			photoUrl: 'https://placeimg.com/400/400/people3',
      occupation: 'Entrepreneur',
      currency: 'N',
      amountAccumulated: '700,000',
      repaymentTimes: '20',
      createdAt: '09/03/2020',
      title: 'Laptop Search',
      level: '77%'
		},
		{
			_id: 4,
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit',
			name: 'CodeLeaf Adio',
			photoUrl: 'https://placeimg.com/400/400/people4',
      occupation: 'Student',
      currency: 'N',
      amountAccumulated: '300,000',
      repaymentTimes: '15',
      createdAt: '11/01/2020',
      title: 'Laptop Repair',
      level: '69%'
		},
		{
			_id: 5,
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit',
			name: 'CodeLeaf Adio',
			photoUrl: 'https://placeimg.com/400/400/people5',
      occupation: 'Teacher',
      currency: 'N',
      amountAccumulated: '400,000',
      repaymentTimes: '19',
      createdAt: '02/02/2020',
      title: 'Laptop Search',
      level: '45%'
		},
		{
			_id: 6,
			description:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit',
			name: 'CodeLeaf Adio',
			photoUrl: 'https://placeimg.com/400/400/people6',
      occupation: 'FreeLancer',
      currency: 'N',
      amountAccumulated: '500,000',
      repaymentTimes: '25',
      createdAt: '19/11/2020',
      title: 'Laptop Repair',
      level: '25%'
		},
  ];
  
  const showDetails = () => {
    window.location.href = '/campaigns'
    // const trendDetails = document.querySelector('.trend-details');
    // trendDetails.style.display = "block"
}

  return campaign ? (
    <section className="compaign-section">
      <div className="container">
        <Timeline>
          <div className="row d-flex justify-content-between">
            <Tween from={{ opacity: 0, y: 30 }} delay={1} duration={1.5}>
              <h3 className="col-7">Featured Campaigns </h3>
              <span className="mt-1 btn-view-all " onClick={showDetails}>View All+</span>
            </Tween>
          </div>
        </Timeline>
        <div className="row compaign-cards ">
          {campaign.map((i) => {
            return (
              <div className="col-lg-4 my-3 " id={i._id}>
                <div className="card ">
                  <img
                    className="card-img-top"
                    src={i.photoUrl}
                    alt="Camp1"
                    style={{height: '20em'}}
                  />
                  {/* card body */}
                  <div className="card-body">
                    <h5 className="card-title mb-0">{i.occupation}</h5>
                    <span className="card-subtitle ">{i.title}</span>
                    <p className="card-text mt-4">{i.description}</p>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        id="card-progress-bar"
                        role="progressbar"
                        style={{ width: i.level }}
                        aria-valuenow={90}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                    <div className="d-flex justify-content-between mt-3 mb-2">
                      <span className="card-price">
                        {i.currency}
                        {i.amountAccumulated}
                      </span>
                      <span className="card-progress-num">
                        {i.repaymentTimes}%
                      </span>
                    </div>
                    <span className="card-fonds">
                      Created at {i.createdAt}
                    </span>
                  </div>
                  {/* card footer */}

                  <div className="card-footer d-flex align-center justify-content-between p-0">
                    <a href className="m-auto " onClick={showDetails}>
                      {' '}
                      View details <img src={arrow} alt="a4" />{' '}
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  ) : (
    ''
  );
};

export default Campaign;
