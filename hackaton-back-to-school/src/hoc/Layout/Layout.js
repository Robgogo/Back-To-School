import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import classes from './Layout.css';
import classtool from '../../components/Navigation/Toolbar/Toolbar.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }

    render () {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
    <footer className={classtool.Footer}>
       
       <div className="footer-copyright">
         <div className="container">
         Information system by CECS group         
         </div>
       </div>
     </footer>
                </main>
               
        
            </Aux>
        )
    }
}

export default Layout;