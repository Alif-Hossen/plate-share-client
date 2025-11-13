// import FeaturedFoods from './FeaturedFoods';
// import Hero from './Hero';
// import Slider from './Slider';

// const topProductsPromise = fetch('http://localhost:3000/top_products').then(res => res.json());

// const Banner = () => {    
//     return (
//         <>
//             <div>
//                 <Slider></Slider>
//                 <Hero></Hero>
//                 <FeaturedFoods topProductsPromise={topProductsPromise}></FeaturedFoods>
//             </div>
//         </>
//     );
// };

// export default Banner;

import FeaturedFoods from './FeaturedFoods';
import Hero from './Hero';
import Slider from './Slider';

// ১. API URL সেট করা হয়েছে
const API_URL = "https://plate-share-server.onrender.com";

// ২. fetch কলটি পরিবর্তন করা হয়েছে: 'http://localhost:3000' এর বদলে API_URL ব্যবহার করা হয়েছে
const topProductsPromise = fetch(`${API_URL}/top_products`).then(res => res.json());

const Banner = () => {     
    return (
        <>
            <div>
                <Slider></Slider>
                <Hero></Hero>
                <FeaturedFoods topProductsPromise={topProductsPromise}></FeaturedFoods>
            </div>
        </>
    );
};

export default Banner;
