


import React from 'react';
import Image from 'next/image'; // Import Image for optimized images

const NewArrival = () => {
  return (
    <section
      className="py-12 bg-[#FFF9E5]"
      style={{
        width: '100%', // Full width for responsiveness
        height: 'auto', // Adjust height automatically
      }}
    >
      <div className="container mx-auto px-8 flex flex-col md:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src="/Asgaardsofa 1.png" // Replace with your actual image path
            alt="Asgaard Sofa"
            width={1500} // Increased width for a bigger image
            height={900} // Increased height to make the image bigger
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>

        {/* Content Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          {/* New Arrivals Text */}
          <h2 className="text-black text-2xl font-medium mb-4 text-left">New Arrivals</h2>

          {/* Sofa Name */}
          <h3 className="text-black text-4xl font-bold mb-6 leading-tight">
            Asgaard Sofa
          </h3>

          {/* Order Now Button */}
          <a
            href="#order"
            className="inline-block text-black py-2 px-4 border-2 border-black rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;


