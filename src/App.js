import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { useStateValue } from './StateProvider';

import Checkout from "./Checkout"
import Home from "./Home"
import Header from "./Header"
import Login from "./Login"
import './App.css';
import {auth} from "./firebase"

function App() {

  const [{user}, dispatch] = useStateValue();
  // peace of code which runs based on a given condition
  useEffect(()=>{

       const unsubscribe =  auth.onAuthStateChanged((authUser)=>{
          if(authUser){
            // the user is logged in  
            dispatch({
              type : 'SET_USER',
              user : authUser
            })
          }else{
            // user is logged out
            dispatch({
              type : 'SET_USER',
              user : null
            })
          }
        })
       return () =>{
        // any cleanup operation gore here
        unsubscribe()
       }
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path= "/checkout" >
             <Header />
              <Checkout />
          </Route>
          <Route path= "/login" >
            <Login />
          </Route>
          <Route path= "/" >
              <Header />
              <Home />
          </Route>
        </Switch> 
    </div>
    </Router>    
  );
}

export default App;
