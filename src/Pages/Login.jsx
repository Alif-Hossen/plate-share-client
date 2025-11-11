

import React from "react";
import { NavLink } from "react-router";

export default function LoginForm() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            {/* Fade-in effect using Tailwind opacity & translate */}
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full
                            opacity-0 translate-y-10 animate-fadeIn
                            transition-all duration-700">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

                <form className="space-y-4">
                    <div>
                        <label className="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition"
                            required
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold
                                   hover:bg-indigo-700 transition transform hover:scale-105 active:scale-95"
                    >
                        Login
                    </button>
                </form>

                <p className="text-center mt-4 text-sm text-gray-600">
                    Don't have an account? {" "}
                    <NavLink className="text-indigo-600 font-semibold hover:underline" to="/register">
                        Register
                    </NavLink>
                </p>
            </div>
        </div>
    );
}


