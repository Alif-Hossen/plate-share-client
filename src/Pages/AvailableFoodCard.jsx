
// import React, { useContext } from 'react';
import { FaUserCircle, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom'; 
// import toast from 'react-hot-toast'; 
import { AuthContext } from '../Provider/AuthProvider'; 

const AvailableFoodCard = ({ product }) => {
    const { 
        _id, 
        food_name, 
        food_image, 
        quantity, 
        pickup_location, 
        expire_date, 
        donator_name, 
        donator_image, 
        food_status 
    } = product || {};

    // const { user } = useContext(AuthContext); 
    // const navigate = useNavigate();
    
    const gradientButtonClass = "w-full text-white font-semibold py-2 rounded-lg transition-all duration-300 transform hover:-translate-y-1 mt-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-lg";

    let formattedDate = '';
    if (expire_date) {
        try {
            formattedDate = new Date(expire_date).toLocaleDateString('en-GB');
        } catch {
            formattedDate = expire_date; 
        }
    }

    return (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl">
            
            <div className="h-64 overflow-hidden relative">
                <img 
                    src={food_image} 
                    alt={food_name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    Expires: {formattedDate}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                
                <div className="flex justify-between items-start mb-3">
                    <span className="text-2xl font-bold text-gray-800">{food_name}</span>
                    {food_status === 'Available' && (
                        <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full whitespace-nowrap">
                            {food_status}
                        </span>
                    )}
                </div>

                <div className="flex items-center space-x-3 mb-4 border-b pb-3">
                    <div className="flex-shrink-0">
                        {donator_image ? (
                            <img src={donator_image} alt={donator_name} className="w-10 h-10 rounded-full object-cover border-2 border-purple-400" />
                        ) : (
                            <FaUserCircle className="w-10 h-10 text-gray-400" />
                        )}
                    </div>
                    <div>
                        <p className="text-sm font-medium text-gray-700">Donator</p>
                        <p className="text-md font-semibold text-purple-700">{donator_name || 'N/A'}</p>
                    </div>
                </div>
                
                <div className="space-y-2 mb-4 text-sm flex-grow">
                    <p className="text-base font-bold text-gray-800">
                        Quantity: <span className="text-purple-600">{quantity}</span>
                    </p>
                    <p className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2 text-red-500" />
                        Pickup: {pickup_location}
                    </p>
                    <p className="flex items-center text-gray-600">
                        <FaCalendarAlt className="w-4 h-4 mr-2 text-blue-500" />
                        Expires: {formattedDate}
                    </p>
                </div>

                <button 
                    className={gradientButtonClass}
                    disabled={!_id} 
                >
                    View Details
                </button>
            </div>
        </div>
    );
};

export default AvailableFoodCard;








