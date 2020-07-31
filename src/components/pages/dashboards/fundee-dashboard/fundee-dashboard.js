import React, { useEffect } from 'react';

import './fundee-dashboard.css';
import { connect } from 'react-redux';
import { fetchFundeeDashboard } from '../../../../actions/actions';
import noHistory from './nohistory.svg';

// import seach from './search.svg'
import { Navbar, Footer } from '../../navigation/navigation';

const FundeeDashboard = ({ fundee, fetchFundeeDashboard, user }) => {
  useEffect(() => {
    fetchFundeeDashboard();
  }, []);

  const {
    allrefunds,
    amountPermonth,
    interestPerMonth,
    interestRate,
    loanedAmount,
    paidAmount,
    pendingAmount,
    totalTerm,
  } = fundee;

  return (
    <div className="fundee-dashboard-wrapper">
      <Navbar />
      <div className="container pl-3 px-md-0 fundee-dashboard__title-container">
        <h3 className="fundee-dashboard__title">
          Welcome back, <span> {user.credentials.data.firstName} </span>
        </h3>
      </div>
      <section className="investee-account-overview container-md px-md-0 mt-5 pt-2">
        <h4 className="account-overview-intro ">ACCOUNT OVERVIEW</h4>
        <div className="account-overview-grid mt-3">
          <div className="account-detail">
            <small>Pending Amount</small>
            <br />
            <h2>
              <span className="right">#{pendingAmount}</span>
            </h2>
          </div>
          <div className="account-detail">
            <small>Loaned amount</small>
            <br />
            <h2>
              <span className="right">#{loanedAmount}</span>
            </h2>
          </div>
          <div className="account-detail">
            <small>Paid amount</small>
            <br />
            <h2>
              <span className="right">#{paidAmount}</span>
            </h2>
          </div>
          <div className="account-detail">
            <small>Interest rate</small>
            <br />
            <h2>
              {interestRate}
              <span className="left"> %</span>
            </h2>
          </div>
          <div className="account-detail">
            <small>Amount per month</small>
            <br />
            <h2>
              <span className="right">#{amountPermonth}</span>
            </h2>
          </div>
          <div className="account-detail">
            <small>Interest per month</small>
            <br />
            <h2>
              <span className="right">#{interestPerMonth}</span>
            </h2>
          </div>
          <div className="account-detail">
            <small>Total Term</small>
            <br />
            <h2>
              {totalTerm}
              <span className="left"> months</span>
            </h2>
          </div>
          <div className="account-detail">
            <small>Remaining Term</small>
            <br />
            <h2>
              6<span className="left"> months</span>
            </h2>
          </div>
        </div>
      </section>
      <section className="investee-payment-history container-md px-md-0 mt-5 pt-2">
        <h4 className="payment-history-intro ">PAYMENT HISTORY</h4>
        <div className="table-container mt-3 overflow-auto">
          <table className="table border-bottom" style={{ marginBottom: '0' }}>
            <thead className="bg-fml-secondary">
              <tr>
                <td>DATE</td>
                <td>AMOUNT PAID</td>
                <td>AMOUNT REMAINING</td>
                <td>PAYMENT METHOD</td>
                <td>REFERENCE ID</td>
              </tr>
            </thead>
            {allrefunds && allrefunds.length > 0 && (
              <tbody>
                {allrefunds.map((history) => (
                  <tr key={history.referenceId}>
                    <td className="date">
                      {/* <span className="day">25</span>
                            <br />
                            <span className="month">JULY</span> */}
                      {history.date}
                    </td>
                    <td className="font-weight-bold"># {history.amountPaid}</td>
                    <td className="font-weight-bold">
                      # {history.amountRemaining}
                    </td>
                    <td>{history.refundMedium}</td>
                    <td>{history.referenceId}</td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>

          {allrefunds.length <= 0 && (
            <div className="my-5 d-flex flex-column align-items-center">
              <img className="img-fluid" src={noHistory} alt="no history" />
              <h3 className="mb-4 text-center table__no-history-title">
                You Have No History Yet.
              </h3>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  fundee: state.fundee.fundee,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return { fetchFundeeDashboard: () => dispatch(fetchFundeeDashboard()) };
};
export default connect(mapStateToProps, mapDispatchToProps)(FundeeDashboard);
