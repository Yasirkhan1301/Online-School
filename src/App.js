import React,{useState} from 'react';
import home_page from './home_page'
import about_page from './about_page'
import course_page from './courses_page'
import contact_page from './contact_page'
import login from './login_page'
import register from './register_page'



import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import blog_page from './blogs_page';

function App()
{
  return (
    <Router>
    <div> 
    <Switch>
    <Route path = "/" exact component = {home_page}></Route>
    <Route path = "/about_page" component = {about_page}></Route>
    <Route path = "/course_page" component = {course_page}></Route>
    <Route path = "/contact_page" component = {contact_page}></Route>
    <Route path = "/blog_page" component = {blog_page}></Route>
    <Route path = "/login_page" component = {login}></Route>
    <Route path = "/register_page" component = {register}></Route>







    </Switch>
    </div>


    </Router>
    

)
}


export default App;
