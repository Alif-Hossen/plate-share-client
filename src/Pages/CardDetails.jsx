

import React, { useContext, useState, useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import FoodRequestModal from './FoodRequestModal';
import FoodRequestTable from './FoodRequestTable';

const CardDetails = () => {
    const loaderData = useLoaderData();
    const { id } = useParams();
    const { user } = useContext(AuthContext);

    const [food, setFood] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const foundFood = loaderData.find(singleFood => singleFood._id === id);
        if (foundFood) {
            setFood(foundFood);
        }
    }, [loaderData, id]);

    if (!food) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <p className="text-xl font-semibold text-gray-700">Food Item Not Found.</p>
            </div>
        );
    }

    const donatorEmail = food.donator?.email || food.donator_email;

    const isFoodOwner = user && user.email === donatorEmail;
    const isAvailable = food.food_status === 'Available';


    console.log('Current User Email:', user ? user.email : 'No User Logged In');
    console.log('Donator Email:', donatorEmail);
    console.log('Is Current User the Food Owner (isFoodOwner):', isFoodOwner);
    console.log('Food ID (for Table):', food._id);

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
                <div className="relative">
                    <img className="w-full h-64 object-cover md:h-80" src={food.food_image} alt={food.food_name} />
                    <span className={`absolute top-4 left-4 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg ${isAvailable ? 'bg-green-500' : 'bg-red-500'}`}>
                        {food.food_status}
                    </span>
                    <span className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                        Qty: {food.quantity}
                    </span>
                </div>

                <div className="p-6 md:p-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-2">{food.food_name}</h1>
                    <p className="text-xl text-gray-600 mb-6 border-b pb-4">
                        Pick Up Location: <span className="font-semibold text-indigo-600">{food.pickup_location}</span>
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div>
                            <h4 className="text-lg font-bold text-gray-700 mb-2">Expiration Details</h4>
                            <p className="text-gray-600">
                                <span className="font-medium">Expires On:</span> {food.expire_date ? new Date(food.expire_date).toLocaleDateString() : 'N/A'}
                            </p>
                            <p className="text-gray-600 mt-1">
                                <span className="font-medium">Notes:</span> {food.notes}
                            </p>
                        </div>

                        <div className="bg-blue-50 p-4 rounded-lg shadow-inner">
                            <h4 className="text-lg font-bold text-blue-800 mb-3 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.98 5.98 0 0010 16a5.978 5.978 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                                </svg>
                                Donator Information
                            </h4>
                            <div className="flex items-center space-x-4">
                                <img className="h-12 w-12 rounded-full object-cover" src={food.donator?.image || food.donator_image} alt={food.donator?.name || food.donator_name} />
                                <div>
                                    <p className="font-semibold text-gray-800">{food.donator?.name || food.donator_name}</p>
                                    <p className="text-sm text-blue-600">{donatorEmail}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8">
                        {!isFoodOwner && isAvailable ? (
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="w-full text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-[1.01] shadow-lg
                                    bg-gradient-to-r from-indigo-600 to-purple-600
                                    hover:from-indigo-700 hover:to-purple-700"
                            >
                                Request This Food Item
                            </button>
                        ) : (
                            <button
                                disabled
                                className={`w-full text-white font-bold py-3 px-4 rounded-lg shadow-lg ${isFoodOwner ? 'bg-gray-400 cursor-not-allowed' : 'bg-red-500 cursor-not-allowed'}`}
                            >
                                {isFoodOwner ? 'You Own This Food' : 'Food Not Available'}
                            </button>
                        )}
                    </div>
                </div>

                {isFoodOwner && (
                    <div className="p-6 md:p-8 mt-8 border-t border-gray-200">
                        <FoodRequestTable foodId={food._id} foodStatus={food.food_status} />
                    </div>
                )}
            </div>

            <FoodRequestModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                food={food}
                requester={user}
            />
        </div>
    );
};

export default CardDetails;
