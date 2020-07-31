import  Server from "../Server/Server";
import { deleteState } from "./../../localStorage";


function storeUsername(username, token) {
  return Server.authPost("api", { username }, token)
    .then(response => response.data)
    .catch(error => error);
}

function resendConfirmation(token) {
  return Server.authGet("api", token)
    .then(response => response.data)
    .catch(error => error);
}

function validateLogin(email, password) {
  let error = {status : false, message : ""}; 
  if (!email || !password) {
    error = {status : true, message : "Email and password are required"};
    return error;
  }
  if (password.length < 4) {
    error = {status : true, message : "Password is too short!"};
    return error.toObj();
  }
  return error;
}

function login(email, password) {
  const validate = validateLogin(email, password);
  if (validate.error.status && validate.error.message === "") {
    // return new Promise(resolve => resolve(validate));
  }
  // test purpose
  console.log({
    username: email,
    password: password
  })

  return Server.post("api", {
    username: email,
    password: password
  }).then(response => {
    return response.data;
  });
}

function logout(uid) {
  deleteState();
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ error: false, message: "Logged Out!", data: {} });
    }, 1200);
  });
}

function signup(form) {
  return Server.post("api", form).then(resp => resp.data);
}

function uploadAvatar(uid, avatar) {
  return Server.post("api", avatar).then(resp => resp.data);
}

function checkUsername(username) {
  return Server.post("api", username).then(resp => resp.data);
}

function getUser(id, token) {
  return Server.authGet("api" + id, token).then(resp => resp.data);
}

function getLoggedInUser(id, token) {
  return Server.authGet("api", token).then(resp => resp.data);
}

function processOnboarding(data, token) {
  console.log(data, token);
  return Server.authPost("api", data, token)
    .then(resp => {
      console.log(resp);
      return resp.data;
    })
    .catch(error => console.log(error));
}

function handleEditProfile(data, token) {
  return Server.authPost("api", data, token)
    .then(resp => {
      return resp.data;
    })
    .catch(error => console.log(error));
}

function requestToken(email, password) {
  const data = {
    username: email,
    password,
    grant_type: process.env.REACT_APP_GRANT_TYPE,
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET
  };

  return Server.post("api", data).then(resp => resp.data);
}

function signin(token) {
  const Authorization = "Bearer " + token;
  return Server.get("api", { Authorization: Authorization }).then(
    resp => resp.data
  );
}

function editAvatar(form, token) {
  return Server.authPost("api", form, token).then(
    response => response.data
  );
}

function changePassword(form, token) {
  return Server.authPost("api", form, token).then(
    response => response.data
  );
}

function createPasswordReset(form) {
  return Server.post("api", form).then(
    response => response.data
  );
}

function loadPasswordReset(token) {
  return Server.get("api" + token).then(
    response => response.data
  );
}

function handlePasswordReset(form) {
  return Server.post("api", form).then(
    response => response.data
  );
}

const Auth = {
  login,
  signup,
  validateLogin,
  logout,
  checkUsername,
  uploadAvatar,
  processOnboarding,
  requestToken,
  signin,
  handleEditProfile,
  editAvatar,
  changePassword,
  createPasswordReset,
  loadPasswordReset,
  handlePasswordReset,
  getUser,
  storeUsername,
  resendConfirmation,
  getLoggedInUser,
};

export default Auth;