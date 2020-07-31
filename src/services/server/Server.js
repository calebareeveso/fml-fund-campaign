import axios from "axios";

const headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
  'Access-Control-Allow-Origin': '*',
};

// x-www-form-urlencoded

const get = (url, options = {}) => {
  if (options) {
    options = { ...headers, ...options };
  }
  return axios.get(process.env.REACT_APP_BASE_URL + url, { headers: options });
};

const post = (url, data, options = {}) => {
  if (options) {
    options = { ...headers, ...options };
  }
  console.log(process.env.REACT_APP_BASE_URL + url);
  return axios.post(process.env.REACT_APP_BASE_URL + url, data, { headers: options });
};

const authPost = (url, data, token, header = {}) => {
  const authToken = { Authorization: "Bearer " + token };
  const options = { ...headers, ...authToken, ...header };
  return axios.post(process.env.REACT_APP_BASE_URL + url, data, { headers: options });
};

const authBlogPost = (url, data, token, header = {}) => {
  const authToken = { Authorization: token };
  const options = { ...headers, ...authToken, ...header };
  return axios.post(process.env.REACT_APP_BASE_URL + url, data, { headers: options });
};

const authGet = (url, token, extraHeaders = {}) => {
  const authToken = { Authorization: "Bearer " + token, ...extraHeaders };
  const options = { ...headers, ...authToken };
  console.log(process.env.REACT_APP_BASE_URL + url);
  return axios.get(process.env.REACT_APP_BASE_URL + url, { headers: options });
};

const loginDemo = {
  error: false,
  message: "Login request successful",
  data: {
    id: "3",
    email: "",
    profileData: {
      username: "",
      email: "",
      firstName: "",
      lastName: "",
      gender: "",
      dateOfBirth: "",
      avatar: "",
      bio: ""
    }
  }
};

const Server = {
  get,
  post,
  authPost,
  authBlogPost,
  authGet,
  loginDemo
};

export default Server;
