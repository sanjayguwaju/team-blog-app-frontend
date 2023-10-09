import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const MyBlogs = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate() ;

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await axios.get(`${process.env.SERVER_URL}/blogs/getallblog`);
              setData(response.data);
          } catch (error) {
              console.error(error);
          }
      };

      fetchData();
  }, []);
  
  const handleUpdate = (id) => {
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
          <tr>
            <td>S.N.</td>
            <td>BlogPosts</td>
            <td>
              <button className="btn btn-primary">View</button>
            </td>
            <td>
              <button className="btn btn-primary" onClick={() => handleUpdate(item._id)}>Update</button>
            </td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyBlogs;
