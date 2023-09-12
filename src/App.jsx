import './App.css';
import Navbar from '../src/components/Nabar.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <p>Column 1</p>
          </div>
          <div className="col-md-6">
            <p>Column 2</p>
            <h1>Welcome to the Blog App</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem
              explicabo deserunt sed dignissimos. Qui fugiat perspiciatis quos, at
              nostrum, cupiditate necessitatibus error ipsa inventore sit veritatis
              quasi vel sed.
            </p>
          </div>
          <div className="col-md-3">
            <p>Column 3</p>
          </div>
          <div className="col-md-1">
            <p>Column 4</p>
          </div>
        </div>
      </div>
    

      <Footer />
    </>
  );
}

export default App;