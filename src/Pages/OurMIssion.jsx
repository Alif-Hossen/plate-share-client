import React from 'react';

const MissionStats = () => {
    const stats = [
        { id: 1, name: 'Total Food Donated', value: '45K+', icon: '🍽️' },
        { id: 2, name: 'Active Users', value: '1.2K+', icon: '🤝' },
        { id: 3, name: 'Meals Saved', value: '150K+', icon: '❤️' },
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="container mx-auto px-4 max-w-screen-lg">

                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Our <span className='bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600'>Mission</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We connect surplus food with those in need, fostering a sustainable, zero-waste community where every meal counts.
                    </p>
                </div>

                <div className="text-center">
                    <h3 className="text-3xl font-bold text-gray-800 mb-10">
                        Community Status
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {stats.map((stat) => (
                            <div
                                key={stat.id}
                                className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-purple-500 
                                           transform hover:scale-[1.05] transition-transform duration-300 ease-in-out"
                            >
                                <p className="text-6xl mb-4">{stat.icon}</p>
                                <p className="text-5xl font-extrabold 
                                            bg-clip-text text-transparent 
                                            bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                                    {stat.value}
                                </p>
                                <p className="text-lg font-semibold text-gray-600">{stat.name}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MissionStats;