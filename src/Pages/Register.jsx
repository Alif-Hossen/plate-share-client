import React, { useContext } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const API_URL = "https://plate-share-server.onrender.com";
  
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    createUser(email, password, name, photoURL)
      .then((updatedUser) => {
        console.log("Registered user with photo:", updatedUser);
        navigate("/", { replace: true });

        // SHARE DATA -->
        const newUser = {
          name: updatedUser.user.displayName,
          email: updatedUser.user.email,
          image: updatedUser.user.photoURL,
        }

        // CREATE USER IN THE DATABASE -->
        fetch(`${API_URL}/users`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newUser)
        })
          .then(res => res.json()).then(data => {
          console.log('Data After User Save', data);
        })

      })
      .catch((error) => {
        console.error(error.message);
        alert(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-sm w-full
                      opacity-0 translate-y-10 animate-fadeIn
                      transition-all duration-700">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>

        <form className="space-y-4" onSubmit={handleRegister}>
          <input type="text" name="name" placeholder="Name" className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition" required />
          <input type="email" name="email" placeholder="Email" className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition" required />
          <input type="text" name="photoURL" placeholder="Photo URL" className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition" required />
          <input type="password" name="password" placeholder="Password" className="w-full border rounded-xl p-3 focus:outline-none focus:ring focus:ring-indigo-300 transition" required />

          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold
                       hover:bg-indigo-700 transition transform hover:scale-105 active:scale-95">
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
};

export default Register;








