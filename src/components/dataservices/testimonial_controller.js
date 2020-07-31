import React, { useState, useEffect } from 'react';
import '../pages/mainpages/landingPage/landingPage.css';
import axios from 'axios';

const Testimonial = () => {
	// const [testimonials, setTestimonial] = useState('');
	// useEffect(() => {
	// 	const apiUrl = 'https://api.fundmylaptop.com/api/testimonial/fetch';
	// 	axios.get(apiUrl).then((response) => setTestimonial(response.data));
	// }, []);

	const data = [
		{
			_id: 1,
			testimonial:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit nisi eaque iste, rem odio obcaecati. Libero deserunt beatae voluptas perspiciatis mollitia officiis.',
			name: 'Scott Eyawo',
			photoUrl: 'https://placeimg.com/100/100/people1',
			company: 'FundMyLaptop',
		},
		{
			_id: 2,
			testimonial:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit nisi eaque iste, rem odio obcaecati. Libero deserunt beatae voluptas perspiciatis mollitia officiis.',
			name: 'Ekene Adim',
			photoUrl: 'https://placeimg.com/100/100/people2',
			company: 'TalentPool',
		},
		{
			_id: 3,
			testimonial:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit nisi eaque iste, rem odio obcaecati. Libero deserunt beatae voluptas perspiciatis mollitia officiis.',
			name: 'Chizo Nwazuo',
			photoUrl: 'https://placeimg.com/100/100/people3',
			company: 'TalentPool',
		},
		{
			_id: 4,
			testimonial:
				'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit nisi eaque iste, rem odio obcaecati. Libero deserunt beatae voluptas perspiciatis mollitia officiis.',
			name: 'CodeLeaf Adio',
			photoUrl: 'https://placeimg.com/100/100/people4',
			company: 'TalentPool',
		},
	];


	return data ? (
		<div className="test-carousel">
			<div
				id="carouselExampleIndicators"
				class="carousel slide"
				data-ride="carousel">
				<ol class="carousel-indicators">
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="0"
						class="active"
					></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
					<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<section className=" container-fluid testimonials-section mt-md-5 row justify-content-center">
							<h3 className="col-md-8 text-center text-white mb-4">
								Testimonials</h3>
							<div className="testimonials-text col-md-9 mb-4">
								<p className=" text-white px-5">
									“I needed a laptop computer to kickstart my freelance business. A
									friend referred my to Fund my Laptop and within an hour of
									posting a campaign i got full funding for my laptop and my
								account was immediately credited”</p>
							</div>
							<div className=" col-md-10 text-center ">
								<img
									className="mb-3 "
									src="https://placeimg.com/100/100/people0"
									alt="testimonial"
									style={{borderRadius: '50%'}}
								/>
								<h5 className="mb-0" style={{ color: 'white' }}>
									Gbolade Popoola</h5>
								<span style={{ color: 'white' }} className="card-subtitle">
									Envato Group</span>
							</div>
						</section>
					</div>
					{data.map((i) => {
						return (
							<div class="carousel-item" key={i.id}>
								<section className=" container-fluid testimonials-section mt-md-5 row justify-content-center">
									<h3 className="col-md-8 text-center text-white mb-4">
										Testimonials</h3>
									<div className="testimonials-text col-md-9 mb-4">
										<p className=" text-white px-5">{`"${i.testimonial}"`}</p>
									</div>
									<div className=" col-md-10 text-center ">
										<img className="mb-3 " src={i.photoUrl} alt="testimonial" style={{borderRadius: '50%'}} />
										<h5 className="mb-0" style={{ color: 'white' }}>
											{i.name}
										</h5>
										<span style={{ color: 'white' }} className="card-subtitle">
											{i.company}
										</span>
									</div>
								</section>
							</div>
						);
					})}
				</div>
				<a
					class="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev"
				>
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="sr-only">Previous</span>
				</a>
				<a
					class="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="next"
				>
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="sr-only">Next</span>
				</a>
			</div>
		</div>
	) : (
			''
		);
};

export default Testimonial;
