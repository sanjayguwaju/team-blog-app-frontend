import { Routes, Route, Link} from 'react-router-dom';
import Homepage from './pages/Homepage';
import BlogPostbyId from './pages/BlogPostbyId';
import Newsletter from './components/Newsletter';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blogpost" element={<BlogPostbyId />} />
      <Route path="/about" element={<Newsletter />} />
      </Routes>
  );
}

export default App;