import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyBlogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate() ;

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get(`${process.env.SERVER_URL}/blogs/getallblog`);
              setBlogPosts(response.data);
          } catch (error) {
              console.error(error);
          }
      };

      fetchData();
  }, []);

  
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  const filteredBlogs = blogPosts.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${process.env.SERVER_URL}/blogs/deleteblog/${id}`);
      setBlogPosts(blogPosts.filter((posts) => posts._id !== id));
    } catch (error) {
      console.error(error);
    }
  };
    const handleUpdate = (id) => {
  
        navigate(`/updateblog/${id}`);
    };

    const handleViewPost = (id) => {
        navigate(`/getpostbyid/${id}`);
    }

  return (
    <div className="container mt-5">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Blog Posts"
        value={searchTerm}
        onChange={handleSearch}
      />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">SN</th>
            <th scope="col">BlogPosts</th>
            <th scope="col">View</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {filteredBlogs.map((post, index) =>(
      
          <tr key={post.id}
          >
          { console.log("this is post", post)}
          <td>{index + 1}</td>
          <td>{post.title}</td>
          <td>
            <button className="btn btn-primary"  onClick={() => handleViewPost(post._id)}>View</button>
          </td>
          <td>
            <button className="btn btn-primary" onClick={() => handleUpdate(post._id)}>Update</button>
          </td>
          <td>
            <button className="btn btn-danger" onClick={() => handleDelete(post._id)}>Delete</button>
          </td>
        </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBlogs;
