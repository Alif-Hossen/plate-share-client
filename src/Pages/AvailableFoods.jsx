import React from 'react';
import AvailableFood from './AvailableFood';

const availableProductsPromise = fetch('http://localhost:3000/products').then( res => res.json());

const AvailableFoods = () => {
    return (
        <div>
            <AvailableFood availableProductsPromise=    {availableProductsPromise}>
            </AvailableFood>
        </div>
    );
};

export default AvailableFoods;