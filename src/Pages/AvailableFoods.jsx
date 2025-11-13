import React from 'react';
import AvailableFood from './AvailableFood';

const API_URL = "https://plate-share-server.onrender.com";

const availableProductsPromise = fetch(`${API_URL}/products`).then( res => res.json());

const AvailableFoods = () => {
    return (
        <div>
            <AvailableFood availableProductsPromise=    {availableProductsPromise}>
            </AvailableFood>
        </div>
    );
};

export default AvailableFoods;