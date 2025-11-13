


import { FaUserCircle, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { AuthContext } from '../Provider/AuthProvider'; 
import { NavLink } from 'react-router';

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
    

    const gradientButtonClass = "w-full text-white font-semibold py-2 rounded-lg transition-all duration-300 transform hover:scale-[1.01] mt-auto bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 shadow-md hover:shadow-xl text-center";

    let formattedDate = '';
    if (expire_date) {
        try {
            formattedDate = new Date(expire_date).toLocaleDateString('en-GB');
        } catch {
            formattedDate = expire_date; 
        }
    }

    return (
        <div className="h-full bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transform hover:scale-[1.03] transition-all duration-300 ease-in-out cursor-pointer group flex flex-col">
            
            <div className="relative h-64 flex-shrink-0 overflow-hidden">
                <img 
                    src={food_image} 
                    alt={food_name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-90" 
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg transform translate-x-0 group-hover:scale-110 transition-transform duration-300">
                    Expires: {formattedDate}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                

                <h3 className="text-2xl font-bold text-gray-800 mb-2 truncate group-hover:text-red-600 transition-colors duration-300">
                    {food_name}
                </h3>

                <div className="flex justify-between items-center text-sm text-gray-600 mb-4 border-b pb-3">
                    <span className="font-medium text-base">
                        Quantity: <span className="text-purple-600 font-bold">{quantity}</span>
                    </span>
                    {food_status === 'Available' && (
                        <span className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full whitespace-nowrap transform group-hover:scale-105 transition-transform duration-300">
                            {food_status}
                        </span>
                    )}
                </div>

                <div className="flex items-center space-x-3 mb-4">
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
                    <p className="flex items-center text-gray-600">
                        <FaMapMarkerAlt className="w-4 h-4 mr-2 text-red-500" />
                        Pickup: {pickup_location}
                    </p>
                    <p className="flex items-center text-gray-600">
                        <FaCalendarAlt className="w-4 h-4 mr-2 text-blue-500" />
                        Expires: {formattedDate}
                    </p>
                </div>

                <NavLink to={`/cardDetails/${_id}`}
                    className={gradientButtonClass}
                >
                    View Details
                </NavLink>
            </div>
        </div>
    );
};

export default AvailableFoodCard;



