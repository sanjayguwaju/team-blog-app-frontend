import './App.css'
import Navbar from '../src/components/Nabar.jsx'
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Card from './components/Card'
import TagCloud from './components/TagCloud'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {/* <div className="col-1 col-md-1">
            <p>Column 1</p>
          </div> */}
          <div className="col-md-8">
            <p>Column 2</p>
            <TagCloud />  
      <h1>Welcome to the Blog App</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem
              explicabo deserunt sed dignissimos. Qui fugiat perspiciatis quos, at
              nostrum, cupiditate necessitatibus error ipsa inventore sit veritatis
              quasi vel sed.
            </p>
            <hr/>
            <br/>
            <h2>Featured Posts</h2>
            <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem
              explicabo deserunt sed dignissimos. Qui fugiat perspiciatis quos, at
              nostrum, cupiditate necessitatibus error ipsa inventore sit veritatis
              quasi vel sed.</p>
          </div>
          <div className="col-md-4">
            <p>Column 3</p>
            <Card />
            <Card />
            <Card />
          </div>
          {/* <div className="col-1 col-md-1">
            <p>Column 4</p>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;