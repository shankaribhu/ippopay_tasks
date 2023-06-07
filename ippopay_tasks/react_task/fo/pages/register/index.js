import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import { SIGN_USER } from '../../src/common/api/api_path'
import 'bootstrap/dist/css/bootstrap.css';
import Index from '../../src/components/User/Login';

const Register = () => {
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ mobile, setMobile ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ status, setStatus ] = useState("A");
    const [ description, setDescription ] = useState("Hi, Welcome To My Profile")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            let values = {
                name: name,
                email: email,
                mobile_no: mobile,
                password: password,
                status: status,
                bio: description
            }
            const { data } = await axios.post(SIGN_USER, values);
            if(data.status == 200) {
                window.location.replace('/login')
            }
            else{
                alert("Something Went Wrong, Please try again After Sometime!.")
                window.location.replace('/login')
            }
        } catch (error) {
            console.log("error in login page", error)
            alert("Something Went Wrong, Please try again After Sometime!.")
            window.location.replace('/register')
        }
    }

    const handleLogin = () => {
        window.location.replace('/login')
    }

    return (
        <Index>
            <center>
                <>
                   <div style={{display:'block', width:700, padding:30}}>
                   <img draggable="false" className="mx-auto h-30 w-36 object-contain" src="https://www.ippopay.com/_next/static/media/logo_ippopay_logo.68c65e9b.svg" alt="" />
                   <br></br>
                    <br></br>
                    <br></br>
                   <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Enter Your Name</Form.Label>
                        <Form.Control label="Name"
                        type='text'
                        placeholder='Enter Your Name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        size='small'
                        fullwidth>
                        </Form.Control><br></br>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your Email</Form.Label>
                        <Form.Control label='Email'
                        type='email'
                        placeholder='Enter Your Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        size='small'
                        fullwidth>
                        </Form.Control><br></br>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your Mobile</Form.Label>
                        <Form.Control label='mobile'
                        type='text'
                        placeholder='Enter Your Mobile'
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                        size='small'
                        fullwidth>
                        </Form.Control><br></br>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter your Password</Form.Label>
                        <Form.Control label='Password'
                        type='password'
                        placeholder='Enter Your Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        size='small'
                        fullwidth>
                        </Form.Control><br></br>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter Profile Description</Form.Label>
                        <Form.Control label='text'
                        type='text'
                        placeholder='Enter Your Profile Description'
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        size='small'
                        fullwidth>
                        </Form.Control><br></br>
                    </Form.Group>
                    <div>
                        <span style={{marginRight: '10px'}}>
                            <Button variant="primary" onClick={handleLogin}>Login</Button>
                        </span>
                        <span>
                            <Button variant='primary' type='submit'> Submit </Button>
                        </span>
                    </div>
                   </Form>
                    </div> 
                </>
            </center>
        </Index>
    )
}

export default Register;