import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Layout from './components/Layout'
import Main from './pages/Main'
import Login from './pages/Login'

const App = () => {
  return (
    <>
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={ Main } />
                    <Route path="/login" component={ Login } />
                </Switch>
            </Layout>
        </BrowserRouter>
    </>
  )
}

export default App
