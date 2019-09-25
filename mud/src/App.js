import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import Map from './Component/Map/Map';
import PrivateRoute from './helper/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <PrivateRoute path='/' component={Map} />
      </Switch>
    </div>
  );
}

export default App;
