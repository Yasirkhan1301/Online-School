import React, { Component } from 'react';
import home_page from './home_page'
import about_page from './about_page'
import course_page from './courses_page'
import contact_page from './contact_page'
import login from './login_page'
import register from './register_page'



import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import blog_page from './blogs_page';

// function routes()
// {
//   return (
//     <Router>
//     <div> 
//     <Switch>
//     <Route path = "/" exact component = {home_page}></Route>
//     <Route path = "/about_page" component = {about_page}></Route>
//     <Route path = "/course_page" component = {course_page}></Route>
//     <Route path = "/contact_page" component = {contact_page}></Route>
//     <Route path = "/blog_page" component = {blog_page}></Route>
//     <Route path = "/login_page" component = {login}></Route>
//     <Route path = "/register_page" component = {register}></Route>

//     </Switch>
//     </div>
//     </Router>
    

// )
// }

class App extends Component {
  state = {
      data: null
    };
  
    componentDidMount() {
        // Call our fetch function below once the component mounts
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
  
    render() {
      return (
      // <div>
        
      //   // <div className="App">
      //   //   <header className="App-header">
      //   //     <h1 className="App-title">Welcome to React</h1>
      //   //   </header>
      //   //   // Render the newly fetched data inside of this.state.data 
      //   //   <p className="App-intro">{this.state.data}</p>

      //   </div>
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
        
      );
    }
  }
  

export default App;
