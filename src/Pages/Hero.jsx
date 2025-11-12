import React from 'react';

const Hero = () => {
    return (
        <div>
            <div>
                <div className='mx-2 '>
                    <h1 className='md:text-5xl text-3xl pt-8 font-semibold text-center'>
                        Food <span className='font-bold 
                      bg-clip-text text-transparent 
                      bg-gradient-to-r from-blue-500 to-purple-600'>
                            Donation
                        </span> and <span className='font-bold 
                      bg-clip-text text-transparent 
                      bg-gradient-to-r from-blue-500 to-purple-600'>
                            Donation
                        </span> System
                    </h1>

                </div>
                <div className='max-w-[500px] mx-auto'>
                    <p className='text-gray-600 text-center px-4 py-8'>
                        Plate Share is a web-based food sharing system designed to connect individuals and organizations with surplus food to people in need. The system helps reduce food waste and promotes community support by enabling safe and easy food donations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;