import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider'; 
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 
import { useState } from 'react';
import toast from 'react-hot-toast';

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const [expireDate, setExpireDate] = useState(null);

    const handleAddFood = async (e) => {
        e.preventDefault();
        const form = e.target;

        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value; 
        const quantity = form.quantity.value;
        const pickupLocation = form.pickupLocation.value;
        const notes = form.notes.value;

        const donatorName = user?.displayName || 'Unknown';
        const donatorEmail = user?.email || 'N/A';
        const donatorImage = user?.photoURL || 'default-user-image-url';

        const newFood = {
            food_name: foodName,
            food_image: foodImage,
            quantity: quantity,
            pickup_location: pickupLocation,
            expire_date: expireDate ? expireDate.toISOString() : null, 
            notes: notes,
            donator_name: donatorName,
            donator_email: donatorEmail,
            donator_image: donatorImage,
            food_status: 'Available', 
            created_at: new Date().toISOString(),
        };

        console.log(newFood);

        // --- MongoDB তে ডেটা সেভ করার লজিক (API কল) ---

        try {
            // ধরে নিচ্ছি তোমার API এন্ডপয়েন্ট হলো /api/v1/foods
            const response = await fetch('YOUR_API_BASE_URL/api/v1/foods', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newFood),
            });

            if (response.ok) {
                const data = await response.json();
                console.log('Food added successfully:', data);
                toast.success('✅ Food added successfully!');
                form.reset(); 
                setExpireDate(null); 
            } else {
                toast.error('❌ Failed to add food.');
            }
        } catch (error) {
            console.error('Error adding food:', error);
            toast.error('❌ An error occurred.');
        }

    };

    return (
        <div className="container mx-auto max-w-2xl px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8 
                           bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Donate Food Item
            </h2>

            <form onSubmit={handleAddFood} className="bg-white p-8 rounded-xl shadow-2xl border border-gray-100">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Food Name</label>
                        <input type="text" name="foodName" placeholder="e.g., Prawn Tempura Set" required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Food Image URL (ImgBB)</label>
                        <input type="url" name="foodImage" placeholder="Image URL from ImgBB" required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Food Quantity (Servings)</label>
                        <input type="text" name="quantity" placeholder="e.g., Serves 4 people" required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                        <input type="text" name="pickupLocation" placeholder="e.g., Mohakhali, Dhaka" required
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                    </div>
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Expire Date</label>
                    <DatePicker
                        selected={expireDate}
                        onChange={(date) => setExpireDate(date)}
                        dateFormat="dd/MM/yyyy"
                        placeholderText="Select Expiration Date"
                        minDate={new Date()} 
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes</label>
                    <textarea name="notes" placeholder="Any special instructions or details about the food..." rows="3" required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg mb-6 border border-purple-200">
                    <p className="text-md font-bold text-purple-700 mb-2">Donator Information (Auto-filled)</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
                        <p><strong>Name:</strong> <span className="font-semibold">{user?.displayName || 'N/A'}</span></p>
                        <p><strong>Email:</strong> <span className="font-semibold">{user?.email || 'N/A'}</span></p>
                        <p><strong>Status:</strong> <span className="font-bold text-green-600">Available (Default)</span></p>
                    </div>
                </div>

                <button type="submit"
                    className="w-full text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 mt-4
                                   bg-gradient-to-r from-blue-500 to-purple-600 
                                   hover:from-blue-600 hover:to-purple-700 
                                   shadow-md hover:shadow-lg">
                    Add Food for Donation
                </button>
            </form>
        </div>
    );
};

export default AddFood;