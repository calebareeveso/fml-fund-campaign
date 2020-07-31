import React from 'react';
import '../../navigation/Navbar/style.css';
import '../../../assets/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import pageurl from '../../../router/url/pageurl';


 
const ProfileNav = () => {
  
    return (
     <>
  
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          <Link className="navbar-brand" to={pageurl.LANDING_PAGE_URL}>
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#exCollapsingNavbar"
            aria-controls="exCollapsingNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div
            className="collapse navbar-collapse text-center"
            id="exCollapsingNavbar"
          >
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link
                  className="nav-link fml-secondary" 
                  to={pageurl.USER_PROFILE_PAGE_URL}>
                  Profile<span className="sr-only">(current)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

    )
};
export default ProfileNav;