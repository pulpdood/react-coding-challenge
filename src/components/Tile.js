import React from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';
import placeholder from '../../assets/placeholder.png';

function Tile(props) {
    return (
        <Link to={props.to}>
            <div className="tile">
                <img src={placeholder} className="tilePlaceholderImage" />
                <div className="overlayText">{props.overlayText}</div>
                <div className="tileImageContainer">
                    <img src={props.image} className="tileImage" />
                </div>
            </div>
            <p>{props.title}</p>
        </Link>
    );
}

export default Tile;
