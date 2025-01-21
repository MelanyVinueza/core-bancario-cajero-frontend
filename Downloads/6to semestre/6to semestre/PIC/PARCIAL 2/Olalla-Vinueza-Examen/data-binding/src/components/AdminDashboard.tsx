const AdminDashboard = () => {
  return (
    <div className="admin-dashboard container">
      <h1>Admin Dashboard</h1>
      <ul>
        <li><a href="/admin-users">Usuarios Creadores</a></li>
        <li><a href="/admin-posts">Posts</a></li>
        <li><a href="/admin-comments">Comentarios</a></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;
