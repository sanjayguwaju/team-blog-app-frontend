import { Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import BlogPostByID from './pages/BlogPostByID';
import MainLayout from './components/MainLayout';
import Login from './components/Login';
import SinglePostLayout from './components/SinglePostLayout'; 
import Write from './components/Write';
import Register from './components/Register';
import MyBlogs from './components/MyBlogs';
import Loader from './components/Loader/Loader';
import RedirectToAPIDocs from './components/ApiDocs';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
        </Route>
        <Route path="/getpostbyid/:id" element={<SinglePostLayout/>} >
          <Route index element={<BlogPostByID />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/myblogs" element={<MyBlogs/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/loader" element={<Loader/>} />
        <Route path="/updateblog/:id" element={<Write />} />
          <Route path="/api-docs" element={<RedirectToAPIDocs />} />
      </Routes>
    </>
  );
}

export default App;