import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UpdateFood = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [food, setFood] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/v1/foods/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Food not found");
                return res.json();
            })
            .then((data) => setFood(data))
            .catch((err) => {
                console.error(err);
                toast.error("Failed to load food details.");
            });
    }, [id]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;

        
        const quantityValue = parseInt(form.quantity.value);
        
        const updatedFood = {
            food_name: form.foodName.value,
            food_image: form.foodImage.value,
            quantity: quantityValue,
            pickup_location: form.pickupLocation.value,
            expire_date: form.expireDate ? form.expireDate.value : food.expire_date,
            notes: form.notes.value,
            
            food_status: form.foodStatus ? form.foodStatus.value : food.food_status,
        };

        try {
            const res = await fetch(`http://localhost:3000/api/v1/foods/${id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(updatedFood),
            });

            const data = await res.json();

            if (res.ok && data.success) {
                toast.success("✅ Food updated successfully!");
                navigate("/manageFood"); 
            } else {
                toast.error(data.message || "❌ Failed to update food.");
            }
        } catch (error) {
            console.error(error);
            toast.error("❌ An error occurred.");
        }
    };

    if (!food) return <p className="text-center mt-10">Loading...</p>;
    
    const defaultExpireDate = food.expire_date ? new Date(food.expire_date).toISOString().split('T')[0] : '';

    return (
        <div className="container mx-auto max-w-2xl px-4 py-10">
            <h2 className="text-3xl font-bold text-center mb-8 
                          bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600">
                Update Food: {food.food_name}
            </h2>

            <form onSubmit={handleUpdate} className="bg-white p-8 rounded-xl shadow-lg">
                <label className="block mb-2 font-semibold">Food Name</label>
                <input
                    type="text"
                    name="foodName"
                    defaultValue={food.food_name}
                    required
                    className="w-full mb-4 p-2 border rounded"
                />

                <label className="block mb-2 font-semibold">Food Image URL</label>
                <input
                    type="text"
                    name="foodImage"
                    defaultValue={food.food_image}
                    required
                    className="w-full mb-4 p-2 border rounded"
                />

                <label className="block mb-2 font-semibold">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    defaultValue={food.quantity}
                    required
                    className="w-full mb-4 p-2 border rounded"
                />

                <label className="block mb-2 font-semibold">Pickup Location</label>
                <input
                    type="text"
                    name="pickupLocation"
                    defaultValue={food.pickup_location}
                    required
                    className="w-full mb-4 p-2 border rounded"
                />

                <label className="block mb-2 font-semibold">Expiration Date</label>
                <input
                    type="date"
                    name="expireDate"
                    defaultValue={defaultExpireDate} 
                    required
                    className="w-full mb-4 p-2 border rounded"
                />

                <label className="block mb-2 font-semibold">Notes</label>
                <textarea
                    name="notes"
                    defaultValue={food.notes}
                    className="w-full mb-4 p-2 border rounded"
                />
                
                <label className="block mb-2 font-semibold">Food Status</label>
                <select 
                    name="foodStatus"
                    defaultValue={food.food_status}
                    className="w-full mb-4 p-2 border rounded"
                >
                    <option value="Available">Available</option>
                    <option value="Requested">Requested</option>
                    <option value="Delivered">Delivered</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold py-2 rounded-lg"
                >
                    Update Food
                </button>
            </form>
        </div>
    );
};

export default UpdateFood;