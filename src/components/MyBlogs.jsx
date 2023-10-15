import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyBlogs() {
    const [searchTerm, setSearchTerm] = useState('');
    const [blogs, setBlogs] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getBlogs = async () => {
            try {
                const res = await axios.get(`${process.env.SERVER_URL}/blogs/getallblog`);
                setBlogs(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getBlogs();
    },[]);

  const filteredBlogs = blogs.filter((item) => 
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUpdate =  (id) => {
    navigate(`/updateblog/${id}`);
  };

  return (
    <div className="container mt-5">
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search Blog Posts"
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
            {filteredBlogs.map((item, index) => (
          <tr key ={item.sn}>
            <th scope="row">{index}</th>
            <td>{item.title}</td>
            <td>
              <button className="btn btn-primary">View</button>
            </td>
            <td>
              <button 
                className="btn btn-primary"
                onClick={() => handleUpdate(item._id)}
                >Update</button>  
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyBlogs;
