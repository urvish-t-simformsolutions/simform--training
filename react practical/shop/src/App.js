import Layout from './Layout/Layout';
import Home from './Container/Home/Home'
import Product from './Container/Product/Product';
import ProductDetail from './Container/ProductDetail/ProductDetail';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { Component, lazy, Suspense } from 'react';
import ScrollToTop from './Components/fixPageComp/ScrollToTop/ScrollToTop';
import Login from './Container/Login/Login';
import SignUp from './Container/SignUp/SignUp';
import { AuthProvider } from './Context/AuthContext';
//import Cart from './Container/Cart/Cart';
import Checkout from './Container/Checkout/Checkout';
import Profile from './Container/Profile/Profile';
import PrivateRoutes from './Context/PrivateRoute';
import ForgetPass from './Container/forgetPass';

const Cart = lazy(() => import('./Container/Cart/Cart'))
class App extends Component {

  render() {
    return (
      <Suspense fallback={<h1>Loading route.....</h1>}>
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
                  <PrivateRoutes path="/profile" component={Profile} />
                  <Route path="/checkout" component={Checkout} />
                  <Route path="/forgetPass" component={ForgetPass} />
                </Switch>

              </Layout>
            </ScrollToTop>
          </AuthProvider>
        </Router>
      </Suspense>
    )
  }
}


export default App;
