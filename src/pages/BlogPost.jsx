import { useEffect, useState } from 'react'
import Navbar from '../components/Nabar'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'   
import axios from 'axios'
import BlogPost from '../components/BlogPost'
import Sidebar from '../components/Sidebar'

const BlogPost = () => {
  return (
    <div>
      <Navbar />
      <BlogPost />
      <Footer />
    </div>
  )
}

export default BlogPost
