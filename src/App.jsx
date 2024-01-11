import { Routes, Route} from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import BlogPostByID from './pages/single-post/BlogPostByID';
import MainLayout from './components/layouts/main-layout/MainLayout';
import Login from './components/modules/login/Login';
import SinglePostLayout from './components/layouts/sidebar/SinglePostLayout'; 
import Write from './components/modules/write/Write';
import Register from './components/modules/register/Register';
import MyBlogs from './components/modules/myblogs/MyBlogs';
import Loader from './components/ui/loader/Loader';
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