import blogFetch from 'axios';
import axios from "axios";
import {useState} from "react";


const PostForms = () => {

    const [postTitle, setPostTitle] = useState()
    const [postMessage, setPostMessage] = useState()

    const creatPost = async (e) => {
        e.preventDefault();

        const post = {postTitle, postMessage}
        await axios.post('http://localhost:8080/api/posts', post)
    }

    return (
        <div className="new-post">
        <h2>Comente sobre algo</h2>
        <form onSubmit={(e) => creatPost(e)}>
            <div className = 'forms-control'>
                <label htmlFor='title'>Titulo</label>
                <input id='title'
                       type='text'
                       name='title'
                       placeholder='Digite o titulo'
                       onChange={(e) => setPostTitle(e.target.value)}
                />
            </div>

            <div className = 'forms-control'>
                <label htmlFor='text'>Mensagem</label>
                <textarea id='text'
                          name='text'
                          placeholder='Digite a mensagem'
                          onChange={(e) => setPostMessage(e.target.value)}
                />
            </div>
            <input type='submit' value='criar post' className='button'/>
        </form>
    </div>
    )
}

export default PostForms;