import './App.css'
import Navbar from '../src/components/Nabar.jsx'
import Footer from './components/Footer'
import RecentCard from './components/RecentCard'
import PopularCard from './components/PopularCard'
import Newsletter from './components/Newsletter'
import Card from './components/Card'
import Pagination from './components/Pagination'
import TagCloud from './components/TagCloud'

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-1">
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
            <hr/>
            <br/>
            <h2>Featured Posts</h2>
            <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque rem
              explicabo deserunt sed dignissimos. Qui fugiat perspiciatis quos, at
              nostrum, cupiditate necessitatibus error ipsa inventore sit veritatis
              quasi vel sed.</p>
          </div>
          <div className="col-md-3">
            <p>Column 3</p>
            <RecentCard />
            <PopularCard />
            <Card />
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