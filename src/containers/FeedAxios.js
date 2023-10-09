import { useState, useEffect} from "react";
import axios from "axios";

const FeedAxios= () => {

    const [post, setPost] = useState([])

    const getPosts = async() => {

        try {
            const response = await axios.get('http://localhost:8080/api/posts')

            const data = response.data
            setPost(data)

        } catch (e){
            console.log(e)
        }

    }

    useEffect(() => {
        getPosts()
    }, []);

    return (
        <div>
            <h2>Posts</h2>
            {post.length === 0 ? (<p>carregando</p>) : (
                post.map((post) => (
                    <div className='post' key={post.id}>
                        <p>{post.message}</p>
                    </div>
                ))
            )}
        </div>


    );
};

export default FeedAxios;