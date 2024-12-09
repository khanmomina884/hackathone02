'use client'; // If using React hooks
import Image from 'next/image';

import React from 'react';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Side Table',
      image: '/Granitesquaresidetable1.png',
    },
    {
      id: 2,
      name: 'Side Table',
      image: '/Granitesquaresidetable2.png',
    },
  ];

  return (
    <section className=" py-12 bg-[#FAF4F4]">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-[#FAF4F4] p-6 rounded-lg text-center">
              <Image
                src={product.image}
                alt={product.name}
                width={900}
                height={1000}

                className=" h-[600px] w-[100] object-cover rounded-lg mb-4"
              />
              <h3
                className="text-black mb-2"
                style={{
                  fontFamily: 'Poppins',
                  fontSize: '50px',
                  fontWeight: '500',
                  lineHeight: '54px',
                  textAlign: 'left',
                  textUnderlinePosition: 'from-font',
                  textDecorationSkipInk: 'none',
                  color: 'black', // Ensure the text color is visible
                }}
              >
                {product.name}
              </h3>
              <a
                href="#"
                className="text-black py-2 px-4 rounded-lg font-semibold hover:text-gray-700 transition"
              >
                View More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;