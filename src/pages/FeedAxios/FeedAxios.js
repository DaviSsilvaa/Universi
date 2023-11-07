import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './FeedAxios.css';
import Swal from 'sweetalert2';
import { AppContext } from "../../App";

const FeedAxios = () => {
    const { username, token } = useContext(AppContext);

    const [post, setPost] = useState([]);

    const getPosts = async () => {
        try {
            const response = await axios.get('https://feed-api-deploy.onrender.com/api/posts');
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
        axios.delete(`https://feed-api-deploy.onrender.com/api/posts/${id}`, {
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

    const handleClick = (post) => {
        Swal.fire({
            title: 'Você tem certeza que quer apagar o post?',
            text: "Você não poderá reveter isso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Sim, apague o post!'
          }).then((result) => {
            if (result.isConfirmed) {
                deletePost(post.id);
            }
          })
    }


    function formatTextWithLineBreaks(text, maxLength) {
        let formattedText = '';
        let cont = 0;

        for (let i = 0; i < text.length; i += maxLength) {
            formattedText += text.slice(i, i + maxLength);
            cont += 1

            if (text.length >= 129 && cont >= 3) {
                formattedText += '...'
                break;
            }
        }

        return formattedText;
    }

    const toggleReadMore = (index) => {
        const newPosts = [...post];
        newPosts[index].showFullContent = !newPosts[index].showFullContent;
        setPost(newPosts);
    };

    return (
        <div className="post">
            <p>Bem vindo, {username}</p>
            
            
            <Link to='/post'>
                <button className="btn-newPost">Nova Publicação</button>
            </Link>
            

            {post.length === 0 ? (
                <p className="textboxuser">Carregando...</p>
            ) : (
                post.map((p, index) => (

                    <div className='BoxPostUser' key={p.id}>

                        <p>{p.user.login}</p>

                        <div className="ContentPost">
                            {p.showFullContent ? p.message.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            )) : formatTextWithLineBreaks(p.message, 45)}
                        </div>

                        {p.message.length >= 137 && (
                            <button onClick={() => toggleReadMore(index)}>
                                {p.showFullContent ? "Ler menos" : "Ler mais"}
                            </button>
                        )}

                        {p.user.login === username &&

                            <div className="btns">
                                <div className="btn-edit">
                                    <Link to={{ pathname: `/edit/${p.id}` }}>
                                        <button>Editar</button>
                                    </Link>
                                </div>
                                <div className="btn-delete">
                                    <Link to='/feed'>
                                        <button onClick={() => handleClick(p)}>Deletar</button>
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