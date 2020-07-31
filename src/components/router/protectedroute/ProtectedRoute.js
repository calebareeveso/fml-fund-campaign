import React from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';
import pageurl from '../url/pageurl';
//Redux Stuff
import { connect } from 'react-redux';

const renderPage = (Component, props) => {
  return <Route render={() => <Component {...props} />} />;
};

// const userAuthTest = {
//     isAuthenticated : false,
//     authenticate(cb){
//         this.isAuthenticated = true;
//         setTimeout(cb,100);
//     },
//     signout(cb){
//         this.isAuthenticated = false;
//         setTimeout(cb,100);
//     }
// }

const ProtectedRoute = ({ component: Component, user, history, ...rest }) => {
  let userAuth = user.authenticated;
  console.log(userAuth);
  return (
    <Route
      {...rest}
      render={(props) => {
        return userAuth ? (
          renderPage(Component, props)
        ) : (
          <Redirect
            to={{
              pathname: pageurl.LOGIN_PAGE_URL,
              state: { from: props.location },
            }}
          />
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps)(withRouter(ProtectedRoute));
