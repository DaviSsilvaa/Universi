// @ts-ignore
import React from "react";
import {posts} from "../service/Api.ts";
// @ts-ignore
import FeedItem from "./components/FeedItem.tsx";

const Feed = () =>{
    return (
        <div className= "feed-container">
            {posts.map((post) => (
                <FeedItem postTittle={post.tittle} postText={post.text} key={post.postId}/>))}
        </div>
    )
}


export default Feed;