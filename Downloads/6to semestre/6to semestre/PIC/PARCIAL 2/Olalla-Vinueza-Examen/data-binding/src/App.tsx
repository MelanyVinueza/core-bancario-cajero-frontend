import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Comments from './pages/Comments';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AdminPosts from './components/AdminPosts';
import AdminComments from './components/AdminComments';
import AdminUsers from './components/AdminUsers';
import CreatePost from './components/CreatePost';
import CreateComment from './components/CreateComment';

const App = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null');

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Publicador */}
        <Route path="/posts" element={loggedInUser && loggedInUser.role === 'Publicador' ? <CreatePost /> : <Posts />} />
        

        {/* Administrador */}
        <Route path="/admin-posts" element={loggedInUser && loggedInUser.role === 'Administrador' ? <AdminPosts /> : <Dashboard />} />
        <Route path="/admin-comments" element={loggedInUser && loggedInUser.role === 'Administrador' ? <AdminComments /> : <Dashboard />} />
        <Route path="/admin-users" element={loggedInUser && loggedInUser.role === 'Administrador' ? <AdminUsers /> : <Dashboard />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Autenticación */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default App;
