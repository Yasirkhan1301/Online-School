
import React from 'react';
import Header from "./Components/header"
import footer from "./Components/footer"

function register()
{
    return (
        <div>
        {Header()}
        {register_form()}
        {footer()}
        </div>
    );
}


function register_form()
{
  return (
     <div className= "form-margin text-center">
         <form class="form-signin">
       <h1 class="h3 mb-3 font-weight-normal">Please Register</h1>
       <label for="User Name" class="sr-only">User Name</label>
       <input type="text" id="username" class="form-control" placeholder="User Name" required autofocus></input>
       <label for="inputEmail" class="sr-only">Email address</label>
       <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
       <label for="User Name" class="sr-only">User Name</label>
       <input type="password" id="password" class="form-control" placeholder="Password" required autofocus></input>
       <label for="inputPassword" class="sr-only">Password</label>
       <button class="btn btn-lg  btn-block form-button" type="submit">Register</button>
       <p class="mt-5 mb-3 text-muted">&copy; 2020-2021</p>
     </form>

         </div>

  )
}
 export default register;
