import Layout from './Layout/Layout';
import Home from './Container/Home/Home'
import Product from './Container/Product/Product';
import ProductDetail from './Container/ProductDetail/ProductDetail';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { Component } from 'react';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Login from './Container/Login/Login';
import SignUp from './Container/SignUp/SignUp';
import { AuthProvider } from './Context/AuthContext';
import Cart from './Container/Cart/Cart';
class App extends Component {

  render() {
    return (
      <Router>
        <AuthProvider>
          <ScrollToTop>
            <Layout>

              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/product" exact component={Product} />
                <Route path="/productDetail" component={ProductDetail} />
                <Route path="/login" component={Login} />
                <Route path="/SignUp" component={SignUp} />
                <Route part="/Cart" component={Cart} />
              </Switch>

            </Layout>
          </ScrollToTop>
        </AuthProvider>
      </Router>
    )
  }
}


export default App;
