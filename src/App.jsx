import { useEffect, useState } from 'react'
import './App.css'
import Navbar from '../src/components/Nabar.jsx'
import Footer from './components/Footer'
import Pagination from './components/Pagination'
import axios from 'axios'
import BlogPost from './components/BlogPost'
import Sidebar from './components/Sidebar'

function App() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    getAllBlogs(setPost);

    const id = setInterval(() => {
      getAllBlogs(setPost);
    }, 50000);
    
    return () => clearInterval(id);
  }, []);
  

  function getAllBlogs(setPost) {
    axios.get(`${process.env.SERVER_URL}/blogs/getallblog`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">

          <div className="col-md-8">
            {post.map(postdata => (
              <BlogPost key={postdata._id} title={postdata.title} content={postdata.content} image={postdata.image} />
            ))}
            <Pagination />
          </div>
          <div className="col-md-4">
            <Sidebar/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;