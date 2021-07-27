//Main project file 
//What is here is what is built

import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom' //React library to have multiple pages

import Layout from './components/Layout' //General component with Navbar and Footer

import './styles/App.css' //import fonts

//Pages
import Main from './pages/Main'
import Login from './pages/Login'
import Register from './pages/Login/Register'
import Cart from './pages/Cart'
import ProductDetails from './pages/ProductDetails'
import Category from './pages/Category'
import Admin from './pages/Admin'
import Products from './pages/Admin/subpages/Products'
import Users from './pages/Admin/subpages/Users'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ Main } />
                    <Route path="/login" render={routeProps => (<Login {...routeProps} />)}/>  
                    <Route path="/register" render={routeProps => (<Register {...routeProps} />)}/>                    
                    <Route path="/cart/:id?" component={ Cart } />
                    <Route exact path="/admin" component={ Admin }/>
                    <Route path="/admin/products" component={ Products }/>
                    <Route path="/admin/users" component={ Users }/>
                    <Route path="/accessory" render={() => (<Category category={'Acessórios'} />)} />
                    <Route path="/audio" render={() => (<Category category={'Áudio'} />)} />
                    <Route path="/string" render={() => (<Category category={'Cordas'} />)} />
                    <Route path="/percussion" render={() => (<Category category={'Percussão'} />)} />
                    <Route path="/keyboard" render={() => (<Category category={'Teclas'} />)} />
                    <Route path="/wind" render={() => (<Category category={'Sopro'} />)} />
                    <Route path="/piano" render={() => (<Category category={'Piano'} />)} />
                    <Route exact path="/product/:id" component={ ProductDetails }/>
                </Switch>
            </Layout>
        </BrowserRouter>
    </>
  )
}


export default App
