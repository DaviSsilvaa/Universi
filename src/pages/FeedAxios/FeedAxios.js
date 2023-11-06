import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './FeedAxios.css';
import { AppContext } from "../../App";

const FeedAxios = () => {
    const { username, token } = useContext(AppContext);

    const [post, setPost] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/posts');
            const data = response.data;
            setPost(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getPosts();
    }, []);

    function deletePost(id) {
        axios.delete(`http://localhost:8080/api/posts/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(() => {
                setPost(prevPost => prevPost.filter(p => p.id !== id));
            })
            .catch(error => {
                console.log("Erro ao excluir post:", error);
            });
    }

    function formatTextWithLineBreaks(text, maxLength) {
        let formattedText = '';
        let cont = 0;

        for (let i = 0; i < text.length; i += maxLength) {
            formattedText += text.slice(i, i + maxLength) + '\n';
            cont += 1

            if(cont == 3) {
                formattedText += '...'
                break;
            }
        }

        return formattedText;
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
            {post.length === 0 ? (
                <p className="textboxuser">Carregando...</p>
            ) : (
                post.map((p) => (
                    <div className='BoxPostUser' key={p.id}>
                        <p>{p.user.login}</p>
                        <div className="ContentPost">
                            {formatTextWithLineBreaks(p.message, 47).split('\n').map((line, index) => (
                                <React.Fragment key={index}>
                                    {index > 0 && <br />}
                                    {line}
                                </React.Fragment>
                            ))}
                        </div>
                        {p.user.login === username &&
                            <div className="btns">
                                <div className="btn-edit">
                                    <Link to={{ pathname: `/edit/${p.id}` }}>
                                        <button>Editar</button>
                                    </Link>
                                </div>
                                <div className="btn-delete">
                                    <Link to='/feed'>
                                        <button onClick={() => deletePost(p.id)}>Deletar</button>
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