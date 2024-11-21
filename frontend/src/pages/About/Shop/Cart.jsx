import React from 'react';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import Footer from '../../../components/Footer/Footer';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/Navbar/Navbar';

const Cart = ({ cart, removeFromCart, proceedToCheckout }) => {
  return (
    <>
    <Header/>
    <Navbar/>

    <div className="bg-white shadow-lg p-6 rounded-lg w-3/4 md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">Your Cart <FaShoppingCart className="inline" /></h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <span className="ml-4">{item.title} x {item.quantity}</span>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">
                <FaTimes />
              </button>
            </div>
          ))}
          <div className="flex justify-between items-center mt-4">
            <button onClick={proceedToCheckout} className="bg-green-600 text-white py-2 px-4 rounded">
              Proceed to Checkout
            </button>
            <div className="font-bold text-xl">
              Total: {cart.reduce((total, item) => total + (item.price * item.quantity), 0)} USD
            </div>
          </div>
        </div>
      )}
    </div>

    <Footer/>
    </>
  );
};

export default Cart;
