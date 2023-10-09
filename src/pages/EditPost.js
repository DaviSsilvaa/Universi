import React, { useEffect, useState } from "react";
import {Link, useParams} from 'react-router-dom';
import axios from "axios";



const EditPost = () => {

    const { changeId } = useParams()
    const [changeMessage, setChangeMessage] = useState()

    const putPost = async (changeId) => {
        const post = {changeMessage}
        await axios.put(`http://localhost:8080/api/posts/${changeId}`, post)
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/api/posts/${changeId}`)
    })

    return (
        <div className="new-post">
        <h2>Comente sobre algo</h2>
        <form onSubmit={(changeId) => putPost(changeId)}>
            <div className = 'forms-control'>
                <label htmlFor='text'>Mensagem</label>  
                <textarea id='text'
                          name='text'
                          placeholder='Digite a mensagem'
                          onChange={(changeId) => setChangeMessage(changeId.target.value)}
                />
            </div>
            <input type='submit' value='criar post' className='button'/>
        </form>
        <div className='btn-back'>
            <Link to='/'>
                <button>Voltar para o feed</button>
            </Link>
        </div>
    </div>
    )
}

export default EditPost;