import React from 'react'
import './LogIn.css';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import McpQuis from './McpQuis';
function LogIn() {

    return (
        <div>
           

<Container>
<div class="login-box">
  <h2>Login</h2>

  <form>
    <div class="user-box">
      <input type="text" name="" required="" />
      <label>Username</label>
    </div>
    <div class="user-box">
      <input type="password" name="" required="" />
      <label>Password</label>
    </div>
    <Link to = '/McpQuis'>
    <Button  >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
   </Button></Link>
 

  </form>

</div>


</Container>

        </div>
    )
}

export default LogIn;


