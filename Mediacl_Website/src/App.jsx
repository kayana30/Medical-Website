
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Products from './components/Products'
import Blog from './components/Blog'
import Doctor from './components/Doctor'
import MyFooter from './components/MyFooter'

function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <Services/>
     <About/>
     <Products/>
     <Blog/>
     <Doctor/>
     <MyFooter/>
    </>
  )
}

export default App;
