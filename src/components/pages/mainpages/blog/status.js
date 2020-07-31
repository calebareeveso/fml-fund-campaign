import React from 'react';
import blog from './blog.module.css'
import {Link} from 'react-router-dom'
import pageurl from '../../../router/url/pageurl'

const Status = ({closeStatus,status_message}) =>{
    return(
        <>
        {status_message &&
        <div className={blog.status_qobi}>
            <div className={blog.main_container_qobi}>
                <div className={blog.status_container_qobi}>
                    <h1>{status_message}</h1>
                    <Link to={pageurl.BLOG_PAGE_URL}><button>Back To Blog</button></Link>
                    <Link onClick={closeStatus}><p>Close</p></Link>
                </div>
            </div>
        </div>
        }
        </>
    )
}
export default Status;