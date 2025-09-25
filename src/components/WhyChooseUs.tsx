import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Truck, Shield, Users, Clock } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: "100% Organic",
      description: "All our spices are organically grown without harmful chemicals or pesticides."
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Hand-picked spices that meet the highest quality standards and freshness."
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Quick and secure delivery across India with careful packaging."
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee or your money back policy."
    },
    {
      icon: Users,
      title: "Trusted by Thousands",
      description: "Over 10,000+ satisfied customers trust our quality and service."
    },
    {
      icon: Clock,
      title: "Fresh & Pure",
      description: "Directly sourced from farms and processed in hygienic conditions."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Spice Paradise?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are committed to bringing you the finest spices with uncompromising quality, 
            authentic flavors, and exceptional service.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                <feature.icon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
