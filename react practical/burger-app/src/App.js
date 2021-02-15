import { Component } from "react";
import { Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBulider";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
   <Layout>
          <Switch>
            <Route path="/" exact component={BurgerBuilder} />
            <Route path="/check-out" component={Checkout} />
            <Route path="/orders" component={Orders} />
          </Switch>
        </Layout>
      </div>
    )
  };
}

export default App;
