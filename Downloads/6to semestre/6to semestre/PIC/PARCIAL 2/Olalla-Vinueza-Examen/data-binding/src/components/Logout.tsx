import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser'); // Elimina al usuario de LocalStorage
    navigate('/login'); // Redirige a la página de login
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
