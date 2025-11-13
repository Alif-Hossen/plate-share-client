


import toast from 'react-hot-toast';

const FoodRequestModal = ({ isOpen, onClose, food, requester }) => {
    if (!isOpen) return null;

    const handleSubmitRequest = async (e) => {
        e.preventDefault();
        const form = e.target;

        const writeLocation = form.writeLocation.value;
        const whyNeedFood = form.whyNeedFood.value;
        const contactNo = form.contactNo.value;

        const API_URL = "https://plate-share-server.onrender.com";

        if (!requester?.email) {
            toast.error("You must be logged in to request food.");
            return;
        }

        const requestData = {
            foodId: food._id,
            foodName: food.food_name,
            foodImage: food.food_image,
            donatorEmail: food.donator?.email || food.donator_email,
            donatorName: food.donator?.name || food.donator_name,
            requesterEmail: requester.email,
            requesterName: requester.displayName || 'Unknown Requester',
            requesterPhoto: requester.photoURL || 'default-user-image-url',
            writeLocation,
            whyNeedFood,
            contactNo,
            requestDate: new Date().toISOString(),
            status: 'Pending',
        };

        try {
            const response = await fetch(`${API_URL}/api/v1/requests`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestData),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                toast.success('✅ Food Request Submitted Successfully!');
                form.reset();
                onClose();
            } else {
                toast.error(` Failed: ${data.message || 'Could not submit request.'}`);
            }
        } catch (error) {
            console.error('Error submitting request:', error);
            toast.error('Something went wrong.');
        }
    };

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-lg mx-4">
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h3 className="text-xl font-bold text-gray-800">Request: {food.food_name}</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl font-semibold">&times;</button>
                </div>

                <form onSubmit={handleSubmitRequest}>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                        <p><strong>Food ID:</strong> <span className="font-mono">{food._id}</span></p>
                        <p><strong>Donator Email:</strong> {food.donator?.email || food.donator_email}</p>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Location (Write Location)</label>
                        <input type="text" name="writeLocation" required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Why Need Food (Reason)</label>
                        <textarea name="whyNeedFood" rows="3" required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Contact No.</label>
                        <input type="tel" name="contactNo" placeholder="e.g., +8801XXXXXXXXX" required
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500" />
                    </div>

                    <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-300 mt-4">
                        Submit Request
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FoodRequestModal;

