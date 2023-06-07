import React from 'react';
import Register from './register'
const HomePage = () => {
    return (
        <>
            <Register/>
        </>
    )
}

HomePage.getIntialProps = async ({req}) => {
    try {
        return true        
    } catch (error) {
        return error
    }
}

export default HomePage;