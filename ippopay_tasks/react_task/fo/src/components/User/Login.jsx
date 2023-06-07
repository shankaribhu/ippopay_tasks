import React from 'react'

const Index = (props) => {
    const { children } = props
    return (
        <div className="auth-page" style={{ backgroundColor: 'ActiveBorder', marginTop: '150px' }}>
            <div className="login-bg login-new">{children}</div>
            <div className="footer-container pt-5">
                <div className="container"></div>
            </div>
        </div>
    )

}

export default Index