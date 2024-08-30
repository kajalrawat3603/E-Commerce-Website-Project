import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Footer from './components/Footer.jsx';
import Fashion from './components/Fashion.jsx';
import Login from './components/Login.jsx';
import Product from './components/Product.jsx';
import Signup from './components/Signup.jsx';
import ForgotPassword from './components/ForgotPassword.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import Contact from './components/Contact.jsx';
import Cart from './components/Cart.jsx';
import Gift from './components/Gift.jsx';
import Blog from './components/Blog.jsx';
import UserDetails from './components/UserDetails.jsx';
import ScrollToTop from './components/ScrollToTop';
const AppContent = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const hideNavAndFooter = [
    '/login',
    '/signup',
    '/forgot-password',
    '/reset-password/',
  ].some(path => currentPath.startsWith(path));

  const getIsLoggedInFromCookie = () => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; isLoggedIn=`);
    if (parts.length === 2) return parts.pop().split(';').shift() === 'true';
    return false;
  };

  const [isLoggedIn, setIsLoggedIn] = useState(() => getIsLoggedInFromCookie());

  useEffect(() => {
    document.cookie = `isLoggedIn=${isLoggedIn}; max-age=7200; path=/`; 
  }, [isLoggedIn]);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = async () => {
    try {
      await fetch('https://e-commerce-website-project.onrender.com/logout', {
        method: 'POST',
        credentials: 'include',
      });
      setIsLoggedIn(false);
      window.location.href = '/login';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <>
      {!hideNavAndFooter && <Nav isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/gifts" element={<Gift />} />
        <Route path="/login" element={<Login setIsLoggedIn={handleLoginSuccess} />} />
        <Route path="/products/:productId" element={<Product />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<UserDetails />} />
      </Routes>
      <ScrollToTop />
      {!hideNavAndFooter && <Footer />}
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
