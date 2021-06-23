import React from 'react';
import { Link } from 'react-router-dom';

import '../styles.css';
import placeholder from '../../assets/placeholder.png';

function Tile(props) {
    return (
        <div className="tile">
            <Link to={props.to}>
                <div className="tileImageContainer">
                    <img src={placeholder} className="tilePlaceholderImage" />
                    <img src={props.image} className="tileImage" />
                    <div className="overlayText">{props.overlayText}</div>
                </div>
                <p>{props.title}</p>
            </Link>
        </div>
    );
}

export default Tile;
