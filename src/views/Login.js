import React from 'react';
import {
     Button,
      Form, 
      FormGroup, 
      Label, 
      Input,
     } from 'reactstrap';

     const Login = () => {
        return (
          <React.Fragment>  
                <h1>Login</h1>
            <Form>
                    <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="type you email" />
                    </FormGroup>
                    <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="type your password here" />
                    </FormGroup>
                    <Button>Submit</Button>
            </Form>
         </React.Fragment> 
  );
}
 
export default Login;
