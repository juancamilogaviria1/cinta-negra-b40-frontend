import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import axios from 'axios';
import {
     Button,
      Form, 
      FormGroup, 
      Label, 
      Input,
     } from 'reactstrap';

     const Login = () => {
        const { isAuth ,  setTokenAndLogin } = useContext(AuthContext);
        const [email, setEmail] =  useState('');
        const [password, setPassword] =  useState('');

        if (isAuth) return ( <Redirect to="/" /> )

        const handleSubmit = async (e) =>{
            e.preventDefault();
            const jsonSend = { email, password }
            try {
                const res = await axios.post('https://bneuraldev.herokuapp.com/api/v1/users/login', jsonSend);
                setTokenAndLogin(res.data.token)
                alert('¡Successful Login!')
            } catch (error) {
                alert('Error')                
            }

        }; 

        return (
          <React.Fragment>  
                <h1 className="mb-4">Login</h1>
            <Form onSubmit={handleSubmit}>
                    <FormGroup>
                    <Label>Email</Label>
                    <Input 
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="exampleEmail" 
                    placeholder="type your email" />
                    </FormGroup>
                    <FormGroup>
                    <Label>Password</Label>
                    <Input 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="examplePassword" 
                    placeholder="type your password here" />
                    </FormGroup>
                    <Button>Submit</Button>
            </Form>
         </React.Fragment> 
  );
}
 
export default Login;
