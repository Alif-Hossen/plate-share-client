
import React, { use } from 'react';
import AvailableFoodCard from './AvailableFoodCard';

const AvailableFood = ({availableProductsPromise}) => {
    const products = use(availableProductsPromise);
    
    if (!products || products.length === 0) {
        return (
            <div className="text-center py-16">
                <p className="text-xl text-gray-500">No available foods found right now.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-10 max-w-screen-xl">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    products.map(product => <AvailableFoodCard
                        key = {product._id}
                        product={product}
                    />)
                }
            </div>
        </div>
    );
};

export default AvailableFood;