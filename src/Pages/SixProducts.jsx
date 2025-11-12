
import React from 'react';

const SixProducts = ({ product }) => {
    const { food_name, food_image, quantity, pickup_location, expire_date } = product;

    return (
        <div>
            <div className="h-full bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer group flex flex-col">
                <div className="relative h-48 flex-shrink-0">
                    <img
                        className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-90"
                        src={food_image}
                        alt={food_name}
                    />
                    <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg transform translate-x-0 group-hover:scale-110 transition-transform duration-300">
                        Expires: {expire_date}
                    </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 truncate group-hover:text-red-600 transition-colors duration-300">
                        {food_name}
                    </h3>

                    <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                        <span className="font-medium">
                            Quantity: <span className="text-gray-800 font-bold">{quantity}</span>
                        </span>
                        <span className="bg-green-100 text-green-700 font-semibold px-2 py-0.5 rounded-full text-xs transform group-hover:scale-105 transition-transform duration-300">
                            Available
                        </span>
                    </div>

                    <p className="text-sm text-gray-500 flex items-center mb-4">
                        <svg className="w-4 h-4 mr-2 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        {pickup_location}
                    </p>


                    <button
                        className="w-full text-white font-semibold py-2 rounded-lg transition-all duration-300 transform translate-y-0 group-hover:-translate-y-1 mt-auto 
                    
                    bg-gradient-to-r from-blue-500 to-purple-600 
                    hover:from-blue-600 hover:to-purple-700 
                    shadow-md hover:shadow-lg"
                    >
                        View Details
                    </button>
                </div>

            </div>
            
        </div>
    );
};

export default SixProducts;