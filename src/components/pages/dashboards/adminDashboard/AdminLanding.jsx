import React, { Component } from "react";
import "./adminDashboard.css";
import AdminTable from '../../../dataservices/adminDashboard_controller.js';
import Dashboard from '../../../dataservices/admin_controller.js';
import AdminDashboard from './adminDashboard'


class AdminLanding extends Component {
  componentDidMount() {
    var circle = document.querySelector('circle');
    var radius = circle.r.baseVal.value;
    var circumference = radius * 2 * Math.PI;
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    function setProgress(percent) {
        const offset = circumference - percent / 100 * circumference;
        circle.style.strokeDashoffset = offset;
    }
    const progress_value = document.querySelector('#displayed_value').innerHTML;
    setProgress(progress_value);
  }

  render() {
    return (
      <>
        <AdminDashboard>
          <div className="container-fluid pl-4 px-2 px-md-3 px-lg-4 px-xl-5 py-4">
            <h5 className="font-weight-bold d-none d-md-block">
              Dashboard
            </h5>
            {/* Dashboard card  */}
            <Dashboard/>
            <div className="row mt-4 mt-lg-5">
              <div className="col-lg-9">
                <div className="d-flex justify-content-between align-items-center mb-4 mb-md-0">
                  <h5 className="font-weight-bold">Fund Requests</h5>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-transparent custom__outline dropdown-toggle py-2 px-4"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <small className="text-dark50">Most Recent</small>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        Action
                      </button>
                      <button className="dropdown-item" type="button">
                        Another action
                      </button>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </div>
                  </div>
                </div>
               <AdminTable/>
              </div>
              {/* Audits  */}
              <div className="col-lg-3 pl-lg-0 pl-xl-2 mt-4 mt-lg-0">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="font-weight-bold">Audit</h5>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-transparent custom__outline py-2 px-4 px-lg-1 px-xl-4"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <small className="text-dark50">
                        Feb 3rd - Mar 30th
                      </small>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right">
                      <button className="dropdown-item" type="button">
                        Action
                      </button>
                      <button className="dropdown-item" type="button">
                        Another action
                      </button>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-sm rounded mt-3 px-4 px-lg-3 px-xl-4 pb-4">
                  {/* Audit Progress */}
                  <div className="account__progress">
                    <svg
                      className="progress-ring"
                      width="100%"
                      height={240}
                    >
                      <circle
                        className="progress-ring__circle"
                        stroke="#FA7E5C"
                        strokeWidth={20}
                        fill="transparent"
                        r={60}
                        cx="50%"
                        cy="50%"
                      />
                    </svg>
                    <div className="progress__value">
                      <h1>
                        <span id="displayed_value">85</span>%
                      </h1>
                      <h6>PROFIT</h6>
                    </div>
                  </div>
                  <h1 id="displayed_value">75%</h1>
                  <p className="text-dark50">Loan Granted</p>
                  <div
                    className="progress my-4"
                    style={{ height: "10px" }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "25%" }}
                      aria-valuenow={25}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  <button className="btn btn-block bg-red py-3">
                    Export Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        </AdminDashboard>
      </>
    );
  }
}

export default AdminLanding;
