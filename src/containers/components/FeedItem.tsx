type PostProps = {
    postText: string;
}


const FeedItem = ({postText}: PostProps) =>{
    return(
        <div className= "post-container">
            <div className= "post-content">
                <h3>{postText}</h3>
            </div>
            <hr/>
        </div>
    )
}

export default FeedItem;