

import React, {Component} from "react";
import {Form, FormGroup, Label, Input} from "reactstrap";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div className="login">
            
                <h1>Login</h1>
                <Form>
                    <FormGroup>
                        <Label for="email">email</Label>
                        <Input id="e-mail" type="email" name="email" placeholder="email"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="password" type="password" name="password" placeholder="password"/>
                    </FormGroup>
                </Form>
                
            </div>
        )
    }
}

export default Login;