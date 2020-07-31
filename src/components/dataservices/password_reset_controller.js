import React from 'react'
import Server from '../../services/server/Server';

const resetPasswordEndPoint = process.env.REACT_APP_CREATE_RESET_PASSWORD_END_POINT;
const headers = {"Content-Type": "application/json","Access-Control-Allow-Origin": "*",};

function validatePasswordInput(data){
var strongRegex = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})";
var mediumRegex = "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";
    if(data.match(strongRegex)) {return "green"; }else if(data.match(mediumRegex)) {return "orange";}else{return "red";}
}
function validatePassword(inputDetails,setInputError){
let password = ""; let confirmPassword = "";
if(inputDetails.password === inputDetails.confirmPassword){
    password = inputDetails.password.length > 0 && inputDetails.password.length < 8 ? (<p style={{color:"red",fontWeight:"bold"}}>8 characters or more required</p>) : (<p></p>) 
    confirmPassword = inputDetails.confirmPassword.length > 0 && inputDetails.confirmPassword < 8 ? (<p style={{color:"red",fontWeight:"bold"}}>8 characters or more required</p>) : (<p></p>) 
    password = inputDetails.password.length < 1 ? (<p style={{color:"red",fontWeight:"bold"}}>Input Empty</p>) : (<p></p>) 
    confirmPassword = inputDetails.confirmPassword.length < 1 ? (<p style={{color:"red",fontWeight:"bold"}}>Input Empty</p>) : (<p></p>)
}else{
    password = inputDetails.password.length < 1 ? (<p style={{color:"red",fontWeight:"bold"}}>Input Empty</p>) : (<p></p>) 
    confirmPassword = inputDetails.confirmPassword.length < 1 ? (<p style={{color:"red",fontWeight:"bold"}}>Input Empty</p>) : (<p></p>)
    password = (<p style={{color:"red",fontWeight:"bold"}}>Password doesn't match</p>)
    confirmPassword = (<p style={{color:"red",fontWeight:"bold"}}>Password doesn't match</p>)
}
setInputError({password,confirmPassword})
if(Object.keys(password.props).length === 0  && Object.keys(confirmPassword.props).length === 0){return true;}return false;
}
function resetPassword(passwordtoken,data,setStatus,setRequested,setLoading){
setLoading(true);
Server.post(`${resetPasswordEndPoint}/${passwordtoken}`,data,headers)
.then(response=>{response && setRequested(true); response && setLoading(false);setStatus(response.data.success);})
.catch(error=>{error && setRequested(true); error && setLoading(false);});
}
const ResetPasswordController={resetPassword,validatePasswordInput,validatePassword}
export default ResetPasswordController;