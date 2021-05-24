import GlobalStyles from './styles/GlobalStyles'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Releases from './sections/Releases'
import Spotlight from './sections/Spotlight'
import Image from './sections/Image'

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Hero/>
      <Releases/>
      <Image photo={1}/>
      <Spotlight/>
    </>
  )
}

export default App
