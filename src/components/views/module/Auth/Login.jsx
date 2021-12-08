import React, { useRef, useState } from 'react'
import SimpleReactValidator from 'simple-react-validator';
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { toast } from 'react-toastify';

import { userActions } from '../../../redux/actions/user.actions'

import Api from "../../../helper/Api.js";
import { connect } from 'react-redux';
const api = new Api();

export const Login = (props) => {

    const [forceUpdate, setForceUpdate] = useState(false);
    const validator = useRef(new SimpleReactValidator({
        className: 'text-danger',
    }));

    const [headers, setHeaders] = useState({
        'Content-Type': 'application/json'
    });
    const [user, setUser] = useState({
        email: '',
        password: ''
    });


    const handleTextChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        setUser({ ...user, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validator.current.allValid()) {

            api.post("/api/login", {
                headers: headers,
                data: user
            }).then(res => {
                if (res.status === 200) {
                    props.login(res?.data);
                    props.history.push('/dashboard');
                } else {
                    toast.error(res.message);
                }
            })

        } else {
            validator.current.showMessages();
            setForceUpdate(!forceUpdate)
        }
    }

    return (
        <div className="vh-100 d-flex align-items-center">
            <Card style={{ width: '24rem' }} className="mx-auto">
                <Card.Body>
                    <Card.Title className="text-center">Login</Card.Title>
                    <Alert variant="info">
                        <b> Use given credentials... </b>  <br />
                        <b> Email: </b> eve.holt@reqres.in <br />
                        <b> Password: </b> cityslicka <br />
                    </Alert>
                    <Form onSubmit={handleSubmit} className="mt-3" >
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                placeholder="name@example.com"
                                value={user.email}
                                onChange={handleTextChange}
                                onBlur={() => validator.current.showMessageFor('email')}
                            />
                            {validator.current.message('email', user.email, 'required|email')}
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={user.password}
                                onChange={handleTextChange}
                                onBlur={() => validator.current.showMessageFor('password')}
                            />
                            {validator.current.message('password', user.password, 'required')}
                        </Form.Group>
                        <Button variant="primary" type="submit" className="d-flex mx-auto">
                            Login
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    login: userActions.login
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)