import React, { useState, useEffect, useContext, useRef } from "react";
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
        <div className="post" >
            <p>Bem vindo, {username}</p>
            <div className="boxPosts"></div>
            <div className="">
                <Link to='/post'>
                    <button className="btn-newPost">Nova Publicação</button>
                </Link>
            </div>
            <div>
                {post.length === 0 ? (
                    <p className="textboxuser">Carregando...</p>
                ) : (
                    post.map((p, index) => (
                        <div className='BoxPostUser' key={p.id} >
                            <p>{p.user.login}</p>
                            <div className="ContentPost">
                                {p.showFullContent ? p.message.split('\n').map((line, i) => (
                                    <React.Fragment key={i}>
                                        {line}
                                        <br />
                                    </React.Fragment>
                                )) : formatTextWithLineBreaks(p.message, 45)}
                                <div className='btn-LerMais'>
                                        {p.message.length >= 129 && (
                                            <button onClick={() => toggleReadMore(index)}>
                                                {p.showFullContent ? "Ler menos" : "Ler mais"}
                                            </button>
                                        )}
                                    </div>
                            </div>
                            
                                <div className="btns">
                                    {p.user.login === username &&
                                        <div className="btn-edit">
                                            <Link to={{ pathname: `/edit/${p.id}` }}>
                                                <button>Editar</button>
                                            </Link>
                                        </div>
                                    }
                                    
                                    {p.user.login === username &&
                                        <div className="btn-delete">
                                            <Link to='/feed'>
                                                <button onClick={() => handleClick(p)}>Deletar</button>
                                            </Link>
                                        </div>
                                    }
                                </div>
                            
                            <div className="btns">
                            
                            </div>
                            
                        </div>
                    ))
                )}
            </div>
            
        </div>
    );
};

export default FeedAxios;