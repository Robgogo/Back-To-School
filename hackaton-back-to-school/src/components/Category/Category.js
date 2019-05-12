import React,{Component} from 'react';

import classes from './Category.css';
import pop from '../../assets/images/is-logo.png';

class Category extends Component{
    render(){
        return(
            <div className={classes.Category}>
            
                    <div className="col-md-6 col-lg-6">
                    <h2 className="header">Population</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={pop} alt="Population"/>
                                </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <p>Information about Population of Ethiopia </p>
                                </div>
                                <div className="card-action">
                                    <a href="/">Population</a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
          
        );
    }
}

export default Category;