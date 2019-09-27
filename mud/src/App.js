import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import GamePage from './Component/GamePage/GamePage';
import PrivateRoute from './helper/PrivateRoute';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <PrivateRoute path='/' component={GamePage} />
      </Switch>
    </div>
  );
}

export default App;
