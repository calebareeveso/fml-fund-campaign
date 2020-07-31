import React from 'react';
import './defaultDashboard.css';
import '../../../assets/bootstrap.css';
import noHistory from './nohistory.svg';
import { Row, Container, Col, Table } from 'react-bootstrap';
import { Footer, Navbar } from '../../navigation/navigation';
import { overviewData } from './dummydata/overviewData.js';
import { compaignData } from './dummydata/compaignData.js';

import OverviewCard from './cards/overviewCards/OverviewCard';
import CompaignCard from './cards/compaignCards/CompaignCard';
//Redux stuffs
import { connect } from 'react-redux';

const DefaultDashboard = (props) => {
  return (
    <div className="default-dashboard">
      <Navbar />
      <Container fluid className="mt-4">
        {/* ***Overview*** */}
        <Container className="overview px-0">
          <h3 className="title">
            Welcome back,<span> {props.user.credentials.data.firstName}</span>
          </h3>
          <div
            className=" my-4 
                 d-flex 
                 flex-wrap
                 justify-content-between
                 align-items-center"
          >
            <h4 className="my-0 mx-sm-0 mx-auto overview__title">
              ACCOUNT OVERVIEW
            </h4>
            <button className="mx-auto mx-sm-0 request-loan">
              Request Loan
            </button>
          </div>

          <Row className="mx-auto">
            <Col md={9} className="pl-0 pr-0 pr-md-3">
              <Row>
                {/* Overview cards using dummy data */}
                {overviewData.map((data) => (
                  <OverviewCard key={data.id} data={data} />
                ))}
              </Row>
            </Col>
            <Col
              md={3}
              className="my-2 py-0 overview__progress
                    d-flex
                    align-items-center
                    justify-content-between"
            >
              <div className="overview__progress-bar m-auto">
                <svg
                  className=""
                  width="100%"
                  height="100%"
                  viewBox="0 0 200 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M99.9998 8.69548C111.99 8.69548 123.863 11.0571 134.94 15.6456C146.018 20.2341 156.083 26.9595 164.562 35.4379C173.04 43.9163 179.766 53.9816 184.354 65.0592C188.943 76.1367 191.304 88.0096 191.304 99.9998C191.304 111.99 188.943 123.863 184.354 134.941C179.766 146.018 173.04 156.083 164.562 164.562C156.083 173.04 146.018 179.766 134.94 184.354C123.863 188.943 111.99 191.304 99.9998 191.304C88.0095 191.304 76.1367 188.943 65.0591 184.354C53.9816 179.766 43.9163 173.04 35.4379 164.562C26.9595 156.083 20.2341 146.018 15.6456 134.94C11.0571 123.863 8.69548 111.99 8.69548 99.9998C8.69549 88.0095 11.0572 76.1367 15.6456 65.0591C20.2341 53.9816 26.9595 43.9163 35.4379 35.4379C43.9163 26.9595 53.9817 20.2341 65.0592 15.6456C76.1368 11.0571 88.0096 8.69547 99.9999 8.69548L99.9998 8.69548Z"
                    stroke="#E1E1E1"
                    strokeWidth=".85rem"
                    strokeDasharray="1.74 1.74"
                  />
                  <circle 
                  id="bar" r="90" cx="100" cy="100" fill="transparent" 
                  strokeDasharray="565" strokeDashoffset="5"
                  >
                  </circle>
                </svg>
                <div className="overview__progress-info d-flex flex-column align-items-center">
                  <h5>0%</h5>
                  <span>REPAID</span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* ***Compaign*** */}
        <Container className="compaign">
          <div className="compaign__header d-flex justify-content-between">
            <h4 className="compaign__title">
              CAMPAIGNS AVAILABLE FOR INVESTING
            </h4>
            <span className="compaign__view-more">View more +</span>
          </div>

          {/* Compaign cards using dummy data */}
          <Row>
            {compaignData.map((data) => (
              <CompaignCard key={data.id} data={data} />
            ))}
          </Row>
        </Container>
        {/* ************** */}

        {/* ***Table*** */}
        <Container className="dashboard-table mb-5 ">
          <h4 className="compaign__title">Loan History</h4>
          <Table responsive style={{ borderRadius: '5px 5px 0px 0px ' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Status</th>
              </tr>
            </thead>
          </Table>
          <div className="my-5 d-flex flex-column align-items-center">
            <img className="img-fluid" src={noHistory} alt="no data" />
            <h3 className="mb-4 text-center table__no-history-title">
              You Have No History Yet.
            </h3>
            <button className="request-loan">Request Loan</button>
          </div>
        </Container>
        {/* *********** */}
      </Container>
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(DefaultDashboard);
