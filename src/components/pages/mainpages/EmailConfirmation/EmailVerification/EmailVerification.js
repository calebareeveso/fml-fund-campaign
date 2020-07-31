import React, { useEffect, useState } from 'react';
import { Navbar, Footer } from '../../../navigation/navigation';
import { Link } from 'react-router-dom';
import EmailConfirmationFailure from '../EmailConfirmationFailure/EmailConfirmationFailure';
import Spinner from '../Spinner';
import axios from 'axios';
import './EmailVerification.css';
import ScrollIntoView from '../../../../router/scrollintoview/ScrollIntoView';
import emailConfirmation from './images/images/email-confirmation.png';
import pageurl from '../../../../router/url/pageurl';

const EmailVerification = (props) => {
  // let baseURL = 'https://api.fundmylaptop.com/users/verification';
  // check id of user

  // const { id } = props.match.params;
  // console.log(props.match.params);

  // const [confirmEmail, setConfirmEmail] = useState(true);
  // const [loading, setLoading] = useState(false);

  // console.log(props.location.search);

  // get the id from the url>>>>>
  // const query = new URLSearchParams(props.location.search);
  // const uid = query.get('uid');
  // console.log('uid', uid); //123

  // useEffect(() => {
  //   axios
  //     .get(`baseURL/api/${id}`)
  //     .then((data) => {
  //       setConfirmEmail(false);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  // if (loading) {
  //   return <Spinner />;
  // } else if (confirmEmail) {
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
              <h5>Congratulations</h5>
              <p className="email-confirmation-p1">
                Your email address has been successfully verified
              </p>

              <Link to={pageurl.DEFAULT_DASHBOARD_PAGE_URL}>
                <button className="email-success-btn">
                  Continue to Profile
                </button>
              </Link>

              <p className="email-confirmation-p2">
                Proceed to setup your profile appropriately for your
                crowdfunding
                <br /> and investment endeavours on Fundmylaptop.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ScrollIntoView>
  );
};
//   else if (!confirmEmail) {
//     return (
//       <ScrollIntoView>
//         <div>
//           <Navbar />
//           <EmailConfirmationFailure />;
//           <Footer />
//         </div>
//       </ScrollIntoView>
//     );
//   }
// };

export default EmailVerification;
