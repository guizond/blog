import styles from './CreatePost.module.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContex';

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
    };

    return (
        <div>
            <h2>Create Post</h2>
            <p>Share your thoughts and ideas with the whole world</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Title of your post:</span>
                    <input type="text" name="title" required placeholder="What you wanna share?" onChange={(e) => setTitle(e.target.value)} value={title}/>
                </label>
                <label>
                    <span>URL of the image:</span>
                    <input type="text" name="image" required placeholder="Insert a image related to your idea" onChange={(e) => setImage(e.target.value)} value={image}/>
                </label>
                <label>
                    <span>Your idea:</span>
                    <textarea name="body" required placeholder="Insert here you thoughts and ideas" onChange={(e) => setBody(e.target.value)} value={body}></textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input type="text" name="tags" required placeholder="Insert tags to your post separated by commas" onChange={(e) => setTitle(e.target.value)} value={tags}/>
                </label>
                <button className="btn">Cadastrar</button>

                {/*!loading && <button className="btn">Cadastrar</button>}
                {loading && (<button className="btn" disabled>Aguarde...</button>)}
                {error && <p className="error">{error}</p>*/}
                
            </form>
        </div>
    )
}

export default CreatePost