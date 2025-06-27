import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Plant } from '../../types';
import { useCart } from '../../contexts/CartContext';
import { useWishlist } from '../../contexts/WishlistContext';
import { useAuth } from '../../contexts/AuthContext';
import Button from '../UI/Button';

interface PlantCardProps {
  plant: Plant;
  index?: number;
}

const PlantCard: React.FC<PlantCardProps> = ({ plant, index = 0 }) => {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      addToCart(plant);
    }
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    if (user) {
      if (isInWishlist(plant.id)) {
        removeFromWishlist(plant.id);
      } else {
        addToWishlist(plant);
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link to={`/plant/${plant.id}`} className="block">
        <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden">
          {/* Image Container */}
          <div className="relative aspect-square overflow-hidden">
            <img
              src={plant.image}
              alt={plant.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            
            {/* Discount Badge */}
            {plant.originalPrice && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                {Math.round(((plant.originalPrice - plant.price) / plant.originalPrice) * 100)}% OFF
              </div>
            )}

            {/* Wishlist Button */}
            {user && (
              <button
                onClick={handleWishlistToggle}
                className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
              >
                <Heart 
                  className={`h-4 w-4 ${
                    isInWishlist(plant.id) 
                      ? 'text-red-500 fill-current' 
                      : 'text-gray-600'
                  }`} 
                />
              </button>
            )}

            {/* Quick Add to Cart */}
            {user && (
              <div className="absolute bottom-3 left-3 right-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Button
                  onClick={handleAddToCart}
                  size="sm"
                  className="w-full"
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {plant.category}
              </span>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">
                  {plant.rating} ({plant.reviews})
                </span>
              </div>
            </div>

            <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
              {plant.name}
            </h3>
            
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {plant.shortDescription}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-1 mb-3">
              {plant.features.slice(0, 2).map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">
                  ${plant.price}
                </span>
                {plant.originalPrice && (
                  <span className="text-sm text-gray-500 line-through">
                    ${plant.originalPrice}
                  </span>
                )}
              </div>
              
              <div className="flex items-center space-x-2 text-xs text-gray-500">
                <span className={`px-2 py-1 rounded-full ${
                  plant.careLevel === 'Easy' ? 'bg-green-100 text-green-700' :
                  plant.careLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {plant.careLevel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default PlantCard;