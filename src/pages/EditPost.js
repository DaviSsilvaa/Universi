import React, { useEffect, useState } from "react";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";

const EditPost = () => {
  const { changeId } = useParams();
  const [changeMessage, setChangeMessage] = useState("");
  const [post, setPost] = useState(null);

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts/${changeId}`);
        setPost(response.data);
        setChangeMessage(response.data.postMessage);
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      }
    }

    fetchPost();
  }, [changeId]);

  const putPost = async (e) => {
    e.preventDefault();

    const updatedPost = { postMessage: changeMessage };

    try {
      await axios.put(`http://localhost:8080/api/posts/${changeId}`, updatedPost);
      // Redirecionar após a atualização (por exemplo, para a página do post)
    } catch (error) {
      console.error("Erro ao atualizar o post:", error);
    }
  }

  return (
    <div className="new-post">
      <h2>Editar Post</h2>
      {post ? (
        <form onSubmit={putPost}>
          <div className='forms-control'>
            <label htmlFor='text'>Mensagem</label>
            <textarea
              id='text'
              name='text'
              placeholder='Digite a mensagem'
              value={changeMessage}
              onChange={(e) => setChangeMessage(e.target.value)}
            />
          </div>
          <input type='submit' value='Atualizar post' className='button' />
        </form>
      ) : (
        <p>Carregando post...</p>
      )}
      <div className='btn-back'>
        <Link to='/'>
          <button>Voltar para o feed</button>
        </Link>
      </div>
    </div>
  );
}

export default EditPost;