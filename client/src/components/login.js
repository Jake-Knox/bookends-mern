import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';

// using arrow functioms for componets going forward
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // Add logic to handle login (e.g., send credentials to server)
        console.log('Username:', username);
        console.log('Password:', password);
    };

    // This following section will display the table with the records of individuals.
    return (
        <div className="login-form">
            <h3>Login</h3>
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter your username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" onClick={handleLogin}>
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;
