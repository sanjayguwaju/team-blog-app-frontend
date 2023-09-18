import { useEffect, useState } from 'react';
import Navbar from '../components/Nabar.jsx';
import Footer from '../components/Footer.jsx';
import Pagination from '../components/Pagination';
import axios from 'axios';
import BlogPost from '../components/BlogPost';
import Sidebar from '../components/Sidebar';

const Homepage = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getAllBlogs(setPost);

    const id = setInterval(() => {
      getAllBlogs(setPost);
    }, 50000);

    return () => clearInterval(id);
  }, []);

  function getAllBlogs(setPost) {
    axios
      .get(`${process.env.SERVER_URL}/blogs/getallblog`)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {post.map(({ _id, title, content, image }) => (
              <BlogPost key={_id} title={title} content={content} image={image} />
            ))}
            <Pagination />
          </div>
          <div className="col-md-4">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;