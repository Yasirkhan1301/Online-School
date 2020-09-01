import React, { useState } from 'react';

import { Navbar ,Nav,Button, Form, FormControl} from 'react-bootstrap';

function App()
{
  return (NavBar())
}
const NavBar = () => {
  return (<div>
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Online School</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Classes</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>  
</div>  
);
};

export default App;
