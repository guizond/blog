import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

//Hooks

import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';

//Context
import { AuthProvider  } from './context/AuthContex';

// PAGES
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Register from './pages/Cadastro/Register';
import Login from './pages/Login/Login';
import CreatePost from './pages/CreatePost/CreatePost';
import Dashboard from './pages/Dashboard/Dashboard';

function App() {

  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    
    onAuthStateChanged(auth, (user) => {
      setUser(user)
    })
  }, [auth]); 

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Navbar />
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/posts/create" element={<CreatePost />} />
                <Route path="/dashboard" element={<Dashboard />} />
              </Routes>
            </div>
          <Footer />
        </BrowserRouter> 
      </AuthProvider>
    </div>
  );
} 

export default App;
