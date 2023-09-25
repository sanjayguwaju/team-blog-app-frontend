import { Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import BlogPostByID from './pages/BlogPostByID';
import MainLayout from './components/MainLayout';
import SinglePostLayout from './components/SinglePostLayout'; 
import Write from './components/Write';
import Register from './components/Register';

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
        </Route>
        <Route path="/getpostbyid/:id" element={<SinglePostLayout/>} >
          <Route index element={<BlogPostByID />} />
        </Route>
        <Route path="/write" element={<Write />} />
        <Route path="/register" element={<Register/>} />
      </Routes>
  );
}

export default App;