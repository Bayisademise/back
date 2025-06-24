import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Add your subscription logic here
      console.log('Subscribed with email:', email);
      setEmail('');
    }
  };

  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="flex flex-col md:flex-row items-start px-8 md:px-0 justify-center gap-10 md:gap-32 py-10 border-b border-white/30">
        <div className="flex flex-col md:items-start items-center w-full">
          <img src={assets.logo} alt="logo_dark" />
          <p className="mt-6 text-center md:text-left text-sm text-white/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt nisi qui fugiat porro sed delectus veniam blanditiis. Sint perspiciatis accusamus, excepturi sunt veniam ex similique illum quis provident libero hic!
          </p>
        </div>
        <div className="flex flex-col md:items-start items-center w-full">
          <h2 className="font-semibold text-white mb-5">University</h2>
          <ul className="flex md:flex-col w-full justify-between text-sm text-white/80 md:space-y-2">
            <li><Link to="homess">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contactus">Contact Us</Link></li>
            <li><Link to="/privacypolicy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="hidden md:flex flex-col items-start w-full">
          <h2 className="font-semibold text-white mb-5">Subscribe to our newsletter</h2>
          <p className="text-white/80">The latest news, articles, and resources, sent to your inbox weekly</p>
          <div className="flex items-center gap-2 pt-4">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm"
            />
            <button 
              onClick={handleSubscribe}
              className="bg-blue-600 w-24 h-9 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-white/60">Copyright 2025 Students All Rights Reserved</p>
    </footer>
  );
};

export default Footer;