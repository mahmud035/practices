import React from 'react';
import AboutUs from '../components/AboutUs';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Testimonial from '../components/Testimonial';
import RecipeReviewCard from '../components/RecipeReviewCard';
import ProductCard from '../components/ProductCard';
import DrawerComponent from '../components/DrawerComponent';

const Home = () => {
  return (
    <div>
      {/* <RecipeReviewCard /> */}
      {/* <ProductCard /> */}
      {/* <DrawerComponent /> */}

      <Navbar />
      <Header />
      <Product />
      <AboutUs />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
