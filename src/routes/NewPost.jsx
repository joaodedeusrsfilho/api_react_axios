import React, { useEffect, useState } from "react";
import './NewPost.css'
import blogFetch from '../axios/config'

const NewPost = () =>{

    const[title, setTitle] = useState()
    const[body, setBody] = useState()

    const criarPost = async(e)=>{
        e.preventDefault()

        const post ={
            title, body, userId:1
        }

        await blogFetch.post('/posts',{
            body:post
        })
    
    }

    return(
        <div className="newPost">
            <h2>Digite um novo Post</h2>
            <form onSubmit={(e)=>criarPost(e)}>
                <div className="formControl">
                    <label htmlFor="title">Título</label>
                    <input type="text" name="title" id="title" placeholder="Digite um título"
                    onChange={(e)=>setTitle(e.target.value)}
                    />
                    
                </div>
                <div className="formControl">
                    <label htmlFor="title">Título</label>
                    <textarea type="text" name="body" id="body" placeholder="Digite um conteúdo"
                    onChange={(e)=>setBody(e.target.value)}
                    />
                </div>
                <input type="submit" value="Enviar Post" className="btn"/>
                <input type="reset" value="Limpar" className="btn"/>
            </form>
        </div>
    )
}

export default NewPost