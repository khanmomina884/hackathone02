



import React from 'react';
import Image from 'next/image';

const InstagramContact = () => {
  return (
    <section className="py-12 bg-[#FBEBB5] text-center">
      {/* Instagram Section Header */}
      <h2
        className="text-black mb-4"
        style={{
          fontFamily: 'Poppins',
          fontSize: '60px',
          fontWeight: 700,
          lineHeight: '90px',
          textAlign: 'center',
        }}
      >
        Our Instagram
      </h2>
      <p
        className="text-black mb-6"
        style={{
          fontFamily: 'Poppins',
          fontSize: '20px',
          fontWeight: 400,
          lineHeight: '30px',
          textAlign: 'center',
        }}
      >
        Follow our store on Instagram
      </p>

      
      {/* Instagram Image Section with full size and coverage */}
      <div className="mb-8 relative">
        <Image
          src="/instagram-image.jpg" // Replace with your Instagram image URL
          alt="Instagram feed"
          width={1440} // Image width
          height={450} // Image height
          className="rounded-lg object-cover w-full h-full" // Full coverage and rectangle shape
        />
          </div>

      {/* Follow Us Button */}
      <a
        href="https://www.instagram.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button
          className="text-black font-semibold"
          style={{
            backgroundColor: '#FAF4F4', // Updated background color
            padding: '16px 32px',
            fontSize: '20px',
            borderRadius: '50px 0px 0px 0px',
            boxShadow: '0px 20px 20px 0px #0000001A',
            width: '255px',
            height: '64px',
            opacity: 1,
          }}
        >
          Follow Us
        </button>
      </a>
    </section>
  );
};

export default InstagramContact;
