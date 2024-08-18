import React from 'react';
import Products from '../Component/Products';

const Home = () => {
    return (
        <div>
              <div className="mt-10">
  <h1 className="font-extrabold text-2xl text-center">Your Ultimate Destination for Smart Shopping</h1>
  <p className="text-gray-500 mt-5 mb-10 w-80 lg:w-[50rem] text-center mx-auto">Discover the best products at unbeatable prices with ShopSmart, your one-stop destination for all your shopping needs. Whether you're looking for the latest tech gadgets, stylish accessories, or fitness gear, ShopSmart offers a curated selection of top-quality items from trusted brands. Enjoy seamless browsing, advanced search filters, and personalized recommendations, making your shopping experience smarter, faster, and more enjoyable. Start shopping smart with ShopSmart today!</p>
</div>
      <Products></Products>
        </div>
    );
};

export default Home;