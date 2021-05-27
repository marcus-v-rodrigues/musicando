import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
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
