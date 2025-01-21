const Posts = () => {
    const user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');
  
    if (!user) {
      window.location.href = '/login';
    }
  
    return (
      <div>
        <h1>Posts</h1>
        {/* Aquí puedes agregar la funcionalidad de ver y crear posts */}
      </div>
    );
  };
  
  export default Posts;
  