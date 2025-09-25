import React from 'react';
import { motion } from 'framer-motion';
import { Star, Heart } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
  description: string;
  featured?: boolean;
}

const FeaturedProducts: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: "Premium Green Cardamom",
      price: "₹1,200/kg",
      image: "https://images.unsplash.com/photo-1629828845999-2a445483c337?w=400&h=400&fit=crop",
      rating: 5,
      description: "Aromatic green cardamom pods from Kerala's finest gardens",
      featured: true
    },
    {
      id: 2,
      name: "Black Cardamom",
      price: "₹800/kg",
      image: "https://images.unsplash.com/photo-1600955932582-201a18a5413e?w=400&h=400&fit=crop",
      rating: 5,
      description: "Large, smoky black cardamom perfect for biryanis"
    },
    {
      id: 3,
      name: "Organic Black Pepper",
      price: "₹600/kg",
      image: "https://images.unsplash.com/photo-1600358943348-5f1903c20cbe?w=400&h=400&fit=crop",
      rating: 4.8,
      description: "Premium Malabar black pepper, freshly ground"
    },
    {
      id: 4,
      name: "Ceylon Cinnamon",
      price: "₹400/kg",
      image: "https://images.unsplash.com/photo-1556691234-134d5b2b9611?w=400&h=400&fit=crop",
      rating: 4.9,
      description: "Authentic Ceylon cinnamon sticks with sweet aroma"
    },
    {
      id: 5,
      name: "Organic Turmeric",
      price: "₹200/kg",
      image: "https://images.unsplash.com/photo-1582215037799-b8800662a058?w=400&h=400&fit=crop",
      rating: 4.7,
      description: "Golden turmeric powder with high curcumin content"
    },
    {
      id: 6,
      name: "Star Anise",
      price: "₹900/kg",
      image: "https://images.unsplash.com/photo-1508211218933-01b857a4f8a0?w=400&h=400&fit=crop",
      rating: 4.6,
      description: "Whole star anise for authentic flavoring"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Spice Collection
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium spices, 
            each one hand-picked for its exceptional quality and authentic flavor.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                product.featured ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {product.featured && (
                <div className="bg-green-500 text-white px-4 py-2 text-sm font-semibold">
                  Featured Product
                </div>
              )}
              
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <Heart className="h-5 w-5 text-gray-600" />
                </button>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                        }`} 
                      />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{product.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Add to Cart
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
