import React from 'react';
import '../../../assets/bootstrap.css';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../../navigation/navigation';
import styles from './user-profile.module.css';
import Breadcrumb from './breadcrumb/breadcrumb';
import ProfileInfo from './profile-info/profile-info';
import profileImg from '../../../assets/images/man-in-red-jacket-1681010.jpg';
import ProfileStat from './profile-stat/profile-stat';
import RecommendBox from './recommend-box/recommend-box';
import trusteeImg from '../../../assets/images/image 8.png';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';
import pageurl from '../../../router/url/pageurl';
//Redux stuff
import { connect } from 'react-redux';

const breadcrumbLinks = [
  { link: pageurl.DEFAULT_DASHBOARD_PAGE_URL, label: 'Dashboard' },
  { link: pageurl.USER_PROFILE_PAGE_URL, label: 'Profile' },
];

const trustees = [
  {
    image: trusteeImg,
    name: 'Melissa Ryan',
    message: `“John is a trustworthy person and He has never for once owned a single penny”`,
  },
  {
    image: trusteeImg,
    name: 'Aliyah Parker',
    message: `“John is a trustworthy person and He has never for once owned a single penny”`,
  },
  {
    image: trusteeImg,
    name: 'Alicia Knowles',
    message: `“John is a trustworthy person and He has never for once owned a single penny”`,
  },
  {
    image: trusteeImg,
    name: 'Melissa Ryan',
    message: `“John is a trustworthy person and He has never for once owned a single penny”`,
  },
  {
    image: trusteeImg,
    name: 'Melissa Ryan',
    message: `“John is a trustworthy person and He has never for once owned a single penny”`,
  },
  {
    image: trusteeImg,
    name: 'Melissa Ryan',
    message: `“John is a trustworthy person and He has never for once owned a single penny”`,
  },
];

const UserProfile = (props) => {
  console.log(props.user.credentials);

  const credentials = props.user.credentials;
  const {
    // _id,
    firstName,
    lastName,
    photoURL,
    email,
    phone,
    address,
    occupation,
    gender,
    // isVerified,
    // isAdmin,
    // isAuth,
    // role,
    // isActive
  } = credentials.data;
  console.log(firstName);
  return (
    <ScrollIntoView>
      <React.Fragment>
        <Navbar />
        <div className={['container', styles.UserProfile].join(' ')}>
          <Breadcrumb>{breadcrumbLinks}</Breadcrumb>
          <h1 className="font-weight-bold">User Profile</h1>
          <div className="row">
            <div className="col-md-3 text-md-center text-sm-left ">
              <div className="d-flex flex-md-column flex-sm-row align-items-center">
                <img
                  className={styles.ProfileImg}
                  src={photoURL}
                  alt="user profile"
                />
                <div className="ml-3 ml-md-0">
                  <h4
                    className={[
                      styles.Username,
                      'text-center',
                      'font-weight-bold',
                      'mt-2',
                      'mb-0',
                      'mb-md-3',
                    ].join(' ')}
                  >
                    {`${firstName} ${lastName}`}
                  </h4>
                  <p className={styles.UserType}>Fundee</p>
                </div>
              </div>
              <Link to={pageurl.EDIT_PROFILE} className={styles.Edit}>
                <svg
                  width="1.8em"
                  height="1.8em"
                  viewBox="0 0 16 16"
                  className="bi bi-pencil-square pr-2"
                  fill="#FB3F5C"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                </svg>
                Edit Profile
              </Link>
            </div>
            <div className="col-md-8 offset-md-1">
              <h2 className="font-weight-bold mt-md-0 mt-5">
                Basic Information
              </h2>
              <div className="row">
                <div className="col-md-5">
                  <ProfileInfo title="Full Name">{`${firstName} ${lastName}`}</ProfileInfo>
                  <ProfileInfo title="Contact Information">{phone}</ProfileInfo>
                  <ProfileInfo title="Gender">
                    {gender ? gender : null}
                  </ProfileInfo>
                </div>
                <div className="col-md-7">
                  <ProfileInfo title="Address">{address}</ProfileInfo>
                  <ProfileInfo title="Email address">{email}</ProfileInfo>
                  <ProfileInfo title="Occupation">
                    {occupation ? occupation : null}
                  </ProfileInfo>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.Stats}>
            <h2 className="font-weight-bold">Stats</h2>
            <div className="row">
              <div className="col-md-3 col-6 px-2 mb-md-0 mb-3">
                <ProfileStat statsTitle="Blacklist Status" statsValue="None" />
              </div>
              <div className="col-md-3 col-6 px-2 mb-md-0 mb-3">
                <ProfileStat statsTitle="Total Debt" statsValue="None" />
              </div>
              <div className="col-md-3 col-6 px-2 mb-md-0 mb-3">
                <ProfileStat statsTitle="Loans Received" statsValue="None" />
              </div>
              <div className="col-md-3 col-6 px-2 mb-md-0 mb-3">
                <ProfileStat statsTitle="Total Outstanding" statsValue="None" />
              </div>
            </div>
          </div>

          <div className={styles.Recommendations}>
            <div
              className={[
                'd-flex',
                'align-items-center',
                'justify-content-between',
                styles.RecommendHeader,
              ].join(' ')}
            >
              <h2 className="font-weight-bold">Recommendations</h2>
              <Link className={styles.RecommendLink} to="/recommendations">
                See All
                <svg
                  width=".7em"
                  height=".7em"
                  viewBox="0 0 16 16"
                  className="bi bi-chevron-right ml-1 mb-1"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    strokeWidth="10"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                  ></path>
                </svg>
              </Link>
            </div>
            <div className="row">
              {trustees.map((trustee, idx) => {
                return (
                  <div
                    className="col-md-4 col-6 px-2 mb-3"
                    key={`trustee_${idx}`}
                  >
                    <RecommendBox
                      key={`trustee_${idx}`}
                      trusteeName={trustee.name}
                      trusteePic={trustee.image}
                    >
                      {trustee.message}
                    </RecommendBox>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </React.Fragment>
    </ScrollIntoView>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(UserProfile);
