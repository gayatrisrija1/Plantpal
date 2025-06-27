import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useAuth } from '../contexts/AuthContext';
import PlantCard from '../components/Plant/PlantCard';
import Button from '../components/UI/Button';

const Wishlist: React.FC = () => {
  const { items } = useWishlist();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Log In</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view your wishlist.</p>
          <Link to="/login">
            <Button>Log In</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-900 mb-4">My Wishlist</h1>
          <p className="text-gray-600">
            {items.length === 0 
              ? "You haven't added any plants to your wishlist yet."
              : `${items.length} ${items.length === 1 ? 'plant' : 'plants'} saved for later`
            }
          </p>
        </motion.div>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-8">
              Start browsing our plants and save your favorites for later!
            </p>
            <Link to="/shop">
              <Button size="lg">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Browse Plants
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((plant, index) => (
              <PlantCard key={plant.id} plant={plant} index={index} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;