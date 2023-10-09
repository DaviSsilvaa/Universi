import { useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import './FeedAxios.css';

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

    function deletePost(id) {
        
        axios.delete(`http://localhost:8080/api/posts/${id}`)
        setPost(post.filter(post => post._id !== id ))
    }

    return (
        <div>
            <div className="btn-newPost">
                <Link to='/post'>
                    <button>Adicionar novo post</button>
                </Link>
            </div>

            {post.length === 0 ? (<p>Carregando...</p>) : (
                post.map((post) => (
                    <div className='post' key={post.id}>
                        <p>{post.message}</p>

                        <div className="btns">
                            <div className="btn-edit">
                                <Link to={{ pathname: `/edit/${post.id}` }}>
                                    <button>Editar</button>
                                </Link>
                            </div>

                            <div className="btn-delete">
                                <Link to='/'>
                                    <button onClick={() => deletePost(post.id) }>Deletar</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))
            )}
        </div>


    );
};

export default FeedAxios;