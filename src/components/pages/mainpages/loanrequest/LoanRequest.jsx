import React, { useReducer } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../../assets/bootstrap.css';
import './LoanRequest.scss';
import PlusIcon from '../../../assets/images/plus.svg';
import SuccessIcon from '../../../assets/images/Successfully.svg';
import ErrorIcon from '../../../assets/images/Error.svg';
import { Footer } from '../../navigation/navigation';
import Navbar from '../../navigation/Navbar/Navbar';

// Redux
import { connect } from 'react-redux';
import { loanRequest } from '../../../../actions/dataActions';

const initialState = {
  title: '',
  description: '',
  location: '',
  amount: '',
  repaymentPeriod: '',
  repaymentTimes: '',
  photoUrl: '',
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}



const LoanRequest = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onChange(e) {
    dispatch({ field: e.target.name, value: e.target.value });
  }
  const {
    title,
    description,
    location,
    amount,
    repaymentPeriod,
    repaymentTimes,
    photoUrl,
    loading,
  } = state;

  function onSubmit(e) {
    e.preventDefault();

    const formData = {
      title,
      description,
      location,
      amount,
      repaymentPeriod,
      repaymentTimes,
      photoUrl,
    };
    // console.log(formData)
    props.loanRequest(formData);
  }

  // function loader() {
  //     this.setState({ loading : true });

  //     setTimeout(() => {
  //         this.setState({ loading: false })
  //     }, 3000)
  // }

  function closeModal() {
    let textfont = {
      color: 'white',
    }
    document.getElementById('message').classList.add('inactive');
    document.getElementById('overlay').classList.add('inactive');
  }

  return (
    <section className="loan-request"> 
      <Navbar />
      {/* <DashboardNavbar /> */}
      {/* if ( props.data.createdRequest ) {
                    
                    <div onClick={closeModal} id="overlay"></div>
                    <div id="message" className='text-center'>
                        <img src={SuccessIcon} alt="" />
                        <p>{props.data.data.message}</p>
                        <Link to='#'>Dashboard</Link>
                    </div>
                } else {
                    <div onClick={closeModal} ></div>
                    <div id="message" className='text-center'>
                        <img src={ErrorIcon} alt="" />
                        <p>{props.data.data.message}</p>
                        <Link to='#'>Try Again</Link>
                    </div>
                } */}

      <div className="loan-wrapper mt-4">
        <div>
          <span>Dashboard &gt; </span>
          <span className="create"> Create Loan Request</span>
        </div>
        <form id="loanRequest" onSubmit={onSubmit} method="POST"> 
          <div className="top-content card" style={{color: "white"}}>
            <div className="upload-wrapper" style={{color: "white" }}>
              <div className="d-flex flex-column align-items-center upload" style={{color: "white" , borderColor: "white"}}>
                <h4 style={{color: "white"}}>Upload your video </h4>
                <p style={{color: "white"}}>Click button to upload your pitch video</p>
                
                <input style={{color: "white", width:"50%"}}
                  type="file"
                  placeholder="Browse"
                  name="photoUrl"
                  id="photoUrl"
                  onChange={onChange}
                  value={photoUrl}
                />
                <p style={{color: "white"}}>File type: Jpg, Png</p>
                <p style={{color: "white"}}> File size: not more than 5MB</p>
              </div>

              <div className="d-flex upload-add" style={{paddingBottom: "20px"}}>
                <div className="d-flex align-items-center justify-content-center" style={{color: "white" , borderColor: "white"}}>
                  <img src={PlusIcon} alt="" />
                </div>
                <div className="d-flex align-items-center justify-content-center" style={{color: "white" , borderColor: "white"}}>
                  <img src={PlusIcon} alt="" />
                </div>
                
              </div>
              <p style={{color: "white"}}>Click the plus icon to upload Photos</p>
          </div>

            <div className="motivational-wrapper" style={{color: "white"}}>
              <h5 style={{color: "white"}}>Pitch</h5>
              <p style={{color: "white"}}>
                Why do you need a loan?
                
              </p>

              <label style={{color: "white"}}>Loan Purpose</label>
              <textarea style={{backgroundColor: "#FB3F5C", borderColor: "white"}} placeholder="Description of loan br asked for"></textarea>
              <p style={{color: "white"}}>Not more than 100 words</p>
            </div>
          </div>
       
          <div className="payback-wrapper card3 loan-form">
            {/* <h5>Payback plan</h5> */}
            <div className="container ">
              <div className="column">
              <div className="row">
              <div className="col-6">
              <h5>Payback plan</h5>
                <label>Repayment Period</label>
                <input style={{backgroundColor: "white"}}
                  type="date"
                  placeholder="Date"
                  name="repaymentPeriod"
                  id="repaymentPeriod"
                  onChange={onChange}
                  value={repaymentPeriod}
                />
              </div>
              <div className="col-6"> 
              <h5>Loan details</h5>
                <label>Loan Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  name="title"
                  id="title"
                  onChange={onChange}
                  value={title}
                  
                />
              </div>
              </div>
              <div className="row">
              <div className="col-6">
                <label>Payment Location</label>
                <input
                  type="location"
                  placeholder="Lagos, Nigeria"
                  name="location"
                  id="location"
                  onChange={onChange}
                  value={location}
  
                />
              </div>
              <div className="col-6"> 
                <label>Amount </label>
                <input
                  type="number"
                  placeholder="Max 300,000"
                  name="amount"
                  id="amount"
                  onChange={onChange}
                  value={amount}
                />
              </div>
              </div>
              <div className="row">
              <div className="col-6">
                <label>Repayment Times</label>
                <input
                  type="number"
                  placeholder="6"
                  name="repaymentTimes"
                  id="repaymentTimes"
                  onChange={onChange}
                  value={repaymentTimes}
                />
              </div>
              <div className="col-6"> 
                <label>Loan Description</label>
                <input
                  type="text"
                  placeholder="Description"
                  name="description"
                  id="description"
                  onChange={onChange}
                  value={description}
                />
              </div>
              </div>
              </div>
            </div>
          </div>
          <div className="social-head" >
          <h2>Social Media</h2>
          </div>

          <div className="payback-wrapper  card3 ">
            <div className="container social-form ">
            <div className="column">
              <div className="row">
              <div className="col-6">
                <label>Twitter Profile</label>
                <input
                  type="text"
                  placeholder="Enter Url"
                  name="twitter"
                  id="twitter"
                  // onChange={onChange}
                  // value={twitter}
                />
              </div>
              <div className="col-6"> 
                <label>Facebook Profile</label>
                <input
                  type="text"
                  placeholder="Enter Url"
                  name="facebook"
                  id="facebook"
                  // onChange={onChange}
                  // value={facebook}
                />
              </div>
              </div>
              <div className="row">
              <div className="col-6">
                <label>LinkendIn profile</label>
                <input
                  type="text"
                  placeholder="Enter Url"
                  name="linkedin"
                  id="linkedin"
                  // onChange={onChange}
                  // value={linkedin}
  
                />
              </div>
              <div className="col-6"> 
                <label>Instagram Profile</label>
                <input
                  type="text"
                  placeholder="Enter Url"
                  name="text"
                  id="instagram"
                  // onChange={onChange}
                  // value={instagram}
                />
              </div>
              </div>          
              </div>
              </div>
              </div>
              
          {/* <div className="invite-wrapper">
            <h5>Invite a recommender</h5>
            <div className="form-group">
              <div>
                <label>Name</label>
                <input type="text" placeholder="Recommender"></input>
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="recommender@gmail.com"></input>
              </div>
            </div>
          </div> */}
          
          <button className="btn" type="submit" disabled={loading}>
            {loading && (
              <span
                class="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
            )}
            {loading && <span>Loading</span>}
            {!loading && <span>Create Loan Request</span>}
          </button>
        </form>
      </div>
      <Footer />
    </section>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  data: state.data,
});

const mapActionsToProps = {
  loanRequest,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withRouter(LoanRequest));
