import React from 'react';

const Static = () => {
    return (
        <div>
            <section className="py-16 bg-gray-50">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-8">How <span className='font-bold 
                      bg-clip-text text-transparent 
                      bg-gradient-to-r from-blue-500 to-purple-600'>
                        Donation
                    </span> Works</h2>
                    <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
                        A simple way to reduce food waste and help the community.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition">
                            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl font-bold">
                                1
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Post Food</h3>
                            <p className="text-gray-600 mt-2">
                                Donors can upload extra food details with location & expiration info.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition">
                            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-3xl font-bold">
                                2
                            </div>
                            <h3 className="text-xl font-semibold mt-4">Find Food</h3>
                            <p className="text-gray-600 mt-2">
                                Users browse nearby available food shared by others.
                            </p>
                        </div>

                        <div className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center hover:scale-105 transition">
                            <div className="h-16 w-16 flex items-center justify-center rounded-full bg-orange-100 text-orange-600 text-3xl font-bold">
                                3
                            </div>
                            {/* <img src={collectFoodImg} alt="" /> */}

                            <h3 className="text-xl font-semibold mt-4">Collect Food</h3>
                            <p className="text-gray-600 mt-2">
                                Request and collect food from nearby donors safely.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default Static;