import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Verificamos si el usuario existe en el LocalStorage
    const storedUser = localStorage.getItem(email);
    if (!storedUser) {
      alert('User not found');
      return;
    }

    const user = JSON.parse(storedUser);

    // Verificamos la contraseña
    if (user.password !== password) {
      alert('Incorrect password');
      return;
    }

    // Guardamos al usuario como "loggedInUser" en LocalStorage
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    // Redirigimos al Dashboard dependiendo del rol
    if (user.role === 'Administrador') {
      alert('Welcome Admin!');
      navigate('/admin-dashboard'); // Redirige al Dashboard de Admin
    } else if (user.role === 'Publicador') {
      alert('Welcome Publisher!');
      navigate('/posts'); // Redirige al Dashboard de Publicador
    } else {
      alert('Role not recognized');
    }
  };

  return (
    <div className="login-page container">
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
