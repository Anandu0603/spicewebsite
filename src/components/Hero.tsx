import React from 'react';
import { motion } from 'framer-motion';
import { Star, Award, Truck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-yellow-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Premium <span className="text-green-600">Cardamom</span> & 
              <span className="text-orange-600"> Authentic Spices</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Experience the finest quality cardamom and spices, sourced directly from Indian spice gardens. 
              Fresh, aromatic, and packed with authentic flavours.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">Premium Quality</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium">Certified Organic</span>
              </div>
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-blue-500" />
                <span className="text-sm font-medium">Fast Delivery</span>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Order Now
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=600&h=600&fit=crop" 
                alt="Premium cardamom pods"
                className="w-full h-96 object-cover rounded-xl"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">100%</div>
              <div className="text-sm">Pure & Natural</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
