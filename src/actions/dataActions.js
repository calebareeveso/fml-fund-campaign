import axios from 'axios';
import {
    CREATE_REQUEST, 
    SET_ERRORS, 
    FETCH_FAQS, 
    FETCH_SEARCH_FAQS, 
    ADD_FAQS, 
    MAKE_PAYMENT,
    MAKE_PAYMENT_OTP
} from '../reducers/types';

let baseURL = 'https://api.fundmylaptop.com';

// const getAuthorization = localStorage.getItem('FMLToken');

export const loanRequest = (formInput) => (dispatch) => {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('FMLToken');
    axios
        .post(`${baseURL}/api/campaigns/createRequest`, formInput)
        .then(res => {
            // console.log(res.data)
            dispatch({
                type: CREATE_REQUEST,
                payload: res.data
            })
        })
        .catch(err => {
            // console.log(getAuthorization);
            console.log(err)
            dispatch({
                type: SET_ERRORS,
                payload: err.response.message,
              });
        })
} 

export function fetchFaqs () {
    return dispatch => {
        axios
            .get(`${baseURL}/api/faqs`)
            .then(res => dispatch({
                type: FETCH_FAQS,
                payload: res.data.data
            }))
            .catch(err => console.error(err))
    }
}

export function fetchSearchFaqs (query) {
    return dispatch => {
        axios
            .get(`${baseURL}/api/search/faqs?q=${query}`)
            .then(res => dispatch({
                type: FETCH_SEARCH_FAQS,
                payload: res.data.data
            }))
            .catch(err => console.error(err))
    }
}

export function addFaqs (data) {
    return dispatch => {
        axios
            .post(`${baseURL}/api/faqs/create`, data)
            .then(res => dispatch({
                type: ADD_FAQS,
                payload: res.statusText
            }))
            .catch(err => console.error(err))
    }
}

export function makePayment (data) {
    return dispatch => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('FMLToken');
        const campaign_id = "5f215eddea498b24f06767e1"
        axios
            .post(`https://api.fundmylaptop.com/api/payment/pay/${campaign_id}`, data)
            .then(res => dispatch({
                type: MAKE_PAYMENT,
                payload: res.data.data
            }))
            .then(() => window.location.href = "/payment-otp")
            .catch(err => console.error(err))
    }
}

export function makePaymentOtp (data) {
    return dispatch => {
        axios.defaults.headers.common['Authorization'] = localStorage.getItem('FMLToken');
        const campaign_id = "5f215eddea498b24f06767e1"
        axios
            .post(`https://api.fundmylaptop.com/api/payment/validate/${campaign_id}`, data)
            .then(res => dispatch({
                type: MAKE_PAYMENT_OTP,
                payload: res.data.data
            }))
            .then(() => window.location.href = "/payment-success")
            .catch(err => console.error(err))
    }
}
