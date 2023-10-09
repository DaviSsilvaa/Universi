import React, { useState } from "react";

const EditPost = () => {

    const [changeMessage, setChangeMessage] = useState()

    const putPost = async (e) => {
        e.preventDefault();

        
    }

    return (
        <div>
            <h1>
                Edit Post
            </h1>
        </div>
    )
}

export default EditPost;