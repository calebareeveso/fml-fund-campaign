import React from 'react';
import blog from './status.module.css'
import {Link} from 'react-router-dom'

const Status = ({closeStatus,status_message,buttonTxt,buttonUrl}) =>{
    return(
        <>
        {status_message &&
        <div className={blog.status_qobi}><div className={blog.main_container_qobi}>
                <div className={blog.status_container_qobi}><h1>{status_message}</h1>
                    <Link to={buttonUrl}><button>{buttonTxt}</button></Link>
                    <Link onClick={closeStatus}><p>Close</p></Link>
                </div>
            </div>
        </div>
        }
        </>
    )
}
export default Status;