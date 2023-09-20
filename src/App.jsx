import { Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import BlogPostByID from './pages/BlogPostByID';
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Card from './components/Card';

function App() {
  return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/getpostbyid/:id" element={<BlogPostByID />} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/author" element={<MainLayout/>}>
          <Route path="/author" element={<Card/>} />
        </Route>
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
  );
}

export default App;