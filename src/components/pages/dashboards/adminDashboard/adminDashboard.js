import React, { Component } from 'react';
import './adminDashboard.css';
import { NavLink, withRouter } from 'react-router-dom';
import alerm from "./img/alerm.png";
import left from "./img/left-logo.png";
import Ham1 from "./img/Ham-1.png";
import Ham2 from "./img/Ham-2.png";
import pageurl from "../../../router/url/pageurl";
import { connect } from 'react-redux';
import { logoutUser } from '../../../../actions/actions';

class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    this.onHandleLogout = this.onHandleLogout.bind(this);
  }

  componentDidMount() {
    let sidebar_opener = document.querySelector('#sidebar-opener');
    let sidebar_closer = document.querySelector('#sidebar-closer');
    let sidebar = document.querySelector('#sidebar');

    sidebar_opener.addEventListener('click', function () {
      sidebar.style.display = 'block';
      sidebar.classList.remove('sidebar_close');
      sidebar.classList.add('sidebar_open');
    });

    sidebar_closer.addEventListener('click', function () {
      sidebar.classList.remove('sidebar_open');
      sidebar.classList.add('sidebar_close');
    });
  }

  onHandleLogout() {
    const { logoutUser, history } = this.props;
    logoutUser(history);
  }

  render() {
    const { firstName, lastName, photoURL } = this.props.user.credentials.data;

    return (
      <>
        <div className="adminDashboard py-0 my-0">
          <div className="container-fluid">
            <div className="row">
              {/* Sidebar Section */}
              <aside
                className="col-6 col-md-3 col-lg-2 custom__bg-dark vh-100 p-0 sidebar d-flex flex-column align-items-center"
                id="sidebar"
              >
                <div className="logo-container py-1 position-relative">
                  <img
                    src={Ham2}
                    alt="Ham2"
                    className="text-white d-md-none pos__abs"
                    id="sidebar-closer"
                  />
                  <img src={left} alt="left" className="ml-2" />
                </div>
                <ul className="navbar-nav mt-2 mt-lg-4 anchor">
                  <li className="nav-item my-2">
                    <NavLink
                      className="nav-link font-weight-bold px-5"
                      to={pageurl.ADMIN_DASHBOARD_PAGE_URL}
                      activeClassName="active-link"
                      exact
                    >
                      DASHBOARD
                    </NavLink>
                  </li>
                  <li className="nav-item my-2">
                    <NavLink
                      className="nav-link font-weight-bold px-5"
                      to={pageurl.ADMIN_FAQ_PAGE_URL}
                      activeClassName="active-link"
                      exact
                    >
                      ADD FAQS
                    </NavLink>
                  </li>
                  <li className="nav-item my-2">
                    <NavLink
                      className="nav-link font-weight-bold px-5"
                      to={pageurl.ADMIN_CAMPAIGN_PAGE_URL}
                      activeClassName="active-link"
                      exact
                    >
                      CAMPAIGN
                    </NavLink>
                  </li>
                </ul>
              </aside>
              {/* Main Section  */}
              <main className="col-12 col-md-9 col-lg-10 bg-light px-0 vh-100 overflow">
                {/* TopNav Section */}
                <nav className="bg-white d-flex sticky-top justify-content-end align-items-center mx-0 py-2 py-md-3 px-2 px-md-5">
                  {/* eslint-disable-next-line */}
                  <img
                    src={Ham1}
                    className="d-md-none pl-4 pointer"
                    id="sidebar-opener"
                  />
                  <h5 className="font-weight-bold d-md-none ml-3 mb-0">
                    Dashboard
                  </h5>
                  <img
                    src={alerm}
                    className="img-fluid mr-3 mr-lg-5 ml-auto"
                    alt=""
                  />
                  <img src={photoURL} className="img-fluid avatar" alt="" />
                  <div className="ml-2">
                    <p className="font-weight-bold my-0 d-none d-md-block">
                      {`${firstName.toUpperCase()} ${lastName.toUpperCase()}`}
                    </p>
                    <p className="my-0 d-none d-md-block">Administrator</p>
                  </div>
                  <div className="btn-group">
                    <div className="btn-group ml-0 mx-lg-3">
                      <button
                        type="button"
                        className="btn dropdown-toggle no-border"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      />
                      <div className="dropdown-menu dropdown-menu-right">
                        <button
                          className="dropdown-item"
                          type="button"
                          onClick={this.onHandleLogout}
                        >
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                </nav>
                {/** Dashboard Routing */}
                {this.props.children}
              </main>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = {
  logoutUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AdminDashboard));
