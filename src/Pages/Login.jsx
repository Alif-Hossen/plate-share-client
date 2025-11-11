import React, { useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then(() => navigate("/")) 
      .catch(error => {
        console.error(error.message);
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full
                      opacity-0 translate-y-10 animate-fadeIn
                      transition-all duration-700">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition" required />
          <input type="password" name="password" placeholder="Password" className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition" required />

          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold
                       hover:bg-indigo-700 transition transform hover:scale-105 active:scale-95">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <NavLink className="text-indigo-600 font-semibold hover:underline" to="/register">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;





