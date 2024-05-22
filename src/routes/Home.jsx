import React from "react";
import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import blogFetch from "../axios/config";

import './Home.css'


const Home = () => {

    //manipular os posts
    const [post, setPost] = useState([])

    const getPost = async () => {
        const response = await blogFetch.get('/posts')
        

        setPost(response.data)
    }

    useEffect(() => {
        getPost()
    }, [])



    return (
        <div className="home">
            <h1>Último Post</h1>
            {post.length === 0 ? (<p>Carregando</p>) : (
                post.map((postAtual) => (

                    <div className="post" key={postAtual.id}>
                        <h2>{postAtual.title}</h2>
                        <p>{postAtual.body}</p>
                        <Link to={`/posts/${postAtual.id}`} className="btn">[Ler mais]</Link>
                    </div>
                ))
            )}
        </div>
    )
}

export default Home