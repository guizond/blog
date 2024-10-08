import styles from './PostDetail.module.css' 
import { Link } from 'react-router-dom'

const PostDetail = ({ post }) => {
    return (
        <div className={styles.post_detail}>
            <img src={post.image} alt={post.tittle} />
            <h2>{post.tittle}</h2>
            <p className={styles.createdby}>{post.createdBy}</p>
            <div className={styles.tags}>
                {post.tagsArray.map ((tag) => (
                    <p key={tag}><span>#</span>{tag}</p>
                ))}
            </div>
            <Link to={`/posts/${post.id}`} className="btn btn-outline">
            Read
            </Link>
        </div>
    )
}

export default PostDetail;