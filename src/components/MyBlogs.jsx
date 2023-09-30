import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function MyBlogs() {
    const [searchTerm, setSearchTerm] = useState('');
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

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDelete = async (sn) => {
        try {
            await axios.delete(`${process.env.SERVER_URL}/blogs/deleteblog/${sn}`);
            // Remove the deleted blog post from the data state
            const updatedData = data.filter((item) => item.sn !== sn);
            setData(updatedData);
        } catch (error) {
            console.error(error);
        }
    };

    // Filter the data based on the search term
    const filteredData = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    {filteredData.map((item,index) => (
                        <tr key={item.sn}>
                            <th scope="row">{index}</th>
                            <td>{item.title}</td>
                            <td>
                                <button 
                                    className='btn btn-primary'
                                    onClick={() => handleViewPost(item._id)}
                                >
                                    View
                                </button>
                            </td>
                            <td>
                                <button 
                                    className='btn btn-primary'
                                    onClick={() => handleUpdate(item._id)}
                                >
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item._id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MyBlogs;