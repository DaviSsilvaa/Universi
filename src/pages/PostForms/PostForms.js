import axios from "axios";
import {useState, useContext} from "react";
import { Link, useNavigate } from 'react-router-dom'
import './PostForms.css'
import { AppContext } from '../../App';


const PostForms = () => {

    const {token} = useContext(AppContext);
    const [postMessage, setPostMessage] = useState()
    const navigate = useNavigate(); // Use useNavigate para navegação

    const creatPost = async (e) => {
        e.preventDefault();

        const post = {postMessage}
        await axios.post('http://localhost:8080/api/posts', post, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        
        // Após a postagem bem-sucedida, redirecione para a página inicial
        navigate('/feed');
    }

    return (
        <div className="new-post">
        <h2>Comente sobre algo</h2>
        <form onSubmit={(e) => creatPost(e)}>
            <div className = 'forms-control'>
                <label htmlFor='text'>Mensagem</label>
                <textarea id='text'
                          name='text'
                          placeholder='Digite a mensagem'
                          onChange={(e) => setPostMessage(e.target.value)}
                />
            </div>
            <input type='submit' value='criar post' className='button2'/>
        </form>
        <div className='btn-back'>
            <Link to='/'>
                <button>Voltar para o feed</button>
            </Link>
        </div>
    </div>
    )
}

export default PostForms;