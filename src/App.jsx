import './App.css'
import Navbar from '../src/components/Nabar.jsx'
import Footer from './components/Footer'
import Card from './components/Card'

function App() {
  return (
    <>
      <Navbar />
      <Card />
      <h1>Welcome to the Blog App</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Neque rem explicabo deserunt sed dignissimos.
        Qui fugiat perspiciatis quos, at nostrum, cupiditate necessitatibus 
        error ipsa inventore sit veritatis quasi vel sed.</p>
      <Footer/>
    </>
  )
}

export default App
