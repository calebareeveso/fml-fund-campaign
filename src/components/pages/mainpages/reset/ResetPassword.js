import React from 'react';
import ResetPasswordCss from './ResetPassword.module.css';
import '../../../assets/bootstrap.css';
import { Navbar,Footer } from '../../navigation/navigation';
import ScrollIntoView from '../../../router/scrollintoview/ScrollIntoView'
import {ResetPasswordController} from '../../../dataservices'
import {Button,Status} from '../../../utilities'
import pageurl from '../../../router/url/pageurl'

const ResetPassword = ({...props}) => {
    const[token,setToken] = React.useState({});
    const[isStatus,setIsStatus]=React.useState(false);const[isRequested,setIsRequested]=React.useState(false);
    const[isLoading,setIsLoading]=React.useState(false);
    const[inputDetails,setInputDetails] = React.useState({password:"",confirmPassword:""});
    const[inputError,setInputError] = React.useState({password:(<p></p>),confirmPassord:(<p></p>)});
    React.useEffect(()=>{ const {match:{params}} = props; setToken(params.token);})
    
    function handleForm(e){
        let stat = ResetPasswordController.validatePasswordInput(e.target.value);
        setInputDetails({...inputDetails,[e.target.name]:e.target.value});
        e.target.style.border = `1px solid ${stat}`
        setInputError({...inputError,[e.target.name]:
            stat === "green" ? (<p style={{color:"green",fontWeight:"bold"}}>Strong Password</p> ) : 
            stat === "orange" ? (<p style={{color:"orange",fontWeight:"bold"}}>Fair Password</p> ) : 
            stat === "red" ? (<p style={{color:"red",fontWeight:"bold"}}>Weak Password</p>) : (<p></p>)})        
    }

    function handleSubmit(e){
        e.preventDefault()
        if(ResetPasswordController.validatePassword(inputDetails,setInputError)){      
            ResetPasswordController.resetPassword(token,inputDetails,setIsStatus,setIsRequested,setIsLoading);
        }        
    }
    
    return(
        <ScrollIntoView><Navbar/>
        {isRequested && <Status buttonTxt={isStatus ? "SIGN IN" : "REQUEST PASSWORD RESET"} 
                                buttonUrl={isStatus ? pageurl.LOGIN_PAGE_URL : pageurl.LOGIN_PAGE_URL} 
                                closeStatus={()=>{setIsRequested(false);setIsLoading(false);isStatus && window.open(pageurl.LOGIN_PAGE_URL,'_self')}} status_message={isStatus ? "Password Reset Successful" : "Password Not Reset"} />}
        <div className={ResetPasswordCss.reset_password_anon}>
            <div className={ResetPasswordCss.main_container_anon}>
              <div className={ResetPasswordCss.reset_password_header_anon}><h1>Reset Password</h1><p>Enter your new password and confirm to continue.</p></div>
              <form>  
                <div className={ResetPasswordCss.reset_password_body_anon}>
                  <label>New Password</label>
                  <input type="password" placeholder="Enter new password" name="password" value={inputDetails.password} onChange={(e)=>handleForm(e)} />
                  {inputError.password}
                  <label >Confirm New Password</label>
                  <input type="password" placeholder="Re-enter new password" name="confirmPassword" value={inputDetails.confirmPassword} onChange={(e)=>handleForm(e)} />
                  <p>{inputError.confirmPassword}</p>
                  <Button load={isLoading} propsTitle={"Continue"} onClick={(e)=>{handleSubmit(e)}}></Button>
                </div>
            </form>
          </div>
        </div>
        <Footer/>
        </ScrollIntoView>
    )
}
export default ResetPassword;