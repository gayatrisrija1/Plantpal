import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import Button from '../components/UI/Button';

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, total, itemCount } = useCart();
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Log In</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view your cart.</p>
          <Link to="/login">
            <Button>Log In</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Add some beautiful plants to get started!</p>
            <Link to="/shop">
              <Button size="lg">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
            <p className="text-gray-600">{itemCount} {itemCount === 1 ? 'item' : 'items'} in your cart</p>
          </div>
          <Link 
            to="/shop" 
            className="flex items-center text-green-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Continue Shopping
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <motion.div
                key={item.plant.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  {/* Plant Image */}
                  <Link to={`/plant/${item.plant.id}`} className="flex-shrink-0">
                    <img
                      src={item.plant.image}
                      alt={item.plant.name}
                      className="w-24 h-24 object-cover rounded-lg hover:opacity-75 transition-opacity"
                    />
                  </Link>

                  {/* Plant Info */}
                  <div className="flex-1 min-w-0">
                    <Link 
                      to={`/plant/${item.plant.id}`}
                      className="text-lg font-semibold text-gray-900 hover:text-green-600 transition-colors"
                    >
                      {item.plant.name}
                    </Link>
                    <p className="text-gray-600 text-sm mt-1">{item.plant.shortDescription}</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        {item.plant.category}
                      </span>
                      <span className={`ml-2 text-xs px-2 py-1 rounded-full ${
                        item.plant.careLevel === 'Easy' ? 'bg-green-100 text-green-700' :
                        item.plant.careLevel === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {item.plant.careLevel}
                      </span>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.plant.id, item.quantity - 1)}
                        className="p-2 hover:bg-gray-50 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="px-4 py-2 font-medium min-w-[3rem] text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.plant.id, item.quantity + 1)}
                        className="p-2 hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right min-w-[4rem]">
                      <p className="text-lg font-semibold text-gray-900">
                        ${(item.plant.price * item.quantity).toFixed(2)}
                      </p>
                      <p className="text-sm text-gray-500">
                        ${item.plant.price} each
                      </p>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromCart(item.plant.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Remove from cart"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6 sticky top-24"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal ({itemCount} items)</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium">
                    {total >= 50 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      '$9.99'
                    )}
                  </span>
                </div>

                {total < 50 && (
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-700">
                      Add ${(50 - total).toFixed(2)} more for free shipping!
                    </p>
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total</span>
                    <span>${(total + (total < 50 ? 9.99 : 0)).toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <Link to="/checkout" className="block w-full">
                <Button size="lg" className="w-full">
                  Proceed to Checkout
                </Button>
              </Link>

              <div className="mt-6 space-y-3 text-sm text-gray-600">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Free shipping on orders over $50
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  30-day health guarantee
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                  Secure checkout
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;