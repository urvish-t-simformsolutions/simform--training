import Layout from './Layout/Layout';
import Home from './Container/Home/Home'
import Product from './Container/Product/Product';
import ProductDetail from './Container/ProductDetail/ProductDetail';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { Component } from 'react';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Login from './Container/Login/Login';
class App extends Component {
  render() {

    return (
      <Router>
        <ScrollToTop>
          <Layout>

            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/product" exact component={Product} />
              <Route path="/productDetail" component={ProductDetail} />
              <Route path="/login" component={Login}/>
            </Switch>

          </Layout>
        </ScrollToTop>
      </Router>
    )
  }
}


export default App;
