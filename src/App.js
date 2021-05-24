import GlobalStyles from './styles/GlobalStyles'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Releases from './sections/Releases'
import Spotlight from './sections/Spotlight'

const App = () => {
  return (
    <>
      <GlobalStyles/>
      <Navbar/>
      <Hero/>
      <Releases/>
      <Spotlight/>
    </>
  )
}

export default App
