// Layout.js
import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ProductDetailsModal from '../components/ProductDetailsModal';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-text dark:bg-background-dark dark:text-text-dark">
      <Header />
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {children}
      </main>
      <ProductDetailsModal />
    </div>
  );
};

export default Layout;
