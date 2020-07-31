import React, { Component, useEffect, useState } from 'react';
import './editProfile.css';
import ProfileNav from './editProfileNav';
// import '../../../assets/bootstrap.css';
import { Footer } from '../../navigation/navigation';
//Connect redux
import { connect } from 'react-redux';
import {
  editUserProfile,
  getUserDetails,
} from '../../../../actions/userActions';

const EditProfile = (props) => {
  const credentials = props.user.credentials;
  const {
    _id,
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
  const [firstNameP, setFirstName] = useState(firstName ? firstName : 'nill');
  const [lastNameP, setLastName] = useState(lastName ? lastName : 'nill');
  const [phoneP, setPhone] = useState(phone ? phone : 'nill');
  const [emailP, setEmail] = useState(email ? email : 'nill');
  const [addressP, setAddress] = useState(address ? address : 'nill');
  const [genderP, setGender] = useState(gender ? gender : 'nill');
  const [occupationP, setOccupation] = useState(occupation ? occupation : 'nill');
  const [photoURLP, setPhotoURL] = useState(photoURL ? photoURL : '');

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handleOccupation = (e) => {
    setOccupation(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formInput = {
      phone: phoneP,
      occupation: occupationP,
      address: addressP,
    };
    props.editUserProfile(props.history, _id,formInput);
  };
  return (
    <div className="editProfile">
      <ProfileNav />

      <section className="editProfileLayer1 editProfileLayer-pb-4 pt-5">
        <div className="container">
          {/* {Profile Picture row} */}
          <div className="row mt-5 mt-5 ">
            <div className="col-md-4 col-12 ">
              <h2>
                <b>Edit Profile</b>
              </h2>
            </div>
            {/* {Profile image} */}
            <div className="col-md-4 col-6 mr-auto  justify-content-center ">
              <img
                src={photoURLP}
                alt="profile-img"
                className="img-fluid w-75 rounded-circle"
              />
            </div>
          </div>
        </div>
      </section>
      {/* {Form Section} */}
      <section>
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-4 col-12">
              <h4>
                <b>Basic Information</b>
              </h4>
            </div>
            <div className="col-md-7">
              <form onSubmit={onSubmit} method="POST">
                {/* {First column} */}
                <div class="form-row">
                  <div className="form-group col-md-6 col-6 mb-4">
                    <label
                      for=""
                      className="editProfileLabel mb-0 h6 font-weight-light"
                    >
                      First Name
                    </label>
                    <input
                      type="name"
                      class="form-control form-control-sm"
                      id=""
                      onChange={handleFirstName}
                      value={firstNameP}
                      placeholder={`${firstName}`}
                      disabled
                    />
                  </div>
                  <div className="form-group col-md-6 col-6 mb-4">
                    <label
                      for=""
                      className="editProfileLabel mb-0 h6 font-weight-light"
                    >
                      Last Name
                    </label>
                    <input
                      type="name"
                      class="form-control form-control-sm"
                      onChange={handleLastName}
                      value={lastNameP}
                      id=""
                      placeholder={`${lastName}`}
                      disabled
                    />
                  </div>
                </div>
                {/* {Second column} */}
                <div class="form-row">
                  <div className="form-group col-md-6 col-6 mb-4">
                    <label
                      for=""
                      className="editProfileLabel  mb-0 h6 font-weight-light"
                    >
                      Contact Information
                    </label>
                    <input
                      type="phone"
                      class="form-control form-control-sm"
                      id=""
                      value={phoneP}
                      onChange={handlePhone}
                      placeholder={`${phone}`}
                    />
                  </div>
                  <div className="form-group col-md-6 col-6 mb-4">
                    <label
                      for=""
                      className="editProfileLabel mb-0 h6 font-weight-light"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      class="form-control form-control-sm"
                      value={emailP}
                      onChange={handleEmail}
                      id=""
                      placeholder={`${email}`}
                      disabled
                    />
                  </div>
                </div>
                {/* {Third column} */}
                <div class="form-row">
                  <div className="form-group col-md-6 col-6 mb-0">
                    <label
                      for=""
                      className="editProfileLabel mb-0 h6 font-weight-light"
                    >
                      Gender
                    </label>
                    <input
                      type="text"
                      id="inputState"
                      value={'Male'}
                      onChange={handleGender}
                      class="form-control form-control-sm"
                      disabled
                    />
                  </div>
                  <div className="form-group col-md-6 col-6">
                    <label
                      for=""
                      className="editProfileLabel mb-0 h6 font-weight-light"
                    >
                      Occupation
                    </label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      value={occupationP}
                      onChange={handleOccupation}
                      id=""
                      placeholder={`${occupation}`}
                    />
                  </div>
                </div>
                <div class="form-row mt-0">
                  <div className="form-group col-md-12 col-12">
                    <label
                      for=""
                      className="editProfileLabel mb-0 h6 font-weight-light"
                    >
                      Address
                    </label>
                    <input
                      type="address"
                      class="form-control form-control-sm"
                      value={addressP}
                      onChange={handleAddress}
                      id=""
                      placeholder={`${address}`}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary col-md-6 col-5 btn-fml-secondary mb-4"
                  onClick={(e) => {
                    onSubmit(e);
                  }}
                >
                  Save Changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* {Change Password section} */}
      <section className="editProfileLayer1 editProfileLayer-pb-4 pt-5">
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-4 ">
              <h4>
                <b>Edit Password</b>
              </h4>
            </div>
            <div className="col-md-7 ">
              <form>
                <div className="form-row ">
                  <div className="form-group col-md-6 col-6">
                    <label
                      for=""
                      className="mb-0 h6 font-weight-light editProfileLabel "
                    >
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-sm "
                      id=""
                      placeholder="................"
                    />
                  </div>
                  <div className="col-md-6"></div>
                  <div className="form-group col-md-6 col-6">
                    <label
                      for=""
                      className="mb-0 h6 font-weight-light editProfileLabel "
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-sm opacity-2 "
                      id=""
                      placeholder="..............."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary col-md-6 col-6 btn-fml-secondary"
                >
                  Save New Password
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* {Footer} */}
      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { editUserProfile })(EditProfile);
