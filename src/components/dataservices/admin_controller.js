import React, { useState, useEffect } from "react";
import "../pages/dashboards/adminDashboard/adminDashboard.css";
import axios from "axios";
import profit from "../pages/dashboards/adminDashboard/img/profit.png";
import up from "../pages/dashboards/adminDashboard/img/up.png";
import down from "../pages/dashboards/adminDashboard/img/down.png";
import fundee from "../pages/dashboards/adminDashboard/img/fundee.png";
import funder from "../pages/dashboards/adminDashboard/img/funder.png";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState("");
  useEffect(() => {
    const apiUrl =
      "https://fundmylaptopadmin.herokuapp.com/api/admin/dashboard";
    axios
      .get(apiUrl)
      .then((response) => setDashboard(response.data.data));
  }, []);

  return (
    <div className="row mt-md-3">
      <div className="col-12 col-md-6 col-lg-4 px-3 px-md-2 px-lg-2 px-xl-3 my-2 my-lg-0">
        <div className="bg-white px-4 pt-4 pb-3 d-flex align-items-center justify-content-between status__card">
          <div>
            <p className="small">TOTAL PROFIT</p>
  			<h5>{dashboard.totalProfit}</h5>
            <p>
              <img src={down} alt="down" /> <span className="text-danger">5%</span>{" "}
              Less profit
            </p>
          </div>
          <div className="bg-blue50 p-4 rounded-circle">
            <img src={profit} className="img-fluid" alt="profit" />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 px-3 px-md-2 px-lg-2 px-xl-3 my-2 my-lg-0">
        <div className="bg-white px-4 pt-4 pb-3 d-flex align-items-center justify-content-between status__card status__card--blue">
          <div>
            <p className="small">TOTAL FUNDEES</p>
  			<h5>{dashboard.NoOfFundees}</h5>
            <p>
              <img src={up} alt="Up" /> <span className="text-success">21%</span>{" "}
              Increase this month
            </p>
          </div>
          <div className="bg-blue py-4 px-3 rounded-circle">
            <img src={fundee} className="img-fluid" alt="fundee" />
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-lg-4 px-3 px-md-2 px-lg-2 px-xl-3 my-2 my-lg-0">
        <div className="bg-white px-4 pt-4 pb-3 d-flex align-items-center justify-content-between status__card status__card--red">
          <div>
            <p className="small">TOTAL FUNDERS</p>
            <h5>{dashboard.NoOfFunders}</h5>
            <p>
              <img src={up} alt="up" /> <span className="text-success">21%</span>{" "}
              Increase this month
            </p>
          </div>
          <div className="bg-red p-4 rounded-circle">
            <img src={funder} className="img-fluid" alt="funder" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
