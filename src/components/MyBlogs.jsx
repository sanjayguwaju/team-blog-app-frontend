import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyBlogs() {
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState([
        { sn: 1, blogPost: 'Sample Blog Post 1' },
        { sn: 2, blogPost: 'Sample Blog Post 2' },
        { sn: 3, blogPost: 'Sample Blog Post 3' },
    ]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleDelete = (sn) => {
        const updatedData = data.filter((item) => item.sn !== sn);
        setData(updatedData);
    };

    // Filter the data based on the search term
    const filteredData = data.filter((item) =>
        item.blogPost.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                    {filteredData.map((item) => (
                        <tr key={item.sn}>
                            <th scope="row">{item.sn}</th>
                            <td>{item.blogPost}</td>
                            <td>
                                <button className='btn btn-primary'>
                                    View
                                </button>
                            </td>
                            <td>
                                <button className='btn btn-primary'>
                                    Update
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(item.sn)}
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
