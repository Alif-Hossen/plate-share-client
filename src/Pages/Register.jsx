

import React, { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

import { NavLink, useNavigate } from "react-router"; 

export default function RegisterForm() {
    const { register } = useContext(AuthContext); 
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const userCredential = await register(email, password);

            await userCredential.user.updateProfile({
                displayName: name,
                photoURL: photoURL || null,
            });

            console.log("User registered:", userCredential.user);
            navigate("/");
        } catch (err) {
            console.error(err);
            setError(err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div
                className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full
					opacity-0 translate-y-10 animate-fadeIn
					transition-all duration-700"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

                {error && (
                    <p className="text-red-500 text-center mb-3">{error}</p>
                )}

                <form className="space-y-4" onSubmit={handleRegister}>
                    {/* Name */}
                    <div>
                        <label className="block font-medium mb-1">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    {/* Photo URL */}
                    <div>
                        <label className="block font-medium mb-1">Photo URL</label>
                        <input
                            type="text"
                            placeholder="Enter photo URL"
                            className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition"
                            value={photoURL}
                            onChange={(e) => setPhotoURL(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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






