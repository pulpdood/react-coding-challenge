import React from 'react';

import '../styles.css';

function SubHeader(props) {
    const programType = props.programType;

    return (
        <header className="headerContent subHeader">
            <div className="programType">{programType}</div>
        </header>
    );
}

export default SubHeader;
