import React from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom'
import App from './App'
import Login from './pages/Login'
import Home from './pages/Home'
import Buttons from './pages/Ui/Buttons'
import Modals from './pages/Ui/Modle'
import Loading from './pages/Ui/Loading'
import Message from './pages/Ui/Message'
import Gallery from './pages/Ui/Gallery'
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
               <Route path="/admin/ui/modals" component={Modals}/>
               <Route path="/admin/ui/load" component={Loading}/>
               <Route path="/admin/ui/msg" component={Message}/>
               <Route path="/admin/ui/gallery" component={Gallery}/>
               <Route component={NoMacth}/>
               </Switch>
            </Admin>
          )}/>
        </App>
      </HashRouter>
    )
  }
}