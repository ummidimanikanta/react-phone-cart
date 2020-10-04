import React from 'react';
import './App.css';
import {Switch ,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart  from './components/Cart';
import Details from './components/Details';
import Default from './components/Default';
import Model from './components/Model';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={ProductList}></Route>
        <Route path="/details" component={Details}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route component={Default}></Route>
      </Switch>

      <Model/>
     
    </React.Fragment>
  );
}

export default App;
