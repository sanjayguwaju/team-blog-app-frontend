import {Routes, Route, Link} from 'react-router-dom'
import Homepage from './pages/Homepage';
import BlogPost from './components/BlogPost';
import BlogPostByID from './pages/BlogPostByID';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/getpostbyid" element={<BlogPostByID/>} />
    </Routes>
  );
}

export default App;