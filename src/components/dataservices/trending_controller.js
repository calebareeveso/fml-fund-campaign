import React, { useState, useEffect } from "react";
import "../pages/mainpages/landingPage/landingPage.css";
import arrow from "../pages/mainpages/landingPage/img/arrow.png";
import { Reveal, Tween} from 'react-gsap';
import axios from "axios";

const Trending = () => {
    const [trendings, setTrending] = useState("");
    useEffect(() => {
        // const apiUrl = "";
        // axios.get(apiUrl).then((response) => setTrending(response.data.data));
    });

    const data = [
        {
            _id: 1,
            testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit nisi eaque iste, rem odio obcaecati. Libero deserunt beatae voluptas perspiciatis mollitia officiis.',
            name: 'Gbolade Popoola',
            title: "Buy a Lenovo IdeaPad",
            description: "Bad screen, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            photoUrl: 'https://placeimg.com/400/300/people',
            company: 'FundMyLaptop',
            percent: '80%',
            price: 'N1,000,000',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
        },
        {
            _id: 2,
            testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit nisi eaque iste, rem odio obcaecati. Libero deserunt beatae voluptas perspiciatis mollitia officiis.',
            name: 'Scott Eyawo',
            title: "Get another MacBook",
            description: "Bad screen, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            photoUrl: 'https://placeimg.com/400/300/people',
            company: 'TalentPool',
            percent: '62%',
            price: 'N1,000,000',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
        },
        {
            _id: 3,
            testimonial: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet, autem omnis quis hic quam culpa deleniti odit nisi eaque iste, rem odio obcaecati. Libero deserunt beatae voluptas perspiciatis mollitia officiis.',
            name: 'Ekene Adim',
            title: "Get a Lenovo and a MacBoook",
            description: "Bad screen, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            photoUrl: 'https://placeimg.com/400/300/people',
            company: 'TalentPool',
            percent: '54%',
            price: 'N1,000,000',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation'
        },
    ];

    const FadeInUp = ({ children }) => (
        <Tween from={{ y: 20, opacity: 0 }}>{children}</Tween>
    );
    const FadeInLeft = ({ children }) => (
        <Tween from={{ x: -40, opacity: 0 }}>{children}</Tween>
      );

    const showDetails = () => {
        window.location.href = '/campaigns'
    }

    return data ? (
        <section className="container trending-section my-md-5">
            <FadeInLeft><h3 className="mb-4">Trending Now !</h3></FadeInLeft>

            <div className="row trending-cards ">
                {data.map((i) => {
                    return (
                        <Reveal>
                            <div className="col-lg-4 mb-4">
                                <div className="card ">
                                <FadeInUp>
                                    <img
                                        className="card-img-top"
                                        src={i.photoUrl}
                                        alt="Card1"
                                    />
                                    </FadeInUp>
                                    <FadeInUp>
                                    <div className="card-body">
                                        <h5 className="card-title mb-0">{i.name}</h5>
                                        <span className="card-subtitle ">{i.title}</span>
                                        <p className="card-text mt-4">{i.description}</p>
                                        <div className="progress">
                                            <div
                                                className="progress-bar"
                                                id="card-progress-bar"
                                                role="progressbar"
                                                style={{ width: i.percent }}
                                                aria-valuenow={90}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <div className="d-flex justify-content-between mt-3 mb-2">
                                            <span className="card-price">{i.price}</span>
                                            <span className="card-progress-num">{i.percent}</span>
                                        </div>
                                        <span className="card-fonds">Raised of {i.price}</span>
                                    </div>
                                    </FadeInUp>
                                    <FadeInUp>
                                    <div className="card-footer d-flex align-center justify-content-between p-0">
                                        <a href className="m-auto " onClick={showDetails}>
                                            {" "}view details <img src={arrow} alt="a1" />{" "}
                                        </a>
                                    </div>
                                    </FadeInUp>
                                </div>
                            </div>
                        </Reveal>
                    )
                })}
            </div>
        </section>
    ) : ''

}

export default Trending;
