import React, { Component } from 'react';

import Aux from '../../hoc/Aux/Aux';

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import Report from '../../components/Report/Report';



class Home extends Component {
   
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount () {
        console.log(this.props);
        axios.get( 'https://react-my-burger.firebaseio.com/ingredients.json' )
            .then( response => {
                this.setState( { ingredients: response.data } );
            } )
            .catch( error => {
                this.setState( { error: true } );
            } );
    }

    render () {
        return (
            <Aux>
                <Report/>
            </Aux>
        );
    }
}

export default withErrorHandler( Home, axios );