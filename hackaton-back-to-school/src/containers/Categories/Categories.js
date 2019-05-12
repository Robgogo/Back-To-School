import React, { Component } from 'react';

import Category from '../../components/Category/Category';

import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Categories extends Component {
<<<<<<< HEAD
   
    render () {
        return (
            <div>              
                 <Category/>       
=======
    


    render () {
        return (
            <div>
                
>>>>>>> 7bd8f89cb01f218d841be574b30da970044c1e21
            </div>
        );
    }
}

export default withErrorHandler(Categories, axios);