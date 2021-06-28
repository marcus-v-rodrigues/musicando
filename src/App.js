//Main project file 
//What is here is what is built

import { BrowserRouter, Route, Switch } from 'react-router-dom' //React library to have multiple pages

import Layout from './components/Layout' //General component with Navbar and Footer

import './styles/App.css' //import fonts

//Pages
import Main from './pages/Main'
import Login from './pages/Login'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Category from './pages/Category'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ Main } />
                    <Route path="/login" component={ Login } />
                    <Route path="/cart" component={ Cart } />
                    <Route path="/product/:id" component={ ProductDetails } />
                    
                    <Route path="/accessory" render={() => (<Category category={'Acessórios'} />)} />
                    <Route path="/audio" render={() => (<Category category={'Áudio'} />)} />
                    <Route path="/string" render={() => (<Category category={'Cordas'} />)} />
                    <Route path="/percussion" render={() => (<Category category={'Percussão'} />)} />
                    <Route path="/keyboard" render={() => (<Category category={'Teclas'} />)} />
                    <Route path="/wind" render={() => (<Category category={'Sopro'} />)} />
                    <Route path="/piano" render={() => (<Category category={'Piano'} />)} />
                </Switch>
            </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
