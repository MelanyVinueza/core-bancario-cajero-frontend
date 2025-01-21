// src/components/AdminUsers.tsx
import { useState, useEffect } from 'react';

const AdminUsers = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    const savedUsers = JSON.parse(localStorage.getItem('users') || '[]');
    setUsers(savedUsers);
  }, []);

  return (
    <div className="admin-users">
      <h1>Admin - Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.email}>
            <p>{user.email} - {user.role}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUsers;
