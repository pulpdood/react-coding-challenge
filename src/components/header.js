import React from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

function Header() {
    return (
        <header className="headerContent header">
            <Link to="/">
                <div className="headerLogo">DEMO STREAMING</div>
            </Link>
            <div className="headerRightActions">
                <div>Login</div>
                <button className="headerTrialButton">Start Your Free Trial</button>
            </div>
        </header>
    );
}

export default Header;
