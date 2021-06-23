import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';

const links = [
    {
        to: '/',
        text: 'Home',
    },
    {
        to: '/',
        text: 'Terms and Conditions',
    },
    {
        to: '/',
        text: 'Privacy Policy',
    },
    {
        to: '/',
        text: 'Collection Statement',
    },
    {
        to: '/',
        text: 'Help',
    },
    {
        to: '/',
        text: 'Manage Account',
    },
];

function Footer(props) {
    return (
        <footer className="footer">
            <div>
                {links.map((link, index) => (
                    <Fragment key={index}>
                        <Link to={link.to} className="footerLink">
                            {link.text}
                        </Link>
                        {index < links.length - 1 && <span style={{ color: '#ffffff' }}>|</span>}
                    </Fragment>
                ))}
                <div>Copyright © 2016 DEMO Streaming. All Rights Reserved.</div>

                <img className="socialIcon" src={require('../../assets/social/facebook-white.svg')} />
                <img className="socialIcon" src={require('../../assets/social/instagram-white.svg')} />
                <img className="socialIcon" src={require('../../assets/social/twitter-white.svg')} />
                <span className="storeIcons">
                    <img className="storeIcon" src={require('../../assets/store/app-store.svg')} />
                    <img className="storeIcon" src={require('../../assets/store/play-store.svg')} />
                    <img className="storeIcon" src={require('../../assets/store/windows-store.svg')} />
                </span>
            </div>
        </footer>
    );
}

export default Footer;
