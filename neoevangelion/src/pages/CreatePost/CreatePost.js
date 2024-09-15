import styles from './CreatePost.module.css'

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthValue } from '../../context/AuthContex';
import { useInsertDocument } from '../../hooks/useInsertDocument';

const CreatePost = () => {

    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");

    const {user} = useAuthValue()

    const {insertDocument, response} = useInsertDocument("posts");

    const navigate = useNavigate()

    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormError("")

        // validate image url

        try {
            new URL(image);
        } catch (error) {
            setFormError("The image needs to be an URL.")
        }

        // create array tags

        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

        // check all values

        if (!title || !image || !tags || !body) {
            setFormError("Please fill in all the fields!");
        }

        if (formError) return; 

        insertDocument({
            title,
            image,
            body,
            tagsArray,
            uid: user.uid,
            createdBy: user.displayName
        })

        // redirect to home page

        navigate("/");
        
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
                    <input type="text" name="tags" required placeholder="Insert tags to your post separated by commas" onChange={(e) => setTags(e.target.value)} value={tags}/>
                </label>
                {!response.loading && <button className="btn">Cadastrar</button>}
                {response.loading && (<button className="btn" disabled>Aguarde...</button>)}
                {response.error && <p className="error">{response.error}</p>}
                {formError && <p className="error">{formError}</p>}
                
            </form>
        </div>
    )
}

export default CreatePost