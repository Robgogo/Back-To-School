import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" exact>Home</NavigationItem>
        <NavigationItem link="/categories">Categories</NavigationItem>
        <NavigationItem link="/about" exact>About</NavigationItem>
        <NavigationItem link="/contacts">Contacts</NavigationItem>
    </ul>
);

export default navigationItems;