import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import OrderForm from '../components/OrderForm';
import WhyChooseUs from '../components/WhyChooseUs';

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <WhyChooseUs />
      <OrderForm />
    </div>
  );
};

export default Home;
