import React from 'react';
import productImage from '../assets/images/product-1.png';

const Product = () => {
  return (
    <section id="product" className="max-w-screen-xl mx-auto py-20">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="container mx-auto px-6"
      >
        <h2 className="text-center text-3xl md:text-4xl font-semibold">
          OUR PRODUCT
        </h2>

        {/* Products Card */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-12">
          {/* Single Product Card */}
          <div className="px-4 py-6 border-solid border-2 border-[#f5f5f5] rounded-md">
            <img className="w-32 mx-auto" src={productImage} alt="" />
            <div className="pt-5 text-center">
              <h3 className="text-2xl font-semibold pb-3">SEO</h3>
              <p>
                Search engine optimization is the process of improving the
                quality of website traffic to a website web page from search
                engines.
              </p>
            </div>
          </div>

          {/* Single Product Card */}
          <div className="px-4 py-6 border-solid border-2 border-[#f5f5f5] rounded-md">
            <img className="w-32 mx-auto" src={productImage} alt="" />
            <div className="pt-5 text-center">
              <h3 className="text-2xl font-semibold pb-3">BRANDING</h3>
              <p>
                Branding is key to a successful product. It can sound vague and
                fairly daunting, but it's one of those marketing concepts you
                need to
              </p>
            </div>
          </div>

          {/* Single Product Card */}
          <div className="px-4 py-6 border-solid border-2 border-[#f5f5f5] rounded-md ">
            <img className="w-32 mx-auto" src={productImage} alt="" />
            <div className="pt-5 text-center">
              <h3 className="text-2xl font-semibold pb-3">LOGO</h3>
              <p>
                Get your custom logo design. Hire a freelance logo designer
                expert services and get your logo project done and delivered
                remotely online.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
