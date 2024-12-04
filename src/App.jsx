import './css/contact-page.css'
import './css/styles.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Appfeatures from './components/Appfeatures'
import Howdoesitwork from './components/Howdoesitwork'

function App() {
  

  return (
    <>
    <Navbar/>
    <main>
    <Hero/>
    <Brands/>
    <Appfeatures/>
    <Howdoesitwork/>
    </main>
    <Footer/>
    </>
  )
}

export default App
