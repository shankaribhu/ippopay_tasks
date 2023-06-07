import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
import { Button } from 'react-bootstrap';
import { Col, Row } from "reactstrap";
import DashboardCmp from '../../src/components/User/dashboard'

const Dashboard = () => {
    const [user, setUser] = useState(null)

    const router = useRouter();

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("user_data")));
    }, [user]);

    console.log("router", router)
    const name = user?user?.name:'';
    const bio = user?user?.bio:'';

    const handleLogout = () => {
        localStorage.removeItem('user_data');
        window.location.replace('/login')
    }

    return(
        <DashboardCmp>
            <>
                <header>   
                    <Row className="row g-0" >
                        <Col lg="10" md="10" >
                            <img draggable="false" src="https://www.ippopay.com/_next/static/media/logo_ippopay_logo.68c65e9b.svg" alt="" />
                        </Col>
                        <Col lg="2" md="2" >
                            <div style={{padding: '20px'}} className="position-absolute top-0 end-0">
                                <Button variant="primary" onClick={handleLogout}>Logout</Button>
                            </div>
                        </Col>
                    </Row>
                </header>
                <div>
                    <center style={{marginTop: '5em'}}>
                        <h1>{name}</h1>
                        <h3>{user?user?.email:''}</h3>
                        <h3>{user?user?.mobile_no:''}</h3>
                        <h3>{bio}</h3>
                    </center>  
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <div className="container mt-5">
                        <Row className="row g-0" >
                            <Col lg="6" md="6" >
                                <img width="85%" height="100%" src="https://www.ippostack.com/images/banner.png" alt="" />
                            </Col>
                            <Col lg="6" md="6" >
                            <div className="col-xs-12 col-sm-6 col-md-6 flexInner">
                                        <div style={{ width: '100%', fontWeight: '300', fontSize: '20px', color: '#606060', marginBottom: '30px', float: 'left'}}>Making Banking Simpler for you</div>
                                        <div style={{ width: '100%', fontWeight: '300', fontSize: '44px', color: '#303030', marginBottom: '10px', float: 'left'}}>Banking API for</div>
                                        <div style={{ width: '100%', fontWeight: '700', fontSize: '44px', color: '#303030', marginBottom: '60px', float: 'left'}}>Fund Transfer, UPI, Payouts and Virtual Account.</div>
                                    </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        </DashboardCmp>        
    )
}

export default Dashboard;