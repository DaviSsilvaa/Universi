import React from "react";
import axios from "axios";

const DeletePost = () => {

    const deletePost = async(id) => {
        await axios.delete(`http://localhost:8080/api/posts/${id}`)
    }

    return (
        <div>
            <h1>
                Delete Post
            </h1>
        </div>
    )
}

export default DeletePost;