import { useState, useEffect, useContext} from "react";
import React from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import './FeedAxios.css';
import { AppContext } from "../../App";


const FeedAxios= () => {

    const {username, token} = useContext(AppContext);

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
        axios.delete(`http://localhost:8080/api/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        setPost(post.filter(post => post._id !== id ))
        window.location.reload();
    }
    
    

    return (
        <div className="post">

            <p>Bem vindo, {username}</p>

            <div className="boxPosts"></div>
            <div className="">
                <Link to='/post'>
                    <button className="btn-newPost">Nova Publicação</button>
                </Link>
            </div>

            
            {post.length === 0 ? (<p className="textboxuser">Carregando...</p>) : (
                post.map((post) => (
                    
                    <div className='BoxPostUser' key={post.id}>
                        <p>{post.user.login}</p>
                        <div className="ContentPost">
                            {post.message.split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && <br />}
                                    {line}
                                </React.Fragment>
                            ))}
                        </div>
                        {post.user.login === username && 
                        <div className="btns">
                            <div className="btn-edit">
                                <Link to={{ pathname: `/edit/${post.id}` }}>
                                    <button>Editar</button>
                                </Link>
                            </div>

                            <div className="btn-delete">
                                <Link to='/feed'>
                                    <button onClick={() => deletePost(post.id) }>Deletar</button>
                                </Link>
                            </div>
                        </div>
                        }
                    </div>
                
                ))
            )}
        </div>


    );
};

export default FeedAxios;