import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Comment.css'
import axios from "axios";

const Comment = () => {

    //TODO:Check to allow only valid postId to load the page
    //TODO:Create a function that breaks a line of a string. 

    const {postId} = useParams();

    //State for the post message
    const [post, setPost] = useState("");

    //Function to getPosts
    const getPosts = async() => {

        try{
            const response = await axios.get(`http://localhost:8080/api/posts/${postId}`);
            //debug only
            console.log(response);
            setPost(response.data.message);
        }
        catch(e){
            console.log(e);
        }
    }


    useEffect(() => {
        getPosts();
    }, [])


    return (
        <div>
            <p>Post</p>
            <div className="post">
                <div className="textContainer">
                    {post}
                </div>
            </div>
            <p>Todos comentários: </p>

            <h1>Pretend this is the input for insert a comment</h1>
            <h1>Pretend this is listing all comments</h1>
            <h1>The id of your post: {postId}</h1>
            <Link to="/">Click to go back to the main page</Link>
        </div>
    );
}

export default Comment;