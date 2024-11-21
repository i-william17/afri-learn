import React from 'react';
import Header from '../../../components/Header/Header';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import ShopItems from './ShopItems';

const Shop = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      <ShopItems/>
      <Footer/>
      
    </div>
  );
}

export default Shop;
