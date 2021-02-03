
import './App.css';
import {BrowserRouter as BroRou, Switch, Route} from 'react-router-dom';
import Categories from './Components/Categories/Categories';
import NavBar from './Components/NavBar/NavBar'
function App() {
  
  return ( 
    <div className="App">
      <NavBar/>
      <BroRou>
      <Switch>  
        <Route path="/:categoryId" component={Categories}/>
         <Route path="/" exact component={Categories}/>  
     </Switch>
     </BroRou>
      </div>
  )
}

export default App;