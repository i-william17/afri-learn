import React from 'react';
import { FaCreditCard, FaCheckCircle } from 'react-icons/fa';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Checkout = ({ cart, completeCheckout }) => {
  const totalAmount = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <>
    <Header/>
    <Navbar/>

    <div className="bg-white shadow-lg p-6 rounded-lg w-3/4 md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">Checkout <FaCreditCard className="inline" /></h2>
      <div>
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <span className="ml-4">{item.title} x {item.quantity}</span>
            </div>
            <div className="font-bold text-xl">
              {item.price * item.quantity} USD
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center mt-4">
        <div className="font-bold text-xl">
          Total: {totalAmount} USD
        </div>
        <button onClick={completeCheckout} className="bg-green-600 text-white py-2 px-4 rounded">
          Complete Checkout <FaCheckCircle className="inline ml-2" />
        </button>
      </div>
    </div>

    <Footer/>
    </>
  );
};

export default Checkout;
