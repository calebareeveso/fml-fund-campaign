import React from 'react'
import {createBrowserHistory} from 'history';

let oldpath = "";
const ScrollIntoView =(props)=> {  
  // let history = createBrowserHistory();
  // React.useEffect(()=>{  
  //   function doit(){
  //     if(history.location.pathname !== oldpath){
  //       const body = document.querySelector('#root');
  //       body.scrollIntoView({behavior: 'smooth'},0)
  //       // eslint-disable-next-line
  //       oldpath = history.location.pathname;
  //     }
  //   }doit()
  // })
  return(<>{props.children}</>)
}
export default ScrollIntoView;