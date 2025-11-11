import React from "react";
import { NavLink } from "react-router";
// import { NavLink } from "react-router-dom"; 

export default function RegisterForm() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full
                            opacity-0 translate-y-10 animate-fadeIn
                            transition-all duration-700">
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                <form className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition"
                            required
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block font-medium mb-1">Photo URL</label>
                        <input
                            type="text"
                            placeholder="Enter photo URL"
                            className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition"
                            required
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold
                                   hover:bg-indigo-700 transition transform hover:scale-105 active:scale-95"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center mt-4 text-sm text-gray-600">
                    Already have an account?{" "}
                    <NavLink className="text-indigo-600 font-semibold hover:underline" to="/login">
                        Login
                    </NavLink>
                </p>
            </div>

        </div>
    );
}
