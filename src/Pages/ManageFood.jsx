

import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const ManageFood = () => {
    const { user } = useContext(AuthContext);
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_URL = "https://plate-share-server.onrender.com";

    const fetchFoods = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_URL}/api/v1/my-foods?email=${user?.email}`);
            const data = await res.json();
            if (res.ok) {
                setFoods(data);
            } else {
                toast.error(data.message || "Failed to fetch foods");
                setFoods([]);
            }
        } catch (err) {
            console.error(err);
            toast.error("Failed to fetch foods");
            setFoods([]);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (user?.email) fetchFoods();
    }, [user]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await fetch(`h${API_URL}/api/v1/foods/${id}`, {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    if (res.ok && data.success) {
                        toast.success('Food deleted successfully!');
                        fetchFoods();
                    } else {
                        toast.error(data.message || "Delete failed");
                    }
                } catch (err) {
                    console.error(err);
                    toast.error("Something went wrong");
                }
            }
        });
    };

    if (loading) return <p className="text-center mt-10">Loading...</p>;

    return (
        <div className="container mx-auto py-10 px-2 sm:px-4">
            <h2 className="text-3xl font-bold text-center mb-6">Manage My Foods</h2>
            {foods.length === 0 ? (
                <p className="text-center text-gray-500">No foods added yet.</p>
            ) : (
                <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
                    <table className="min-w-full table-auto divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-3 py-3 border text-xs font-medium text-gray-500 uppercase tracking-wider md:text-sm">Food Name</th>
                                <th className="px-3 py-3 border text-xs font-medium text-gray-500 uppercase tracking-wider md:text-sm">Quantity</th>
                                <th className="px-3 py-3 border text-xs font-medium text-gray-500 uppercase tracking-wider md:text-sm">Pickup Location</th>
                                <th className="px-3 py-3 border text-xs font-medium text-gray-500 uppercase tracking-wider md:text-sm">Expire Date</th>
                                <th className="px-3 py-3 border text-xs font-medium text-gray-500 uppercase tracking-wider md:text-sm">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {foods.map(food => (
                                <tr key={food._id} className="text-center">
                                    <td className="px-3 py-4 border whitespace-nowrap text-sm font-medium text-gray-900">{food.food_name}</td>
                                    <td className="px-3 py-4 border whitespace-nowrap text-sm text-gray-500">{food.quantity}</td>
                                    <td className="px-3 py-4 border whitespace-nowrap text-sm text-gray-500">{food.pickup_location}</td>
                                    <td className="px-3 py-4 border whitespace-nowrap text-sm text-gray-500">{food.expire_date ? new Date(food.expire_date).toLocaleDateString() : 'N/A'}</td>
                                    <td className="px-3 py-4 border space-y-1 md:space-y-0 md:space-x-2 flex flex-col md:flex-row justify-center items-center">
                                        <Link to={`/update-food/${food._id}`} 
                                              className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-150 w-full md:w-auto text-center">
                                            Update
                                        </Link>
                                        <button onClick={() => handleDelete(food._id)}
                                                className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition duration-150 w-full md:w-auto text-center">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ManageFood;

