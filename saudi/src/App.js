import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";

import './App.css';
import SellerPage from './components/Seller/SellerPage';
import PrivateRoute from "./components/PrivateRoute";
import HomePage from './components/HomePage';
import ItemCard from './components/ItemCard';
// import NavBar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="App">
        {/* <NavBar /> */}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <PrivateRoute path="/seller-page" component={SellerPage} />
          <Route path="/item/:id" component={ItemCard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
