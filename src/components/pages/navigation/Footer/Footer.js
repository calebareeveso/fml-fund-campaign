import React from 'react';
import './style.css';
import '../../../assets/bootstrap.css';
import footerLogo from '../../../assets/images/footer-logo.svg';
import { Link } from 'react-router-dom';
import pageurl from '../../../router/url/pageurl';
import facebookIcon from '../../../assets/images/facebook.svg';
import twitterIcon from '../../../assets/images/twitter-icon.svg';
import instagramIcon from '../../../assets/images/instagram.svg';

const Footer = () => {
  return (
    <>
      <footer className="bg-fml-primary">
        <div className="container">
          <div className="row justify-content-between mobile-footer ">
            <div className="mobile-center">
              <ul className="list-unstyled">
                <li className="nav-item">
                  <Link className="navbar-brand" to="#">
                    <img src={footerLogo} alt="" />
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="#">Address </Link>
                </li>
                <li className="nav-item">
                  <Link to="#">Email Address</Link>
                </li>
                <li className="nav-item">
                  <Link to="#">Phone </Link>
                </li>
                <ul className="row list-unstyled m-0 justify-content-center justify-content-md-start">
                  <li className="nav-item">
                    <Link to="#">
                      {' '}
                      <img src={facebookIcon} alt="" />{' '}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#">
                      {' '}
                      <img src={instagramIcon} alt="" />{' '}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="#">
                      {' '}
                      <img src={twitterIcon} alt="" />{' '}
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>

            <div className="mobile-center">
              <ul className="list-unstyled">
                <li className="nav-item">
                  <Link className="navbar-brand" to="#">
                    RESOURCES
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to=""> Why choose FundMyLaptop </Link>
                </li>
                <li className="nav-item">
                  <Link to=""> How P2P Lending works</Link>
                </li> */}
                <li className="nav-item">
                  <Link to={pageurl.ABOUT_US_PAGE_URL}>
                    {' '}
                    About FundMyLaptop{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={pageurl.BLOG_PAGE_URL}> Blog </Link>
                </li>
                <li className="nav-item">
                  <Link to={pageurl.CONTACT_US_PAGE_URL}> Contact Us </Link>
                </li>
              </ul>
            </div>
          </div>

          <hr className="only-mobile" />
          <div className="row justify-content-between m-0 mob-class">
            <p> 2020 &copy; Copyrights All rights reserved </p>
            <ul className="list-unstyled d-md-inline-flex">
              <li className="foot-item">
                <Link to={pageurl.FAQ_PAGE_URL}> FAQ</Link>
              </li>
              <li className="foot-item">
                <Link to={pageurl.PRIVACY_POLICY_PAGE_URL}>
                  {' '}
                  Privacy Policy
                </Link>
              </li>
              <li className="foot-item">
                <Link to={pageurl.TC_PAGE_URL}> Terms and Conditions</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
