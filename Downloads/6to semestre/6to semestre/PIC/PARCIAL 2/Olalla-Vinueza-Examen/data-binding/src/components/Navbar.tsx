import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser') || 'null'); // Verificar si hay un usuario logueado

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Eliminar al usuario del localStorage
    navigate('/login'); // Redirigir al login
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><Link to="/home">Home</Link></li>

        {/* Si el usuario es Administrador, mostrar enlaces de Admin */}
        {loggedInUser && loggedInUser.role === 'Administrador' && (
          <>
            <li><Link to="/admin-users">Usuarios Creadores</Link></li>
            <li><Link to="/admin-posts">Posts</Link></li>
            <li><Link to="/admin-comments">Comentarios</Link></li>
          </>
        )}

        {/* Si el usuario es Publicador, mostrar enlaces de Publicador */}
        {loggedInUser && loggedInUser.role === 'Publicador' && (
          <>
            <li><Link to="/posts">Posts</Link></li>
            <li><Link to="/comments">Comments</Link></li>
          </>
        )}

        <li><Link to="/about">About</Link></li>

        {/* Mostrar Login y Register si el usuario no está autenticado */}
        {!loggedInUser ? (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        ) : (
          // Si el usuario está logueado, mostrar Logout
          <li><button onClick={handleLogout}>Logout</button></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
