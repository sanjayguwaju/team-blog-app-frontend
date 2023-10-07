const MyBlogs = () => {
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
              <button className="btn btn-primary">Update</button>
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
