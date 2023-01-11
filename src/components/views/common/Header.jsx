import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import FeatherIcon from 'feather-icons-react';

import { userActions } from '../../../redux/actions/user.actions'
import { Logo } from "../../../helper/importHelper/image"
import { connect } from "react-redux";

export const Header = (props) => {

    const logout = () => {
        props.logout();
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/dashboard">
                        <img
                            alt=""
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        React Js
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown title={<FeatherIcon icon="user" />} id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#">Profile</NavDropdown.Item>
                                <NavDropdown.Item href="#">Change Password</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#" onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = {
    logout: userActions.logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)