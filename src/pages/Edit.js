import React, { useEffect } from 'react'
import axios from 'axios'

import { useHistory, useParams } from 'react-router-dom'


function Edit() {

    const { id } = useParams()


    
    const addPost = data => axios.put(`http://localhost:8080/api/posts/${id}`, data)
    .then(() => {
        console.log("Deu tudo certo")
        history.push("/")
    })
    .catch(() => {
        console.log("DEU ERRADO")
    })


    useEffect(() => {
        axios.get(`http://localhost:8080/api/posts/${id}`)
        .then((response) => {
            reset(response.data)
        })
        
    }, [])

    return(
        <div>
            <main>

                <div className="card-post" >

                    <h1>Criar postagem</h1>
                    <div className="line-post" ></div>

                    <div className="card-body-post" >

                        <form onSubmit={handleSubmit(addPost)} >

                            <div className="fields" >
                                <label>Conteúdo</label>
                                <textarea type="text" name="content" {...register("content")} ></textarea>
                                <p className="error-message">{errors.content?.postMessage}</p>
                            </div>

                            <div className="btn-post" >
                                <button type="submit" >Enviar</button>
                            </div>

                        </form>

                    </div>

                </div>

            </main>
        </div>
    )
}

export default Edit