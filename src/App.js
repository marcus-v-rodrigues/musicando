//Main project file 
//What is here is what is built

import { BrowserRouter, Route, Switch } from 'react-router-dom' //React library to have multiple pages

import Layout from './components/Layout' //General component with Navbar and Footer

//Pages
import Main from './pages/Main'
import Login from './pages/Login'
import Cart from './pages/Cart'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ Main } />
                    <Route path="/login" component={ Login } />
                    <Route path="/cart" component={ Cart } />
                </Switch>
            </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
