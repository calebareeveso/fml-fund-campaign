import React, { Component } from 'react';
import styles from './recommendations.module.css';
import { Link } from 'react-router-dom';
import Breadcrumb from '../user-profile/breadcrumb/breadcrumb';
import { Navbar, Footer } from '../../navigation/navigation';
import RecommendationClone from './recommendationClone';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';
import RecommendBox from './recommend-box/recommend-box';

import noRecommendation from './nohistory.svg';
//Redux stuff
import { connect } from 'react-redux';
import axios from 'axios';


const breadcrumbLinks = [
    {link: '/user-profile', label: 'Profile'},
    {link: '/recommendations', label: 'Recommendations'}
]



class Recommendations extends Component {
   







    
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
        // console.log(this.state.fullUserData, this.state.recommendations[0].user.firstName);
      })
    }).catch(err => {
      console.log(err);
    })
    


    var x = document.getElementById("snackbar");
      
       x.style.transform="translateX(-50%)";
       
        setTimeout(()=> {
            var x = document.getElementById("snackbar");
        
            x.className += styles.shows;
            x.style.transform="translate(-50%,50%)";
        
            
            setTimeout(()=>{ x.className = x.className.replace( styles.shows, "");
            x.style.transform="translate(-50%,0%)";
          }, 3000);
        },1000)

      

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



     if(recommendations.length < 1){
        setTimeout(()=>{
            const noRcom = document.getElementById("noRcom")
            noRcom.style.display="none";

            const noRcoMain = document.getElementById("noRcom_Main")
            noRcoMain.style.display="block";
        },3000)
       }





    return(
        <ScrollIntoView>
            <React.Fragment>
                <Navbar />

                <div className={['container', styles.Recommendations].join(' ')}>
                <Breadcrumb>{breadcrumbLinks}</Breadcrumb>

                <div>
                    <button className={["btn", "d-block", "d-md-none", "mb-5", styles.MobileBtn].join(' ')}>
                        <Link to="/user-profile">
                            <svg width=".9em" height=".9em" viewBox="0 0 16 16" className="bi mb-1 mr-2 bi-chevron-left" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                            </svg>
                            Back
                        </Link>
                    </button>



                    <div id="snackbar" className="back-wrap2" > You have {  (recommendations.length < 13  || recommendations.length === 12 ) ? recommendations.length : <span>12</span> } Recommendation </div>
                    <h2 className="font-weight-bold">Recommendations ({  (recommendations.length < 13  || recommendations.length === 12 ) ? recommendations.length : <span>12</span> })</h2> 
                     
     
                { recommendations.length !== 0 ? recommendations.slice(0,12).map((recommendation, idx) => {
                  const fName = {...{...recommendation}.user}.firstName;
                  const lName = {...{...recommendation}.user}.lastName;
                  const photo = {...{...recommendation}.user}.photoURL;
                  const text = {...recommendation}.text;
                  return (
              <div className="row">

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
                </div>       

                  );
                }) : <div>


                <div  className={["py-5", "d-flex", "justify-content-center", "align-items-center","jumbotron",styles.bgnone, 
                  styles.NoData].join(' ')}>
                 <div id="noRcom" className={["spinner-grow  text-danger bigig"].join(' ')} style={{transform:"translateX(-50%)"}}></div>
                 <div id="noRcom_Main" className={styles.nonerecom}>
                   <img className={['img-fluid', 'pl-4'].join(' ')} src={noRecommendation} alt="no data" />
                   <h3 className={['mb-3', 'text-center'].join(' ')}>
                    You Have No<br/> Recommendations Yet.
                  </h3>
                 </div>
               
                </div>


                </div>
                }
              </div>



                        
            </div>
            
            <Footer />
            </React.Fragment>
        </ScrollIntoView>
    );
            }
}


const mapStateToProps = (state) => ({
    user: state.user,
  });
  export default connect(mapStateToProps)(Recommendations);