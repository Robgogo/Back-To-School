import React, { Component } from 'react';

import Category from '../../components/Category/Category';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Categories extends Component {
   
    render () {
        return (
            <div>              
                 <Category/>       
            </div>
        );
    }
}

export default withErrorHandler(Categories, axios);