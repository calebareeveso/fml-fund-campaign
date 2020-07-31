import React from 'react';
import './EmailConfirmation.css';
import { Navbar, Footer } from '../../../navigation/navigation';
import ScrollIntoView from '../../../../router/scrollintoview/ScrollIntoView';
import emailConfirmation from './images/email-confirmation.png';

const EmailConfirmation = () => {
  return (
    <ScrollIntoView>
      <div>
        <Navbar />
        <div className="email-confirmation mb-5 text-center">
          <div className="email-confirmation-card">
            <div className="email-confirmation-container">
              <div className="email-confirmation-header">
                <img src={emailConfirmation} alt="" />
              </div>
              <h5>Verify your mail address</h5>
              <p className="email-confirmation-p1">
                Please click the button below to confirm your email address
                <br /> and activate your account
              </p>

              <button className="email-confirmation-btn">
                Confirm email address
              </button>

              <p className="email-confirmation-p2">
                If you recieved this error, simply ignore this email and do
                <br /> not click the button
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ScrollIntoView>
  );
};

export default EmailConfirmation;
