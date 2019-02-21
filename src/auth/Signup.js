import React, { Component } from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div className="signup">
                <h1>Sign Up</h1>
                <Form>
                    <FormGroup>
                        <Label for="username">email</Label>
                        <Input id="email" type="text" name="username" placeholder="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input id="password" type="password" name="password" placeholder="password" />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}

export default Signup;
