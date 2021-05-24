import GlobalStyles from './styles/GlobalStyles'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Releases from './sections/Releases'
import Spotlight from './sections/Spotlight'
import Image from './components/Image'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Hero/>
      <Releases/>
      <Image photo={1}/>
      <Spotlight/>
      <Footer/>
    </>
  )
}

export default App
