//import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './redux/store'
import CakeContainer from './Components/cakeContainer';
import HooksCakeContainer from './Components/hooksCakeContainer';
import IceCreamContainer from './Components/iceCreamContainer';
import NewCakeContainer from './Components/NewCakeContainer';
import ItemContainer from './Components/ItemContainer';

function App() {
  return (
    <Provider  store={store}>
    <div className="App">
      <ItemContainer cake />
      <ItemContainer/>
      <NewCakeContainer/>
      <HooksCakeContainer/>
      <CakeContainer/>
      <IceCreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
