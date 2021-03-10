import Layout from './Layout/Layout';
import Home from './Container/Home/Home'
import Product from './Container/Product/Product';
import ProductDetail from './Container/ProductDetail/ProductDetail';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Component } from 'react';
import ScrollToTop from './Components/fixPageComp/ScrollToTop/ScrollToTop';
import Login from './Container/Login/Login';
import SignUp from './Container/SignUp/SignUp';
import { AuthProvider } from './Context/AuthContext';
import Cart from './Container/Cart/Cart';
import Checkout from './Container/Checkout/Checkout';
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
                <Route path="/Cart" component={Cart} />
                <Route path="/checkout" component={Checkout} />
              </Switch>

            </Layout>
          </ScrollToTop>
        </AuthProvider>
      </Router>
    )
  }
}


export default App;
