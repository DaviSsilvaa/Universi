import { useParams, Link } from "react-router-dom";

const Comment = () => {

    //Check to allow only valid postId to load the page
    const {postId} = useParams();

    return (
        <div>
            <h1>sample text</h1>
            <h1>The id of your post: {postId}</h1>
            <Link to="/">Click to go back to the main page</Link>
        </div>
    );
}

export default Comment;