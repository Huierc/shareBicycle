import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Home from './pages/Home'
import Buttons from './pages/Ui/Buttons'
import Admin from './admin';
import NoMacth from './pages/noMacth'

export default class Router extends React.Component{
  render(){
    return(
      <HashRouter>
        <App>
          <Route path="/login" component={Login}/>
          <Route path="/admin" render={() => (
            <Admin>
              <Switch>
               <Route path="/admin/ui/btn" component={Buttons}/>
               <Route path="/admin/home" component={Home}/>
               <Route component={NoMacth}/>
               </Switch>
            </Admin>
          )}/>
        </App>
      </HashRouter>
    )
  }
}