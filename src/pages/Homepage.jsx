
import { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import axios from 'axios'
import BlogPost from '../components/BlogPost'


const Homepage = () => {
    const [posts, setPost] = useState([]);
    const [showTrimmedPost, setshowTrimmedPost] = useState(true);
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
      
        {posts.map(postdata => (
          <BlogPost key={postdata._id} id={postdata._id} title={postdata.title} content={postdata.content} image={postdata.image} showTrimmedPost={showTrimmedPost} />
        ))}
        <Pagination />
    </>
  )
}

export default Homepage