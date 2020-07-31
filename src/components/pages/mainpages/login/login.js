import React, { useReducer, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import '../../../assets/bootstrap.css';
import './login.css';
import googleImg from '../../../assets/images/googleicon.svg';
import loginBg from '../../../assets/images/login-bg.png';
import pageurl from '../../../router/url/pageurl';
import { Navbar, Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView';
import twitter from './twitterIcon.svg';
import github from './github.svg';
import fbIcon from './facebook-square-brands.svg';
import { GoogleLogin } from 'react-google-login';
import GitHubLogin from 'react-github-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import PinWheel from '../../../ui/loaders/pin-wheel';
import Button from '../../../utilities/Button/CustomizedButton';
// Redux Stuff
import { connect } from 'react-redux';
import { loginUser, googleLogin, facebookLogin } from '../../../../actions/userActions';

const initialState = {
  email: '',
  password: '',
  errors: null,
  loading: false,
  message: null,
};
function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value,
  };
}
const Login = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    document.querySelector('.githubBtn').type = 'button';
  }, []);
  useEffect(() => {
    if (props.ui.errors) {
      dispatch({
        field: 'errors',
        value: props.ui.errors,
      });
    }
    if (props.ui.loading !== state.loading) {
      dispatch({
        field: 'loading',
        value: props.ui.loading,
      });
    }
    if (props.ui.message) {
      dispatch({
        field: 'message',
        value: props.ui.message,
      });
    }
  }, [props.ui.errors, props.ui.loading, state.loading, props.ui.message]);

  const onChange = (event) => {
    dispatch({
      field: event.target.name,
      value: event.target.value,
    });
  };
  const { email, password, errors, loading, message } = state;

  const onSubmit = (event) => {
    const { history } = props;
    // eslint-disable-next-line
    let validMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const errorEmail = document.getElementById('errorEmail');
    const errorPassword = document.getElementById('errorPassword');
    event.preventDefault();

    if (email === '' || email === null || !email.match(validMail)) {
      errorEmail.textContent = '* Please input a valid email.';
      setTimeout(() => {
        errorEmail.textContent = '';
      }, 2000);
    }
    if (password < 6) {
      errorPassword.textContent =
        '* Incorrect password, must be at least 6 characters.';
      setTimeout(() => {
        errorPassword.textContent = '';
      }, 2000);
    }

    const formData = {
      email,
      password,
    };
    props.loginUser(formData, history);
  };

  //Google auth
  const sendGoogleToken = (tokenid) => {
    informRedux(tokenid);
  };
  const informRedux = (data) => {
    props.googleLogin(data, props.history);
    console.log('data from informRedux');
    console.log(data);
  };

  //Get response from google
  const responseGoogle = (response) => {
    console.log(response.tokenId);
    sendGoogleToken(response.tokenId);
  };

  // GitHub Auth
  const onGitHubLoginSuccess = (response) => console.log(response);
  const onGitHubLoginFailure = (response) => console.log(response);
  const githubClick = () => console.log('hi');
  //Facebook auth
  const sendFacebookToken = (data) => {
    props.facebookLogin(data, props.history);
  }
  
  const responseFacebook = (response) => {
    sendFacebookToken(response);
  }

  return (
    <ScrollIntoView>
      <Navbar />
      <div className="main-content d-sm-flex">
        <form
          className="login-box p-md-5 p-2"
          onSubmit={onSubmit}
          method="POST"
        >
          <h2 className="p-sm-3 p-1 welcome-text">
            Welcome to <br />
            <strong>Fund my Laptop</strong>
          </h2>

          <p className="p-1 p-md-3 login-text mt-md-n4">
            Help Achieve Your dreams with funding for your laptops at little to
            no cost.
          </p>
          <div>
            {/* eslint-disable-next-line */}
            <GoogleLogin
              clientId="546458752785-s6vo1c96k1m4t3foh5uhq7c0lttj9cib.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
              render={(renderProps) => (
                <Link
                  className="text-center py-3  
            btnGoogle d-flex justify-content-center 
            align-items-center"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  style={{
                    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.07)',
                  }}
                >
                  <img className="pr-3" src={googleImg} alt="" />
                  Login with Google
                </Link>
              )}
            ></GoogleLogin>{' '}
            {/* <Link
              className="text-center mt-3 py-3  
            btnGoogle d-flex justify-content-center 
            align-items-center"
              style={{
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.07)',
                color: '#1c7ed6',
              }}
            >
              <img className="" src={twitter} alt="twitter" />
              Login with Twitter
            </Link> */}
            <FacebookLogin 
              appId="620560692194763"
              onFailure={responseFacebook}
              callback={responseFacebook}
              render={renderProps => (
                <Link
                onClick={renderProps.onClick}
              className="text-center mt-3 py-3  
            btnGoogle d-flex justify-content-center 
            align-items-center"
              style={{
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.07)',
                color: '#1c7ed6',
              }}
            >
              <img className="" src={fbIcon} alt="facebook" />
              Login with Facebook
            </Link>
              )} />
            <GitHubLogin
              clientId="0d28ce3bf3e5f81a1b54"
              onClick={(e) => e.preventDefault()}
              onSuccess={onGitHubLoginSuccess}
              onFailure={onGitHubLoginFailure}
              cookiePolicy={'single_host_origin'}
              className="githubBtn text-center mt-3 py-3 githubLogin btnGoogle d-flex justify-content-center 
            align-items-center"
              buttonText={
                <span
                  style={{
                    color: '#24292e',
                  }}
                >
                  <img className="" src={github} alt="github" />
                  Login with GitHub
                </span>
              }
            />
          </div>

          <div className="my-4 text-center or d-flex align-items-center or-box">
            <hr />
            <span className="or-text">or</span>
            <hr />
          </div>
          <div>
            {message ? (
              <p className="text-center">
                We have emailed the link to login to your email.{' '}
                {message.data.message}
              </p>
            ) : null}
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email"
              name="email"
              className="login-form form-control"
              id="email"
              onChange={onChange}
              value={email}
            />
            <p
              id="errorEmail"
              className="error text-danger text-center text-sm-left"
            ></p>
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              className="login-form form-control"
              id="password"
              onChange={onChange}
              value={password}
            />
            <p
              id="errorPassword"
              className="error text-danger text-center text-sm-left"
            ></p>
          </div>
          <div>
            {/* <button
              type="submit"
              className="form-control login-btn btn-fml-secondary"
            >
              Log in {loading ? <PinWheel /> : null}
            </button> */}
            <Button
              load={loading}
              propsTitle={'Log In'}
              className="login-form form-control login-btn btn-fml-secondary"
              onClick={(e) => {
                onSubmit(e);
              }}
            ></Button>
          </div>
          {errors && (
            <p className="text-center textWidth py-1" style={{ color: 'red' }}>
              {errors}
            </p>
          )}
          <p className="account-info-text text-center textWidth my-2">
            <Link to="/forgot-password" className="sign-up-link">
              Forgot Password?
            </Link>
          </p>
          <p className="account-info-text text-center textWidth pt-1 mt-1 pb-4">
            Don't have an account?
            <Link to={pageurl.REGISTER_PAGE_URL} className="sign-up-link">
              {' '}
              Sign up
            </Link>
          </p>
        </form>

        <div className="login-img-box d-none d-md-block">
          <img src={loginBg} className="login-img" alt="login FundMyLaptop" />
        </div>
      </div>
      <Footer />
    </ScrollIntoView>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui,
});
const mapActionsToProps = {
  loginUser,
  googleLogin,
  facebookLogin
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Login));
