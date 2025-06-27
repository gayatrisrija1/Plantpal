import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Leaf, 
  Facebook, 
  Instagram, 
  Twitter
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Leaf className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">Plant Pal</span>
            </div>
            <p className="text-gray-400 mb-6">
              Your trusted companion for bringing nature indoors. We provide healthy, 
              beautiful plants with expert care guidance to help you create your perfect green space.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-green-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-green-500 transition-colors">
                  Shop Plants
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-green-500 transition-colors">
                  Learn More
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop?category=Air%20Purifying" className="text-gray-400 hover:text-green-500 transition-colors">
                  Air Purifying
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Low%20Maintenance" className="text-gray-400 hover:text-green-500 transition-colors">
                  Low Maintenance
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Pet%20Friendly" className="text-gray-400 hover:text-green-500 transition-colors">
                  Pet Friendly
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Succulents" className="text-gray-400 hover:text-green-500 transition-colors">
                  Succulents
                </Link>
              </li>
              <li>
                <Link to="/shop?category=Hanging" className="text-gray-400 hover:text-green-500 transition-colors">
                  Hanging Plants
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-green-500 transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-400 hover:text-green-500 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-400 hover:text-green-500 transition-colors">
                  Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-green-500 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/plant-care" className="text-gray-400 hover:text-green-500 transition-colors">
                  Plant Care Tips
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Plant Pal. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
              Terms of Service
            </Link>
            <Link to="/refund" className="text-gray-400 hover:text-green-500 text-sm transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;