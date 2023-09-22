// @ts-ignore
import {posts} from "../service/Api.ts";
// @ts-ignore
import FeedItem from "./components/FeedItem.tsx";

const Feed = () =>{
    return (
        <div className= "feed-container">
            {posts.map((post) => (
                <FeedItem postText={post.text} key={post.postId}/>))}
        </div>
    )
}


export default Feed;