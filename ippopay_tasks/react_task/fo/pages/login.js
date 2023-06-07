import React, { useState } from "react";
import axios from 'axios';
import { Form, Button } from 'react-bootstrap'
import { LOGIN_USER } from '../src/common/api/api_path'
import 'bootstrap/dist/css/bootstrap.css';
import Index from '../src/components/User/Login'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            let values = {
                email: email,
                password: password
            }
            console.log("Email values", values)
            const { data } = await axios.post(LOGIN_USER, values)
            console.log("Data values", data.data)
            if (data.status == 200) {
                localStorage.setItem('user_data', JSON.stringify(data?.data));
                window.location.replace(`/dashboard`)
            }
        } catch (error) {
            console.log("error in login page", error)
            if(error?.response?.data?.message) {
                alert(`${error?.response?.data?.message}`??"Invalid User")
                window.location.replace('/login')
            }
            else {
                alert("Invalid User")
                window.location.replace('/register')
            }
        }
    }

    const handleRegister = () => {
        window.location.replace('/register')
    }

    return (
        <Index>
        <center>
        <>
            <div style={{
                display: 'block',
                width: 700,
                padding: 30
            }}>
                <img draggable="false" className="mx-auto h-30 w-36 object-contain" src="https://www.ippopay.com/_next/static/media/logo_ippopay_logo.68c65e9b.svg" alt="" />
                <br></br>
                <br></br>
                <br></br>
                <Form onSubmit={handleLogin}>
                <Form.Group>
                <Form.Label>Enter your Email:</Form.Label>
                <Form.Control label="Email"
                        type="email"
                        placeholder="Enter Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        size="small"
                        fullWidth/>
                </Form.Group><br></br>
                <Form.Group>
                    <Form.Label>Enter your full name:</Form.Label>
                    <Form.Control label="Password" 
                        type="password"
                        placeholder="Enter Your Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        size="small"
                        fullWidth/>
                </Form.Group><br></br>
                <div>
                    <span style={{marginRight: '10px'}}>
                        <Button variant="primary" onClick={handleRegister}>SignUp</Button>
                    </span>
                    <span>
                        <Button variant="primary" type="submit"> Submit </Button>
                    </span>
                </div>
                </Form>
            </div>
        </>
        </center>
        </Index>
    )
}

export default Login