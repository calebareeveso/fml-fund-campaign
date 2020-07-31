import React from 'react';
import './EmailConfirmationFailure.css';
import { Navbar, Footer } from '../../../navigation/navigation';
import ScrollIntoView from '../../../../router/scrollintoview/ScrollIntoView';
import failure from './images/failure.png';

const EmailConfirmationFailure = () => {
  return (
    <ScrollIntoView>
      <div>
        {/* <Navbar /> */}
        <div className="email-success mb-5 text-center">
          <div className="email-succes-card">
            <div className="email-success-container">
              <img src={failure} alt="" />
              <h5>Error Verifying Email</h5>
              <p>
                {' '}
                <b>Please try again!</b>{' '}
              </p>

              <button className="email-success-btn">Resend Verification</button>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    </ScrollIntoView>
  );
};

export default EmailConfirmationFailure;
