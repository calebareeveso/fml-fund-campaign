import React from 'react'
import {Link} from 'react-router-dom'
import defaultavatar from './images/user.png'

const Comment_Component = ({singlepost,avatar,user_name,comment_date,comment}) =>{
    const[reply,setReply] = React.useState(false);
    function handleReply(e){
        e.preventDefault();
    }
    return(
        <div className={singlepost.comment_body_qobi}>
            <div className={singlepost.comment_avatar_qobi}>
                <img src={avatar ? avatar : defaultavatar} alt={""} />
            </div>
            <div className={singlepost.comment_other_values_qobi} >
                <div className={singlepost.comment_name_and_time_qobi}>
                    <p className={singlepost.comment_name_qobi}>{user_name}</p>
                    <p className={singlepost.comment_time_qobi}>{comment_date}</p>
                </div>
                <div className={singlepost.comment_section_qobi}>
                    <p>{comment}</p>
                </div>
                {/* <div className={singlepost.comment_reply_section_qobi}>
                    <Link onClick={()=>setReply(!reply)}><p>{!reply ? "Reply" : <span style={{color:"red"}}>Close</span>}</p></Link>
                    {reply && <div className={singlepost.reply_post_qobi}>
                        <form>
                            <textarea placeholder="Reply"></textarea>
                            <button onClick={(e)=>handleReply(e)} >Reply</button>
                        </form>
                    </div>}
                </div> */}
            </div>
        </div>
    )
}

export default Comment_Component;