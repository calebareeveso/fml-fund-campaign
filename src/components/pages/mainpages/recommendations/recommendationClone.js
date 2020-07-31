import React, { Component } from 'react';
import '../../../assets/bootstrap.css';
import { Link } from 'react-router-dom';
import { Navbar, Footer } from '../../navigation/navigation';
import styles from './user-profile.module.css';
// import Breadcrumb from './breadcrumb/breadcrumb';
// import ProfileInfo from './profile-info/profile-info';
// import ProfileStat from './profile-stat/profile-stat';
import RecommendBox from './recommend-box/recommend-box';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';
import pageurl from '../../../router/url/pageurl';
import noRecommendation from './nohistory.svg';
//Redux stuff
import { connect } from 'react-redux';
import axios from 'axios';

const breadcrumbLinks = [
  { link: pageurl.DEFAULT_DASHBOARD_PAGE_URL, label: 'Dashboard' },
  { link: pageurl.USER_PROFILE_PAGE_URL, label: 'Profile' },
];

class recommendationClone extends Component {

  state = {
    fullUserData: {},
    recommendations: [],
    errorMessage: ''
  }

  componentDidMount () {
    const token = localStorage.getItem('FMLToken');
    axios.defaults.headers.common['Authorization'] = token;

    axios.get(`https://api.fundmylaptop.com/api/users/${this.props.user.credentials.data._id}`).then(res => {
      this.setState({
        fullUserData: {...res.data.data},
        recommendations: [...res.data.data.recommendations]
      }, () => {
        console.log(this.state.fullUserData, this.state.recommendations[0].user.firstName);
      })
    }).catch(err => {
      console.log(err);
    })

    
  }


  render() {
    const credentials = this.props.user.credentials;

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

    const { fullUserData } = this.state;
    const recommendations = [...this.state.recommendations];

    return (
      <ScrollIntoView>
        <React.Fragment>
          <h2 className="font-weight-bold">Recommendations ({  (recommendations.length < 13  || recommendations.length < 12 ) ? recommendations.length : <span>12</span> })</h2> 
                     
     
              <div className="row">
                { recommendations.length > 0 ? recommendations.slice(0,6).map((recommendation, idx) => {
                  const fName = {...{...recommendation}.user}.firstName;
                  const lName = {...{...recommendation}.user}.lastName;
                  const photo = {...{...recommendation}.user}.photoURL;
                  const text = {...recommendation}.text;
                  return (
                    <div
                      className="col-md-4 col-6 px-2 mb-3"
                      key={`recommendation_${idx}`}
                    >
                       <RecommendBox
                        trusteeName={`${fName} ${lName}`}
                        trusteePic={photo}
                      >
                        {text}
                      </RecommendBox>
                    </div>
                  );
                }) : 
                <div className={["py-5", "d-flex", "flex-column", "align-items-center", 
                  styles.NoData].join(' ')}>
                  <img className="img-fluid" src={noRecommendation} alt="no data" />
                  <h3 className={['mb-3', 'text-center'].join(' ')}>
                    You Have No<br/> Recommendations Yet.
                  </h3>
                </div>}
              </div>
            
         </React.Fragment>
      </ScrollIntoView>
    );
  };
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(recommendationClone);