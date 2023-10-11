import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Comment.css'
import axios from "axios";

const Comment = () => {

    //TODO:Check to allow only valid postId to load the page
    //TODO:Create a function that breaks a line of a string. 
    const {postId} = useParams();
    const [post, setPost] = useState("");
    const [commentText, setCommentText] = useState("");

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

    const submitComment = async() => {
        const commentObj = {
            postID: postId,
            comment: commentText
        }
        console.log(commentObj);
        await axios.post('http://localhost:8080/api/posts/comments', commentObj)

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

            <p>Adicionar comentário</p>

            <div className="comment-input">
                <div className="text-area">

                    <textarea 
                    placeholder="Faça um comentário!" id="text-area" 
                    onChange={(event) => setCommentText(event.target.value)}
                    />

                </div>
                <div className="submit-button">

                    <button id="submit" onClick={() => submitComment()}>Enviar comentário</button>

                </div>
            </div>



            <h3>Pretend this is listing all comments</h3>
            <h3>The id of your post: {postId}</h3>
            <Link to="/">Click to go back to the main page</Link>
        </div>
    );
}

export default Comment;