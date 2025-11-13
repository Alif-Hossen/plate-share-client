import { useLoaderData, useParams } from 'react-router';

const CardDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();

    const food = data.find(singleFood => singleFood._id === id);

    if (!food) {
        return (
            <div className="flex justify-center items-center h-screen bg-gray-50">
                <p className="text-xl font-semibold text-gray-700">Food Item Not Found.</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-4 md:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
                <div className="relative">
                    <img className="w-full h-64 object-cover md:h-80" src={food.food_image} alt={food.food_name} />
                    <span className="absolute top-4 left-4 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
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
                                <span className="font-medium">Expires On:</span> {food.expire_date}
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
                                <img className="h-12 w-12 rounded-full object-cover" src={food.donator_image} alt={food.donator_name} />
                                <div>
                                    <p className="font-semibold text-gray-800">{food.donator_name}</p>
                                    <p className="text-sm text-blue-600">{food.donator_email}</p>
                                </div>
                            </div>
                            <p className="text-sm text-gray-600 mt-2">
                                <span className="font-medium">Contact:</span> {food.donator_contact}
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button
                            className="w-full text-white font-bold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-[1.01] shadow-lg
                                bg-gradient-to-r from-indigo-600 to-purple-600 
                                hover:from-indigo-700 hover:to-purple-700"
                        >
                            Request This Food Item
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetails;