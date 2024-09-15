// CSS
import styles from './Home.module.css'

// hooks

import { useNavigate, Link } from "react-router-dom";
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

// components
import PostDetail from '../../components/PostDetail';


const Home = () => {

    const [query, setQuery] = useState("")
    const {documents: posts, loading} = useFetchDocuments("posts");

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <h1>See our newest posts</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="or search for tags..." onChange={(e) => setQuery(e.target.value)} />
                <button className="btn btn-dark">Search</button>
            </form>
            <div>
                {loading && <p>Loading...</p>}
                {posts && posts.map((post) => <PostDetail key={post.id} post={post}/>)}
                {posts && posts.length === 0 && (
                    <div className={styles.noposts}>
                        <p>No posts where found</p>
                        <Link to= "/posts/create" className="btn">
                            Create first post
                        </Link>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home;