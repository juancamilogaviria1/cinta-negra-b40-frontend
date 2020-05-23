import React, {useState} from 'react';
import {
    Button,
     Form, 
     FormGroup, 
     Label, 
     Input,
    } from 'reactstrap';

    const Signup = () => {

        const [firstName, setFirstName] =  useState('');
        const [lastName, setlastName] =  useState('');
        const [email, setemail] =  useState('');
        const [password, setpassword] =  useState('');

        const handleInput = (e) => {
            
            switch (e.target.name) {
                case "inputFirstName":
                    setFirstName(e.target.value)
                    break;
                case "inputLastName":
                    setlastName(e.target.value)
                    break;
                case "inputemail":
                    setemail(e.target.value)
                    break;
                case "inputpassword":
                    setpassword(e.target.value)
                    break;
                default:
                    break;
            }
        }

        const handleSubmit = (e) =>{
            e.preventDefault();
        }

       return (
           <React.Fragment>
              <h1 className="mb-4">Signup</h1>
                <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label>First Name</Label>
                                <Input 
                                type="text"
                                name="firstName" 
                                id="inputFirstName" 
                                placeholder="type your first name"
                                value={firstName}
                                onChange={handleInput}  />
                            </FormGroup>
                            <FormGroup>
                                <Label>Last Name</Label>
                                <Input 
                                type="text" 
                                name="lastName" 
                                id="inputLastname" 
                                placeholder="type your last name"
                                value={lastName}
                                onChange={handleInput}  />
                            </FormGroup>
                            <FormGroup>
                                <Label>Email</Label>
                                <Input 
                                type="email" 
                                name="email" 
                                id="exampleEmail" 
                                placeholder="type your email"
                                value={email}
                                onChange={handleInput}  />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input 
                                type="password" 
                                name="password" 
                                id="examplePassword" 
                                placeholder="type your password here"
                                value={password}
                                onChange={handleInput}  />
                            </FormGroup>
                            <Button>Submit</Button>
                </Form>

           </React.Fragment>
       
 );
}   
 
export default Signup;