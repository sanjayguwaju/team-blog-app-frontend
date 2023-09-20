
import { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import axios from 'axios'
import BlogPost from '../components/BlogPost'


const Homepage = () => {
    const [posts, setPost] = useState([]);
    // console.log(posts)
  useEffect(() => {
    getAllBlogs(setPost);

    const id = setInterval(() => {
      getAllBlogs(setPost);
    }, 50000);
    
    return () => clearInterval(id);
  }, []);
  

  function getAllBlogs(setPost) {
    axios.get("http://localhost:3000/blogs/getallblog/")
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
          <BlogPost 
            key={postdata?._id} 
            id={postdata?._id} 
            title={postdata?.title} 
            content={postdata?.content} 
            image={postdata?.image} 
            author={postdata?.author?.name ? postdata?.author?.name : "no author is avaliable"  }
            createdDate={postdata?.createdAt}/>
        ))}
        <Pagination />
    </>
  )
}

export default Homepage