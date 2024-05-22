import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import ProductForm from './ProductForm';
import Products from './Products';
import './Product.css'
import ProductDetails from './ProductDetails';

const Navigation = () => {
  return (
    <><nav className="navbar">
    <ul className="nav-list">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/products">Products</Link>
      </li>
    </ul>
  </nav>

      <Routes>
        <Route path="/" element={<ProductForm />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
};

export default Navigation;
