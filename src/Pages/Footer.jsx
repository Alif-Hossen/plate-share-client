


import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import foodImg from '../assets/foodsahre.jpg';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                <div className="flex flex-col items-center md:items-start space-y-4 text-center md:text-left">
                    <img src={foodImg} alt="Logo" className="w-24 h-24 object-cover rounded-full" />
                    <p className="text-gray-400 text-sm">
                        Providing quality food since 1992. Join our food sharing community and spread happiness.
                    </p>
                </div>

                <div className="text-center md:text-left">
                    <h6 className="text-white font-semibold mb-4">Company</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-500 transition-colors">About Us</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Contact</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Jobs</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Press Kit</a></li>
                    </ul>
                </div>

                <div className="text-center md:text-left">
                    <h6 className="text-white font-semibold mb-4">Resources</h6>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Help Center</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-blue-500 transition-colors">Terms of Service</a></li>
                    </ul>
                </div>

                <div className="flex flex-col items-center md:items-start space-y-4">
                    
                    <div className="w-full text-center md:text-left">
                        <h6 className="text-white font-semibold mb-2">Follow Us</h6>
                        <div className="flex justify-center md:justify-start space-x-3">
                            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-colors"><FaFacebookF /></a>
                            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors"><FaTwitter /></a>
                            <a href="#" className="p-3 bg-gray-800 rounded-full hover:bg-pink-500 transition-colors"><FaInstagram /></a>
                        </div>
                    </div>


                    <div className="w-full mt-4 text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                            <button className="bg-blue-600 p-2 rounded-md hover:bg-blue-500 transition-colors text-white font-semibold w-auto"> 
                                Subscribe
                            </button>
                        </div>

                        <div className="flex flex-col items-center md:items-start">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full p-2 rounded-md border-none focus:outline-none text-gray-900"
                                style={{ maxWidth: '300px' }} 
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800 mt-12"></div>

            <div className="max-w-7xl mx-auto px-6 py-6 text-center text-gray-500 text-sm">
                &copy; 2025 Plate Share. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;


