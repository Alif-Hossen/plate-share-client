
import React, { use } from 'react';
import Static from './Static';
import SixProducts from './SixProducts';
import { NavLink } from 'react-router';
import OurMIssion from './OurMIssion';


const FeaturedFoods = ({ topProductsPromise }) => {
    const products = use(topProductsPromise)
    console.log(products);

    return (
        <div className="container mx-auto p-4">

            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Featured Foods</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    products.map(product => <SixProducts
                        key={product._id}
                        product={product}
                    ></SixProducts>)
                }
            </div>

            <div className="flex justify-center my-6">
                <NavLink to={'/availableFoods'}
                    
                    className="text-white font-semibold py-2 rounded-lg transition-all duration-300 transform translate-y-0 group-hover:-translate-y-1 px-8 my-8 
                   bg-gradient-to-r from-blue-500 to-purple-600 
                   hover:from-blue-600 hover:to-purple-700 
                   shadow-md hover:shadow-lg"
                >
                    Show All
                </NavLink>
            </div>

            <Static></Static>
            <OurMIssion></OurMIssion>
        </div>
    );
};

export default FeaturedFoods;