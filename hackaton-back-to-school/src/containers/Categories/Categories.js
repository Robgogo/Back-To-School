import React, { Component } from 'react';

import Category from '../../components/Category/Category';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Categories extends Component {
    state = {
        categories: [],
        loading: true
    }

    componentDidMount() {
        axios.get('/categories.json')
            .then(res => {
                const fetchedCat = [];
                for (let key in res.data) {
                    fetchedCat.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({loading: false, categories: fetchedCat});
            })
            .catch(err => {
                this.setState({loading: false});
            });
    }

    render () {
        return (
            <div>
                {this.state.categories.map(order => (
                    <Category 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price} />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Categories, axios);