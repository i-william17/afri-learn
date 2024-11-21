import React from 'react';
import { FaRegBookmark, FaTimes } from 'react-icons/fa';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

const Wishlist = ({ wishlist, removeFromWishlist, addToCart }) => {
  return (
    <>
    <Header/>
    <Navbar/>
    
    <div className="bg-white shadow-lg p-6 rounded-lg w-3/4 md:w-1/2">
      <h2 className="text-2xl font-bold mb-4">Your Wishlist <FaRegBookmark className="inline" /></h2>
      {wishlist.size === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div>
          {[...wishlist].map(id => {
            const item = wishlist.find(item => item.id === id);
            return (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <span className="ml-4">{item.title}</span>
                </div>
                <div>
                  <button onClick={() => removeFromWishlist(item.id)} className="text-red-500">
                    <FaTimes />
                  </button>
                  <button onClick={() => addToCart(item)} className="text-blue-600 ml-4">
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>

    <Footer/>
    </>
  );
};

export default Wishlist;
