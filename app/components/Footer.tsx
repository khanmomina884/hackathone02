

'use client'; // This tells Next.js that this component is a client-side component

import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
  };

  return (
    <footer className="bg-white text-black py-12" style={{ width: '1440px', height: '555px', top: '4497px' }}>
      <div className="container mx-auto px-8">
        {/* Footer Info Box */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 mb-12">
          {/* Address Section */}
          <div className="w-full sm:w-1/4">
            <p
              className="text-sm text-[#9F9F9F]"
              style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '24px',
                textAlign: 'left',
              }}
            >
              400 University Drive Suite 200 Coral Gables, FL 33134 USA
            </p>
          </div>

          {/* Links Section */}
          <div className="w-full sm:w-1/4">
            <h3
              className="text-sm text-[#9F9F9F] font-semibold mb-4"
              style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                textAlign: 'left',
              }}
            >
              Links
            </h3>
            <ul>
              <li><a href="#home" className="text-black hover:text-yellow-400">Home</a></li>
              <li><a href="#shop" className="text-black hover:text-yellow-400">Shop</a></li>
              <li><a href="#about" className="text-black hover:text-yellow-400">About</a></li>
              <li><a href="#contact" className="text-black hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="w-full sm:w-1/4">
            <h3
              className="text-sm text-[#9F9F9F] font-semibold mb-4"
              style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                textAlign: 'left',
              }}
            >
              Help
            </h3>
            <ul>
              <li><a href="#payment" className="text-black hover:text-yellow-400">Payment Options</a></li>
              <li><a href="#returns" className="text-black hover:text-yellow-400">Returns</a></li>
              <li><a href="#privacy" className="text-black hover:text-yellow-400">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-full sm:w-1/4">
            <h3
              className="text-sm text-[#9F9F9F] font-semibold mb-4"
              style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 500,
                lineHeight: '24px',
                textAlign: 'left',
              }}
            >
              Newsletter
            </h3>
            <p className="text-[#9F9F9F] mb-4">Enter your email and subscribe for exclusive offers and updates!</p>
            <form onSubmit={handleSubscribe} className="flex items-center">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-lg text-black"
                required
              />
              <button
                type="submit"
                className="text-black font-semibold border-b-2 border-black hover:text-yellow-400"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Separation Line */}
        <div
          className="border-t border-[#D9D9D9]"
          style={{
            width: '1240px',
            height: '1px',
            top: '4955px',
            left: '100px',
            opacity: 0.5,
          }}
        />

        {/* Bottom Section */}
        <div className="text-left mt-8" style={{ width: '306px', height: '24px', top: '4990px', left: '102.01px' }}>
          <p
            className="text-[#9F9F9F]"
            style={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '24px',
              textAlign: 'left',
            }}
          >
            2022 Meubel House. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

