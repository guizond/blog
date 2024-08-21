import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';
import { useAuthentication } from "../hooks/useAuthentication";
import { useAuthValue } from "../context/AuthContex";

const Navbar = () => {
    const {user} = useAuthValue();
    const {logout} = useAuthentication();

    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.brand}>
                <span>guizond</span>
            </NavLink>
            <ul className={styles.links_list}>
                <li><NavLink to="/" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink></li>
                {!user && (
                    <>
                        <li><NavLink to="/login" className={({isActive}) => (isActive ? styles.active : "")}>Login</NavLink></li>
                        <li><NavLink to="/register" className={({isActive}) => (isActive ? styles.active : "")}>Cadastrar</NavLink></li>
                    </>
                )}
                {user && (
                    <>
                        <li><NavLink to="/posts/create" className={({isActive}) => (isActive ? styles.active : "")}>New Post</NavLink></li>
                        <li><NavLink to="/dashboard" className={({isActive}) => (isActive ? styles.active : "")}>Dashboard</NavLink></li>
                    </>
                )}
                <li><NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>About</NavLink></li>
                {user && (
                    <li>
                        <button onClick={logout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Navbar