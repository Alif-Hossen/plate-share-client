import FeaturedFoods from './FeaturedFoods';
import Hero from './Hero';
import Slider from './Slider';

const topProductsPromise = fetch('http://localhost:3000/top_products').then(res => res.json());

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


