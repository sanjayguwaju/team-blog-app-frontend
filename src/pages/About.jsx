import { useEffect, useState } from 'react'
import Navbar from '../components/Nabar'
import Footer from '../components/Footer'
import Pagination from '../components/Pagination'   
import axios from 'axios'
import BlogPost from '../components/BlogPost'
import Sidebar from '../components/Sidebar'

const About = () => {
  return (
    <div>
    <Navbar />
        This is about page
    <Footer />
    </div>
  );
};

export default About;
