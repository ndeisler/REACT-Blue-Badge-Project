import React, {Component} from "react";
import kettleBell from "../assets/images/kettlebell2.png";


import {
    Navbar, 
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    Button
} from "reactstrap";

class SiteBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
            <Navbar className="navbar" light expand="md">
                <NavbarBrand href="/" className="randomWorkout"><img className="kettle"src={kettleBell} alt="kettlebell"/></NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button className={this.props.token !== undefined ? "buttonDisplay" : "buttonHidden"} onClick={() => this.props.removeToken()}>Logout</Button> 
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
        );
    }
}
export default SiteBar;