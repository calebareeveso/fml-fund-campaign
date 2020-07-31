import Server from '../../services/server/Server';

const token = localStorage.getItem('FMLToken');
const createBlogPostEndPoint  = process.env.REACT_APP_CREATE_BLOG_POST_END_POINT;
const headers = {"Content-Type": "application/json","Access-Control-Allow-Origin": "*",};


function validate(data,setDataError){
    let article_title = ""; let article_description = ""; let article_post = "";
    article_title = data.article_title.length < 3 ? "8 words is the minimum" : ""; 
    article_description = data.article_description.length < 3 ? "8 words is the minimum" : "";
    article_post = data.article_post.length < 3 ? "8 words is the minimum" : "";
    setDataError({article_title,article_description,article_post})
    if(article_title!=="" || article_description !== "" || article_post!=="" ){return false;}return true;
}

function verifyUser(){if(token){return true;}return false}


function createBlogPost(data,setStatus,setRequested,setLoading){
    setLoading(true)
    Server.authBlogPost(`${createBlogPostEndPoint}`,data,token,headers)
    .then(response=>{response && setRequested(true); response && setLoading(false);setStatus(response.data.success);})
    .catch(error=>{error && setRequested(true); error && setLoading(false);});    
}

function getAllBlogPosts(setBlogStories){
    Server.get(`${createBlogPostEndPoint}`)
    .then(response=>{
        response && setBlogStories(response.data.data);
        // console.log(response.data.data)
    })
    .catch(error=>{console.log(error)});    
}

function getBlogPost(id,setBlogStory){
    Server.get(`${createBlogPostEndPoint}/${id}`)
    .then(response=>{
        response && setBlogStory([response.data.data]);
        console.log([response.data.data]);
    })
    .catch(error=>{console.log(error)});    
}

function makeComment(id,data,setStatus,setRequested,setLoading,setInputError){
    setLoading(true);
    if(data && data.comment && data.comment.length > 0 && data.comment.length !== " "){
        Server.authBlogPost(`${createBlogPostEndPoint}/${id}/comment`,data,token,headers)
        .then(response=>{response && setRequested(true); response && setLoading(false);setStatus(response.data.success);})
        .catch(error=>{error && setRequested(true); error && setLoading(false);});    
    }else{setLoading(false);let comment = "Cant send an empty comment!!!"; setInputError({comment});}
}

const BlogController ={
    createBlogPost,
    validate,
    getAllBlogPosts,
    getBlogPost,
    makeComment,
    verifyUser
}

export default BlogController;