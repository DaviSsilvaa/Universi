import React from "react";

type PostProps = {
    postText: string;
    postTittle: string
}


const FeedItem = ({postText, postTittle}: PostProps) =>{
    return(
        <div className= "post-container">
            <div className= "post-content">
                <h3>{postTittle}</h3>
                <p>{postText}</p>
            </div>
            <hr/>
        </div>
    )
}

export default FeedItem;