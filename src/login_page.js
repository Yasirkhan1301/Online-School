import React from 'react';
import Header from "./Components/header"

import footer from "./Components/footer"


function login_page()
{
    return (
        <div>
        {Header()}
        {login_form()}
        {footer()}
        </div>
    );
}


function login_form()
{
    return (
        <div className= "form-margin text-center">
        <form class="form-signin">
      {/* <img class="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> */}
      <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus></input>
      <label for="inputPassword" class="sr-only">Password</label>
      <input type="password" id="inputPassword" class="form-control" placeholder="Password" required></input>
      <button class="btn btn-lg  btn-block form-button" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
    </form>

        </div>
 

    );
}

export default login_page;
