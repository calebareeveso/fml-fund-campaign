import React from 'react';
import { Redirect,withRouter } from 'react-router-dom';
import pageurl from '../../../router/url/pageurl'

const Page404 = () => {

    const [timeremaining,setTimeRemaining] = React.useState({
        time : 5,
        text: "seconds" 
    });

    const [redirect,setRedirect] = React.useState(false)

    React.useEffect(()=>{
        function doit(){
            setTimeout(()=>{
                if(timeremaining.time > 0){
                    setTimeRemaining({...timeremaining,'time': timeremaining.time - 1})
                }else{
                    setRedirect(true);
                }
            },1000);
        }doit()
    })

    return(
        <>
            { redirect ? 
            
            <Redirect to={pageurl.LANDING_PAGE_URL}/>
            
            :
                <div style={{width:"100%",
                    margin:"0 auto",
                    minHeight:"100vh",
                    textAlign:"center",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center"}}>
                        <h1>404 Page</h1>
                        <h3>You'll be redirected to Landing Page in : 
                                <span style={{color:"#ff0000"}}>&nbsp;{`${timeremaining.time} ${timeremaining.text}`}</span>
                        </h3>
                </div>
            }
        </>
    )

}

export default withRouter(Page404);