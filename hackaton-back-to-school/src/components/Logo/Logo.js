import React from 'react';

import islogo from '../../assets/images/is-logo.png';
import classes from './Logo.css';

const logo = (props) => (
    <div className={classes.Logo} style={{height: props.height}}>
        <img src={islogo} alt="InfoService" />
    </div>
);

export default logo;