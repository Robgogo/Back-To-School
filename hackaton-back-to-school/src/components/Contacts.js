import React, { Component } from 'react';
import Aux from '../hoc/Aux/Aux';
import classes from './Contacts.css';


class Contacts extends Component {
    render() {
        return (
            <Aux>
                <div className={classes.Contacts}>
                <div className="row">
                <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                         <img className="activator"  /> 
                    </div>
                   
                    <div className="card-reveal">
                        <h1>
                        <span className="card-title grey-text text-darken-4">Samuel Negash<i className="material-icons right"></i></span>
                        </h1>
                        <h2>Front End Developer</h2>
                        <p><strong>Contact: Phone- +251923181210 email:smlnegash@gmail.com</strong></p>
                    </div>
                    </div>
                
                <div className={classes.Contacts}>
                    <div className="card-image waves-effect waves-block waves-light">
                         <img className="activator"  /> 
                    </div>
                   
                    <div className="card-reveal">
                        <h1>
                        <span className="card-title grey-text text-darken-4"> Robera Worku<i className="material-icons right"></i></span>
                        </h1>
                        <h2>Back End Developer</h2>
                        <p><strong>Contact: Phone- +251911572482 email:robgogoworku@gmail.com</strong></p>
                    </div>
                    </div>
                    <div className="card">
                    <div className="card-image waves-effect waves-block waves-light">
                         <img className="activator"  /> 
                    </div>
                   
                    <div className="card-reveal">
                        <h1>
                        <span className="card-title grey-text text-darken-4">Surafel Argaw<i className="material-icons right"></i></span>
                        </h1>
                        <h2>Android Developer</h2>
                        <p><strong>Contact: Phone- +251916362743 email:argawsurafel7@gmail.com</strong></p>
                    </div>
                    </div>
                
                <div className={classes.Contacts}>
                    <div className="card-image waves-effect waves-block waves-light">
                         <img className="activator"  /> 
                    </div>
                   
                    <div className="card-reveal">
                        <h1>
                        <span className="card-title grey-text text-darken-4"> Lwam Berhane<i className="material-icons right"></i></span>
                        </h1>
                        <h2>Data Base Designer</h2>
                        <p><strong>Contact: Phone- +251911572482 email:berhanelwam@gmail.com</strong></p>
                    </div>
                    </div>
                    <div className={classes.Contacts}>
                    <div className="card-image waves-effect waves-block waves-light">
                         <img className="activator"  /> 
                    </div>
                   
                    <div className="card-reveal">
                        <h1>
                        <span className="card-title grey-text text-darken-4"> Tadele Ware<i className="material-icons right"></i></span>
                        </h1>
                        <h2>Android UI Designer</h2>
                        <p><strong>Contact: Phone- +2519254678 email:tadele@gmail.com</strong></p>
                    </div>
                    </div>
                
                </div>
                
                </div>

            </Aux>
        );
    }
}
export default Contacts;