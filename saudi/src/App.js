import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";

import './App.css';
import Login from './components/Home/Login';
import SellerPage from './components/Seller/SellerPage';
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/seller-page" component={SellerPage} />
        <Redirect from="/" to="/seller-page" />
      </Switch>
    </div>
  );
}

export default App;
