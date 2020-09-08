import React,{useState} from 'react';
import home_page from './home_page'

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App()
{
  return (
    <Router>
    <div> 
    <Switch>
    <Route path = "/" component = {home_page}></Route>
    

    </Switch>
    </div>


    </Router>
    

)
}


export default App;
