

// import React, { useState, useEffect } from 'react';
// import imgTwo from '../assets/two.jpg';
// import imgThree from '../assets/three.jpg';

// const Slider = () => {
//     const images = [ imgTwo, imgThree];
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [images.length]);

//     const goToPrevious = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
//     };

//     const goToNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     return (
//         <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden rounded-lg shadow-2xl my-8 bg-gray-100"> 
            
//             <div 
//                 className="flex transition-transform duration-700 ease-in-out" 
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//                 {images.map((image, index) => (
//                     <div key={index} className="w-full flex-shrink-0">
//                         <img 
//                             src={image} 
//                             alt={`Slide ${index + 1}`} 
//                             className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-contain" 
//                         />
//                     </div>
//                 ))}
//             </div>

//             <button 
//                 onClick={goToPrevious} 
//                 className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 z-10"
//             >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
//                 </svg>
//             </button>
//             <button 
//                 onClick={goToNext} 
//                 className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 z-10"
//             >
//                 <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
//                 </svg>
//             </button>

//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
//                 {images.map((_, index) => (
//                     <button
//                         key={index}
//                         onClick={() => setCurrentIndex(index)}
//                         className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'} hover:bg-white transition-colors duration-300`}
//                     ></button>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Slider;


import React, { useState, useEffect } from 'react';
// ইমেজ ইম্পোর্ট অপরিবর্তিত
import imgTwo from '../assets/two.jpg';
import imgThree from '../assets/three.jpg';

const Slider = () => {
    // পরিবর্তন এখানে: imgTwo কে প্রথমে এবং imgThree কে দ্বিতীয় অবস্থানে আনা হয়েছে
    const images = [ imgTwo, imgThree];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full max-w-screen-lg mx-auto overflow-hidden rounded-lg shadow-2xl my-8 bg-gray-100"> 
            
            <div 
                className="flex transition-transform duration-700 ease-in-out" 
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                        <img 
                            src={image} 
                            alt={`Slide ${index + 1}`} 
                            className="w-full h-[200px] md:h-[250px] lg:h-[300px] object-contain" 
                        />
                    </div>
                ))}
            </div>

            <button 
                onClick={goToPrevious} 
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 z-10"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <button 
                onClick={goToNext} 
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all duration-300 z-10"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-white' : 'bg-gray-400'} hover:bg-white transition-colors duration-300`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Slider;