import logo from './logo.svg';
import './App.css';
import Header from './header'
import Cart from './cart';
import Home from './home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/cart"> 

            <Cart />
          </Route>
        <Route path="/">
        <Home/>
        </Route>
        </Switch>
      </div>
    </Router>
      );
}

export default App;
