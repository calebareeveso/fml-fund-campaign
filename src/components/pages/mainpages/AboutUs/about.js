import React from 'react';
import { Link } from 'react-router-dom';
import '../../../assets/bootstrap.css';
import './about.css';
import pageurl from '../../../router/url/pageurl';
import Image1 from './img/Rectangle 593.png';
import Image2 from './img/Rectangle 594.png';
import Image3 from './img/Rectangle 597.png';
import Header from '../../navigation/Navbar/Navbar'
import Footer from '../../navigation/Footer/Footer'
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'

const AboutUs = () => {
  return (
      <ScrollIntoView>
      <Header />
      <div className="about-us">
    <div className="container">
        <ol className="f-12 mt-3 ml-sm-3 ml-1 breadcrumb" style={{ background: 'none' }}>
            <li className="breadcrumb-item">
            <Link className="pcolor" to={pageurl.LANDING_PAGE_URL}>
                Home
            </Link>
            </li>
            <li className="breadcrumb-item active text-dark">
            <Link className="pcolor1" href="#">
                <b>About FundMyLaptop</b>
            </Link>
            </li>
        </ol>
        
        
        <section className="container1">
            <div className="container-text">
                <h1 className="container-header">We connect <span className="text--secondary">investors</span> and interns</h1>
                
                <div className="mobile">
                {/* eslint-disable-next-line */}
                    <img className="container-img" src={Image2} />
                </div>
                <p> FundMylaptop is a platform where people who are willing to invest in tech talent get connected to individuals who are in need of funds for a laptop purchase or repair. This platform is not just connecting individuals, it is also breaking barriers and constraints of the tech industry.
                </p>
            </div>
            <div className="container-image">
                {/* eslint-disable-next-line */}
                <img className="container-img" src={Image2} />
            </div>
        </section>

        <section className="container1" id="middle-row">
            <div className="container-text">
                <h1 className="container-header">
                Helping <span className="text--secondary">You</span> achieve that goal</h1>
                <div className="mobile">
                    {/* eslint-disable-next-line */}
                    <img className="container-img" src={Image1} />
                </div>
                <p>
                We don’t just connect investors to interns. We are trying to build a
                community where absolutley no one is left behind in the tech
                community. Whether you are unable to pursue that tech dream of yours,
                bcause of lack of funds, MyFundLaptop is the best platform for you to
                get adequate funding.
                </p>
            </div>
            <div className="container-image">
                {/* eslint-disable-next-line */}
                <img className="container-img" id="contain-img" src={Image1} />
            </div>
        </section>

        <section className="container1">
            <div className="container-text">
                <h1 className="container-header">
                Setting <span className="text--secondary">Standard</span> Pace
                </h1>
                <div className="mobile">
                {/* eslint-disable-next-line */}
                <img className="container-img" src={Image3} />
                </div>
                <p>
                FundMylaptop has a system in place that verifies indivuals who wish to
                get funded. Verification checks ranges from BVN, KYC checks of
                fundees, also long-time reliable fundees vouch for new, incoming
                fundees.
                </p>
            </div>
            <div className="container-image">
                {/* eslint-disable-next-line */}
                <img className="container-img" src={Image3} />
            </div>
        </section>

        <div className="container py-4 text-center my-sm-5 my-3">
            <h3 className="my-sm-5 my-3 text-below"><b>Join other investors on Fund My Laptop</b></h3>
            <div>
            <Link to={pageurl.LOGIN_PAGE_URL}className="start-btn btn btn-secondary btn-lg align-self-center mb-5">
                Start funding
            </Link>
            </div>
        </div>
    </div>
    </div>
    <Footer />
    </ScrollIntoView>
  );
};

export default AboutUs;
