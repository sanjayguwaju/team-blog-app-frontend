import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/BlogPost" element={<BlogPost/>} />
    </Routes>
  );
}
export default App;