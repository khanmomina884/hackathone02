


'use client';


import React from 'react';

const TopPicks = () => {
  const topPicks = [
    {
      id: 1,
      name: 'Trenton modular sofa_',
      price: 'Rs. 25,000.00',
      image: '/Trentonmodularsofa_3 1.png', // Ensure this path is correct
    },
    {
      id: 2,
      name: 'Granite dining table with dining chair',
      price: 'Rs. 25,000.00',
      image: 'Granitediningtablewithdiningchair 1.png',
    },
    {
      id: 3,
      name: 'Outdoor bar table and stool',
      price: 'Rs. 25,000.00',
      image: '/Outdoortable.png',
    },
    {
      id: 4,
      name: 'Plain console with teak mirror',
      price: 'Rs. 25,000.00',
      image: '/Plain1.png',
    },
  ];

  return (
    <section
      className="py-12"
      style={{
        backgroundColor: '#FFFFFF', // Section background color
      }}
    >
      <div className="container mx-auto px-8">
        <h2
          className="text-black mb-8"
          style={{
            fontFamily: 'Poppins',
            fontSize: '36px',
            fontWeight: '500',
            lineHeight: '54px',
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
            width: '311px',
            height: '54px',
            margin: '0 auto', // Center horizontally
          }}
        >
          Top Picks For You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {topPicks.map((product) => (
            <div
              key={product.id}
              className="p-6 rounded-lg text-center"
              style={{
                width: '287px',
                height: '397px',
                gap: '0px',
                backgroundColor: '#FFFFFF', // Card background color
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-lg mb-4"
              />
              <h3
                className="text-black mb-2"
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  fontWeight: '400',
                  lineHeight: '24px',
                  textAlign: 'left',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                  width: '199px',
                  height: '48px',
                  gap: '0px',
                  opacity: '1', // Ensure full visibility
                  color: '#000000', // Black text for visibility
                }}
              >
                {product.name}
              </h3>
              <p className="text-xl text-gray-700 mb-4">{product.price}</p>
            </div>
          ))}
        </div>
        {/* View More Button Below */}
        <div className="text-center mt-8">
          <a
            href="/top-picks" // Link to full Top Picks page
            className="text-black font-semibold hover:text-gray-700 transition"
            style={{
              padding: '12px 24px',
              textDecoration: 'underline', // Remove background and make it simple
              border: 'none', // Remove any button styling
            }}
          >
            View More
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopPicks;
