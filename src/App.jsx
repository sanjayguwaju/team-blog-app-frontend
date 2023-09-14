import { useEffect, useState } from 'react'
import './App.css'
import Navbar from '../src/components/Nabar.jsx'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Card from './components/Card'
import Pagination from './components/Pagination'
import BlogPost from './components/BlogPost'
import axios from 'axios'

function App() {
  const [post, setPost] = useState([]);
  // console.log("Post ~~~~~~~~~~~~~>", post)

  useEffect(() => {
    getAllBlogs(setPost);

    const id = setInterval(() => {
      getAllBlogs(setPost);
    }, 5000);
    
    return () => clearInterval(id);
  }, []);
  

  function getAllBlogs(setPost) {
    axios.get('http://localhost:3000/blogs/getallblog')
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
            <p>Column 2</p>
            {post.map(postdata => (
              // console.log({post, postdata}),
              <BlogPost key={postdata._id} title={postdata.title} content={postdata.content} />
            ))}
            <Pagination />
          </div>
          <div className="col-md-4">
            <p>Column 3</p>
            <Card />
            <br />
            <Newsletter />
            <br />
            <Card />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;