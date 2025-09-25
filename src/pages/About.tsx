import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Users, Award, Heart, Target, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We support eco-friendly farming practices and sustainable sourcing."
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "Every spice undergoes rigorous quality testing before reaching you."
    },
    {
      icon: Heart,
      title: "Customer Care",
      description: "Your satisfaction is our priority, and we go the extra mile."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Bringing authentic Indian spices to customers worldwide."
    }
  ];

  return (
    <div className="py-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                About <span className="text-green-600">Spice Paradise</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                For over 25 years, we have been passionately sourcing and delivering the finest spices 
                from the heart of India's spice gardens to kitchens around the world.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-green-600">25+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">10K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">50+</div>
                  <div className="text-gray-600">Premium Spices</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-600">100%</div>
                  <div className="text-gray-600">Organic & Pure</div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop" 
                alt="Spice farm in Kerala"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-600 space-y-6">
              <p>
                Spice Paradise began as a small family business in the spice gardens of Kerala, India. 
                Our founder, Mr. Raghavan, grew up surrounded by the intoxicating aromas of cardamom, 
                pepper, and cinnamon that grew wild in his family's plantation.
              </p>
              <p>
                What started as a passion for preserving the authentic flavors of India has grown into 
                a mission to bring the world's finest spices directly from farm to your kitchen. We work 
                closely with local farmers, ensuring fair trade practices and sustainable farming methods.
              </p>
              <p>
                Today, Spice Paradise is trusted by thousands of customers worldwide who value quality, 
                authenticity, and the rich heritage of Indian spices. Every packet tells a story of 
                tradition, care, and the pursuit of perfection.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Target className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-600">
                To become the world's most trusted source of authentic Indian spices, 
                preserving traditional farming methods while embracing sustainable practices 
                that benefit farmers, customers, and the environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <Heart className="h-12 w-12 text-green-600 mr-4" />
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-600">
                To deliver premium quality spices that enhance culinary experiences worldwide, 
                while supporting local farming communities and promoting sustainable agriculture 
                practices that preserve our planet for future generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The passionate people behind Spice Paradise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Raghavan Kumar",
                role: "Founder & CEO",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
              },
              {
                name: "Priya Sharma",
                role: "Quality Control Head",
                image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop"
              },
              {
                name: "Arjun Nair",
                role: "Sourcing Manager",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
