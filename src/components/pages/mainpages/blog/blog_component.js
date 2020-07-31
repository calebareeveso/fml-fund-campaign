import React from 'react';
import blog from './blog.module.css'
import pageurl from '../../../router/url/pageurl'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {getAllBlogPost} from '../../../../actions'

const Blog_Component = ({postlink,...props}) =>{
    const [blogStory,setBlogStory] = React.useState([]);
    React.useEffect(()=>{function doit(){!blogStory[0] && props.getAllBlogPost();!blogStory[0] && setBlogStory(props.post)}doit()})
    return(
        <>        
        {blogStory[0] && blogStory.map((data,index)=>{return(
            <div className={blog.img_content_qobi} key={index}>
                <Link to={pageurl.SINGLE_POST_URL+`/${data._id}`}>
                    <div className={blog.img_container_qobi} onClick={postlink}>
                        <img src={data.imgSrc} alt={data.imgAlt ? data.imgAlt : `No Image`} />
                    </div>
                </Link>
                <div className={blog.text_content_qobi}>
                    <div className={blog.title_qobi}>
                        <Link to={pageurl.SINGLE_POST_URL+`/${data._id}`}><h3>{data.title ? data.title : `No Title`}</h3></Link>
                    </div>
                    <div className={blog.description_qobi}><p>{data.post ? data.post : `No post`}</p></div>
                </div>
            </div>
        )})
        }
        </>
    )
}
const mapStateToProps = (state,ownState) => {const numberOfPost = ownState.posts ? state.blog.allblogPost.slice(0,ownState.posts) : state.blog.allblogPost; return { post : numberOfPost }}
const mapDispatchToProps = () => {return{getAllBlogPost}}
export default connect (mapStateToProps,mapDispatchToProps())(Blog_Component);