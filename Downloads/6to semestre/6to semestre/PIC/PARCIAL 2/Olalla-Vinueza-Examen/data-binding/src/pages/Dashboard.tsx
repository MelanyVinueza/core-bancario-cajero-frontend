// src/pages/Dashboard.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    // Simula la obtención del rol de usuario desde LocalStorage o contexto
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    setUserRole(user.role); // Puede ser 'publicador' o 'administrador'
  }, []);

  return (
    <div>
      <h1>Bienvenido al Dashboard</h1>
      {userRole === 'administrador' ? (
        <div>
          <h2>Administración</h2>
          <nav>
            <ul>
              <li>
                <Link to="/users">Usuarios Creadores</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/comments">Comentarios</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : userRole === 'publicador' ? (
        <div>
          <h2>Publicador</h2>
          <nav>
            <ul>
              <li>
                <Link to="/posts">Ver Posts</Link>
              </li>
              <li>
                <Link to="/comments">Ver Comentarios</Link>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <p>Cargando información del usuario...</p>
      )}
    </div>
  );
};

export default Dashboard;
