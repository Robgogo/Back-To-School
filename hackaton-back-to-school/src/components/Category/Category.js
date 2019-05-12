import React from 'react';

import classes from './Category.css';


const category = ( props ) => {
    const categories = [];

    for ( let categoryName in props.ingredients ) {
        categories.push(
            {
                name: categoryName,
                amount: props.categories[categoryName]
            }
        );
    }

    const ingredientOutput = categories.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
                }}
            key={ig.name}>{ig.name} ({ig.amount})</span>;
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>USD {Number.parseFloat( props.price ).toFixed( 2 )}</strong></p>
        </div>
    );
};

export default category;