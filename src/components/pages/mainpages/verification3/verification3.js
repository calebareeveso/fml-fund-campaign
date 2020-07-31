import React, { Component } from 'react';
import '../../../assets/bootstrap.css';
import './verification3.css';
import { Navbar,Footer } from '../../navigation/navigation';
import noHistory from '../../../assets/images/nohistory.svg';
import verification1 from './images/verification1.png';
import verification2 from './images/verification2.png';



class Verification3 extends Component{

    firstName = () => {
        const {user: {credentials: {data: {firstName : userName}}}} = JSON.parse(localStorage.getItem('FMLState'))
        this.setState({user:userName})
    }

    componentDidMount(){
        
        this.firstName();

    }
      
    render() {

        return(
        <div>
            <Navbar />
            <div class="container col-md-6 mx-auto">
    <div class="verification-progress-container col-12 col-md-8 mx-auto mt-5 text-center">
      <h4 class="font-weight-bold">Verification</h4>
      <div class="verification-progress mt-4 mt-md-5">
        <div class="verify-item">
          <span class="verify-circle">
            <span class="progress-number">1</span>
          </span>
          <span class="text">Residential Address</span>
        </div>
        <div class="verify-item">
          <span class="verify-circle">
              <span class="progress-number">2</span>    
          </span>
          <span class="text">Link an account</span>
        </div>
        <div class="verify-item active">
          <span class="verify-circle active">
              <span class="progress-number">3</span>    
          </span>
          <span class="text">Confirm Identity</span>
        </div>
        <div class="verify-item">
          <span class="verify-circle">
              <span class="progress-number">4</span>    
          </span>
          <span class="text">Overview</span>
        </div>
      </div>
    </div>
    </div>
    
    <div class="container mt-5">
    <div class="row row-body">
      <div id="images" class="col-md-6">
        <p class="text-heading">Your identification document 
        
        <br></br>
        
        will help us validate your identity</p>
        <p class="sub-heading">What i should do to confirm my identity?</p>
        <ul class="container-fluid lists">
          <li class="list1">Take a selfie by holding your ID Card</li>
          <li class="list1"><span>Card Cardholder Name on ID Card should match and be visible</span></li>
        </ul>
        <p class="example">Here’s an example :</p>
      </div>
           </div>
         </div>


         <div class="container">
    <div class="row">
      <div class="col-6">
        <img style={{width:'100%'}} src={verification1} alt="correct"/>
      </div>

      <div class="col-6">
        <img style={{width:'100%'}} src={verification2} alt="incorrect"/>
      </div>
    </div>
  </div>


<div id="upload" class="container w-50 input-group mt-5 mb-3">
    <input type="text" class="form-control" placeholder="Choose File to upload" aria-label="Email Address" aria-describedby="basic-addon2" style={{color: "#ffffff", background: "#FFFFFF;"}}/>
    <div class="input-group-append">
      <span class="input-group-text text-white" id="basic-addon2" style={{background: "#FB3F5C"}}><b>Choose File</b></span>
    </div>
  </div>



<div class="terms-text text-center">
    <p class="click">By clicking submit you are agreeing to <br></br>
      our Terms and Conditions</p>
  </div>
  <div class="button text-center">
    <button class="submit">
      Submit
    </button>
  </div>
    
            <Footer />
        </div>
        )
    } 
   
}

export default Verification3;