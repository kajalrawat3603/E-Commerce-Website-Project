import React, { useState, useEffect } from 'react';

const UserDetails = () => {
  const [user, setUser] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/user`, {
          method: 'GET',
          credentials: 'include',
        });
        const data = await response.json();

        if (response.ok) {
          setUser(data.user);
          setBlogs(data.blogs);
        } else {
          console.error('Error fetching user details:', data.message);
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, []);

  const deleteBlog = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this blog?");
    if (!confirmed) return;

    try {
      const response = await fetch(`http://localhost:5000/blog/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        const updatedBlogs = blogs.filter(blog => blog._id !== id);
        setBlogs(updatedBlogs);
      } else {
        console.error('Failed to delete blog:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div className='user-detail'>
        <div className='user-box'>
        <h2>User Details</h2>
        <div className='details'>
          <p><strong>User Name:</strong> {user.name}</p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <p><strong>Phone No.:</strong> {user.phone}</p>
          <p><strong>Age:</strong> {user.age}</p>
        </div>
        </div>
        {blogs.length > 0 ? (
        <div className='blog-table'>
        <h1>Blogs Written</h1>
         <table >
  <thead>
    <tr>
      <th >Product Name</th>
      <th >Description</th>
      <th >Date Written</th>
      <th >Actions</th>
    </tr>
  </thead>
  <tbody>
    {blogs.map(blog => (
      <tr key={blog._id}>
        <th>{blog.productName}</th>
        <th>{blog.description}</th>
        <th>{new Date(blog.createdAt).toLocaleDateString()}</th>
        <th>
          <button className='del-btn' onClick={() => deleteBlog(blog._id)} >Delete</button>
        </th>
      </tr>
    ))}
  </tbody>
</table>

          
        </div>
        ) : (
          <p>No blogs written yet.</p>
        )}
    </div>
  );
};

export default UserDetails;
