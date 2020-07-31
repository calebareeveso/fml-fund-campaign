import React from 'react';
import blog from './blog.module.css';
import TermsConditionData from './termsandconditiondummy'
const BlogTermsAndConditions = ({blog_tc_content,cancel_btn,agree_btn}) =>{
    const[persistTC,setPersistTC]=React.useState([]);
    React.useEffect(()=>{function doIt(){!persistTC[0] && TermsConditionData.getData(setPersistTC);}doIt()})
    return(
        <div className={blog.blog_tc_qobi}>
            <div className={blog.main_container_qobi}>
                <div className={blog.blog_tc_container_qobi}>
                    <div className={blog.tc_margin_qobi}>
                        <div className={blog.blog_tc_header}><h1>TERMS & CONDITIONS</h1><h5>User Agreement</h5></div>
                        <div className={blog.blog_tc_body}><p>{persistTC[0] && persistTC[0].data}</p></div>
                        <div className={blog.blog_tc_buttons}>
                            <button onClick={agree_btn}>Agree</button><button onClick={cancel_btn} className={blog.cancel_btn_qobi}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )}
export default BlogTermsAndConditions;