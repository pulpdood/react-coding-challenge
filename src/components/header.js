import React from 'react';

import '../styles.css';

function Header(props) {
    return (
        <header className="headerContent header">
            <div className="headerLogo">DEMO SCREENING</div>
            <div className="headerRightActions">
                <div>Login</div>
                <button className="headerTrialButton">Start Your Free Trial</button>
            </div>
        </header>
    );
}

export default Header;
