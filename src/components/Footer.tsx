import React from 'react';
import { Leaf, Phone, Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">Spice Paradise</span>
            </div>
            <p className="text-gray-300 mb-4">
              Premium quality cardamom and authentic Indian spices, sourced directly from spice gardens. 
              Experience the finest flavours and aromas in every packet.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span>orders@spiceparadise.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span>Spice Gardens, Kerala, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-green-400 transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Shipping Info</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Spices</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Premium Cardamom</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Black Pepper</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Cinnamon</a></li>
              <li><a href="#" className="text-gray-300 hover:text-green-400 transition-colors">Turmeric</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Spice Paradise. All rights reserved. | Made with ❤️ for spice lovers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
