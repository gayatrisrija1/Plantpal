import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  ShoppingCart, 
  Star, 
  Minus, 
  Plus, 
  Truck, 
  Shield, 
  RotateCcw,
  ChevronLeft,
  Sun,
  Droplets,
  Thermometer,
  Leaf
} from 'lucide-react';
import { plants } from '../data/plants';
import { useCart } from '../contexts/CartContext';
import { useWishlist } from '../contexts/WishlistContext';
import { useAuth } from '../contexts/AuthContext';
import PlantCard from '../components/Plant/PlantCard';
import Button from '../components/UI/Button';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');

  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();

  const plant = plants.find(p => p.id === id);
  const relatedPlants = plants.filter(p => p.id !== id && p.category === plant?.category).slice(0, 4);

  if (!plant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Plant not found</h2>
          <Link to="/shop" className="text-green-600 hover:text-green-700">
            Browse our plant collection
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (user) {
      addToCart(plant, quantity);
    }
  };

  const handleWishlistToggle = () => {
    if (user) {
      if (isInWishlist(plant.id)) {
        removeFromWishlist(plant.id);
      } else {
        addToWishlist(plant);
      }
    }
  };

  const updateQuantity = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-green-600">Shop</Link>
          <span>/</span>
          <span className="text-gray-900">{plant.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        {/* Back Button */}
        <Link 
          to="/shop" 
          className="inline-flex items-center text-gray-600 hover:text-green-600 mb-8 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Shop
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:pl-8"
          >
            {/* Category */}
            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full mb-4">
              {plant.category}
            </span>

            {/* Title and Rating */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {plant.name}
            </h1>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(plant.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600">
                {plant.rating} ({plant.reviews} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-gray-900">
                ${plant.price}
              </span>
              {plant.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${plant.originalPrice}
                </span>
              )}
              {plant.originalPrice && (
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                  {Math.round(((plant.originalPrice - plant.price) / plant.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-gray-600 text-lg mb-6">
              {plant.shortDescription}
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-8">
              {plant.features.map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {feature}
                </span>
              ))}
            </div>

            {/* Plant Details */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Leaf className="h-5 w-5 text-green-600 mr-2" />
                  <span className="font-medium text-gray-900">Care Level</span>
                </div>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  plant.careLevel === 'Easy' ? 'bg-green-100 text-green-700' :
                  plant.careLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {plant.careLevel}
                </span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                  <span className="font-medium text-gray-900">Light Needs</span>
                </div>
                <span className="text-gray-700">{plant.lightNeeds}</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                  <span className="font-medium text-gray-900">Watering</span>
                </div>
                <span className="text-gray-700">{plant.watering}</span>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <Thermometer className="h-5 w-5 text-red-500 mr-2" />
                  <span className="font-medium text-gray-900">Height</span>
                </div>
                <span className="text-gray-700">{plant.height}</span>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            {user && (
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => updateQuantity(-1)}
                    className="p-2 hover:bg-gray-50"
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(1)}
                    className="p-2 hover:bg-gray-50"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <Button onClick={handleAddToCart} size="lg" className="flex-1">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart - ${(plant.price * quantity).toFixed(2)}
                </Button>

                <button
                  onClick={handleWishlistToggle}
                  className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Heart 
                    className={`h-5 w-5 ${
                      isInWishlist(plant.id) 
                        ? 'text-red-500 fill-current' 
                        : 'text-gray-600'
                    }`} 
                  />
                </button>
              </div>
            )}

            {!user && (
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <p className="text-gray-700 mb-4">Please log in to add items to your cart</p>
                <Link to="/login">
                  <Button>Login to Shop</Button>
                </Link>
              </div>
            )}

            {/* Guarantees */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center space-x-3">
                <Truck className="h-6 w-6 text-green-600" />
                <span className="text-sm text-gray-600">Free shipping over $50</span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-green-600" />
                <span className="text-sm text-gray-600">30-day health guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <RotateCcw className="h-6 w-6 text-green-600" />
                <span className="text-sm text-gray-600">Easy returns</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8">
              {['description', 'care-guide', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab
                      ? 'border-green-600 text-green-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'description' && 'Description'}
                  {tab === 'care-guide' && 'Care Guide'}
                  {tab === 'reviews' && 'Reviews'}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed">
                  {plant.description}
                </p>
              </div>
            )}

            {activeTab === 'care-guide' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <Sun className="h-5 w-5 text-yellow-500 mr-2" />
                      Light Requirements
                    </h3>
                    <p className="text-gray-700">{plant.careGuide.light}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <Droplets className="h-5 w-5 text-blue-500 mr-2" />
                      Watering
                    </h3>
                    <p className="text-gray-700">{plant.careGuide.water}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                      <Thermometer className="h-5 w-5 text-red-500 mr-2" />
                      Temperature
                    </h3>
                    <p className="text-gray-700">{plant.careGuide.temperature}</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Humidity
                    </h3>
                    <p className="text-gray-700">{plant.careGuide.humidity}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Fertilizer
                    </h3>
                    <p className="text-gray-700">{plant.careGuide.fertilizer}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Customer Reviews</h3>
                    <div className="flex items-center mt-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(plant.rating)
                                ? 'text-yellow-400 fill-current'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-gray-600">
                        {plant.rating} out of 5 ({plant.reviews} reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-center py-12">
                  <p className="text-gray-500">Reviews feature coming soon!</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedPlants.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedPlants.map((relatedPlant, index) => (
                <PlantCard key={relatedPlant.id} plant={relatedPlant} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;