import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from "axios";

const EditPost = () => {
  const { changeId } = useParams();
  const [changeMessage, setChangeMessage] = useState("");
  const [post, setPost] = useState(null);
  const navigate = useNavigate(); // Use useNavigate para navegação

  console.log(post)

  useEffect(() => {
    async function fetchPost() {
      try {
        const response = await axios.get(`http://localhost:8080/api/posts/${changeId}`);
        setPost(response.data);
        setChangeMessage(response.data.message);
        console.log(response.data); // Aqui você pode acessar os dados da resposta
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      }
    }
  
    fetchPost();
  }, [changeId]);

  const updatePost = async (e) => {
    e.preventDefault();

    const updatedPost = { changeId: changeId, changeMessage: changeMessage};
    console.log(changeMessage)

    try {
      await axios.put(`http://localhost:8080/api/posts`, updatedPost);
      navigate('/')
      // Redirecionar após a atualização (por exemplo, para a página do post)
    } catch (error) {
      console.error("Erro ao atualizar o post:", error);
    }
  }

  return (
    <div className="new-post">
      <h2>Editar Post</h2>
      {post ? (
        <form onSubmit={updatePost}>
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
