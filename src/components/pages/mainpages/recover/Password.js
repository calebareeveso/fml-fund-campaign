import React from 'react';
import './Password.css';
import '../../../assets/bootstrap.css';
import { Navbar,Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'

const Password = () => {

    return(
        <ScrollIntoView>
        <Navbar/>
        <div>
      <form>
        <div className="container">
          <h1>Recover Password</h1>
          <p>Enter your email address and we'll send you an email with<br /> instructions to reset your password.</p><br /><br />
          <div>
          <label className="formGroupExampleInput3" >Email Address</label>
          <input
              type="email"
              placeholder="Enter your email "
              name="email"
              className="form-control"
              id="email"
            />
            <input
              type="submit"
              className="form-control btn-continue login-btn btn-fml-secondary "
              value="Continue" style={{marginBottom: '15%' ,marginTop: '5%' }}
            />
          </div>
        </div>
      </form>
        </div>
        
        
        <Footer/>
        </ScrollIntoView>
    )
}

export default Password;
