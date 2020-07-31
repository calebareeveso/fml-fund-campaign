import {SET_ERRORS, FORM_SUBMITED} from '../reducers/types';

import Server from '../services/server/Server';



export const SubmitContactForm = (userData) => (dispatch) => { 

  Server.post("https://api.fundmylaptop.com/api/contact/form",userData).then(res => {
      console.log(res.data);
      dispatch({
        type: FORM_SUBMITED,
        payload: res.data,
      })
  }).catch(err => {
     console.log(err.response.data);
     dispatch({
      type: SET_ERRORS,
      payload: err.response.data,
    });
  })

}

