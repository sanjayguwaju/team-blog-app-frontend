import ReactDOM from 'react-dom/client'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from 'react-router-dom';

// --- JSX imports ------
import App from './App.jsx'

// ----- CSS for the packages -----
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-quill/dist/quill.snow.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    <ToastContainer />
  </BrowserRouter>,
)
