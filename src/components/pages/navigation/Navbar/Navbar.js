import React from 'react';
import './style.css';
import '../../../assets/bootstrap.css';
import { Link, withRouter } from 'react-router-dom';
import logo from '../../../assets/images/logo.svg';
import placehoder from './image/placeholder.svg';
import pageurl from '../../../router/url/pageurl';
import UserSearch from '../../mainpages/landingPage/userSearch/userSearch';
import UserSearchResponsive from '../../mainpages/landingPage/userSearch/userSearchResp';

//Redux Stuff
import { connect } from 'react-redux';
import { logoutUser } from '../../../../actions';

const Navbar = (props) => {
  const logout = () => {
    props.logoutUser(props.history);
  };
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
              {props.user.authenticated && (
                <li className="nav-item ">
                  <Link
                    className="nav-link"
                    to={pageurl.FUNDEE_DASHBOARD_PAGE_URL}
                  >
                    FUND <span className="sr-only">(current)</span>
                  </Link>
                </li>
              )}

              {props.user.authenticated && (
                <li className="nav-item ">
                  <Link className="nav-link" to={pageurl.LOAN_REQUEST_PAGE_URL}>
                    REQUEST <span className="sr-only">(current)</span>
                  </Link>
                </li>
              )}

              {!props.user.authenticated && (
                <li className="nav-item ">
                  <Link className="nav-link" to={pageurl.ABOUT_US_PAGE_URL}>
                    ABOUT <span className="sr-only">(current)</span>
                  </Link>
                </li>
              )}

              {props.user.authenticated && (
                <li className="nav-item ">
                  <div className="dropdown">
                    <Link
                      className="dropdown-toggle nav-link"
                      to="#"
                      id="dropdownDashboard"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      DASHBOARD <span className="sr-only">(current)</span>
                    </Link>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownDashboard"
                    >
                      <Link
                        className="dropdown-item text-fml-primary"
                        to={pageurl.FUNDEE_DASHBOARD_PAGE_URL}
                      >
                        Fundee Dashboard
                      </Link>
                      <Link
                        className="dropdown-item text-fml-primary"
                        to={pageurl.INVESTOR_DASHBOARD}
                      >
                        Investor Dashboard
                      </Link>
                      {props.user.credentials.data.role === 'admin' && (
                        <Link
                          className="dropdown-item text-fml-primary"
                          to={pageurl.ADMIN_DASHBOARD_PAGE_URL}
                        >
                          Admin Dashboard
                        </Link>
                      )}
                    </div>
                  </div>
                </li>
              )}
              {!props.user.authenticated ? (
                <li className="nav-item ">
                  <Link
                    className="btn btn-fml-secondary"
                    to={pageurl.LOGIN_PAGE_URL}
                  >
                    LOGIN <span className="sr-only">(current)</span>
                  </Link>
                </li>
              ) : (
                <li className="nav-item">
                  <div className="dropdown my-2">
                    <img
                      src={props.user.credentials.data.photoURL}
                      style={{
                        borderRadius: '100%',
                        objectFit: 'cover',
                        height: '30px',
                        width: '30px',
                      }}
                      alt=""
                    />
                    <Link
                      className=" dropdown-toggle text-fml-primary"
                      to="#"
                      role="button"
                      id="dropdownMenuLink"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      {`${props.user.credentials.data.firstName.toUpperCase()} ${props.user.credentials.data.lastName.toUpperCase()}`}
                    </Link>

                    <div
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <Link
                        className="dropdown-item text-fml-primary"
                        to={pageurl.USER_PROFILE_PAGE_URL}
                      >
                        Profile
                      </Link>
                      <Link
                        className="dropdown-item text-fml-primary"
                        to="#"
                        onClick={logout}
                      >
                        Logout
                      </Link>
                    </div>
                  </div>
                </li>
              )}


              {/* {window.location.pathname === "/" ? (
                <UserSearch />
               ) : null
               
              } */}

              {/* THe person working on Login component should set this on isLoggedIn */}

              {props.user.authenticated && (
                <li className="nav-item ">
                  <Link to={pageurl.COMPAIGN_PAGE_URL}>
                    <button className="btn btn-fml-secondary" style={{width:"max-content"}}>
                      Start a campaign{' '}
                      <span className="sr-only">(current)</span>
                    </button>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>

        {window.location.pathname === "/" ? (
          <UserSearchResponsive />
         ) : null
         
        }

      </nav>
    </>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = {
  logoutUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
