import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="flex w-full h-screen bg-[#FBEBB5]"> {/* Set the background color */}
      {/* Left side content with text */}
      <div className="flex flex-col justify-center px-8 w-1/2 text-left">
        {/* Updated Main Text */}
        <h1
          className="text-black mb-4"
          style={{
            width: '440px',
            height: '192px',
            fontFamily: 'Poppins',
            fontSize: '64px',
            fontWeight: '500',
            lineHeight: '96px',
            textAlign: 'left',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          Rocket single seater
        </h1>

        {/* Removed text above button */}
        
        {/* Updated Button */}
        <a
          href="#shop"
          className="text-black font-semibold hover:text-gray-700 transition"
          style={{
            width: '121px',
            height: '36px',
            textAlign: 'left',
            fontFamily: 'Poppins',
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '36px',
            textUnderlinePosition: 'from-font',
            textDecorationSkipInk: 'none',
          }}
        >
          Shop Now
        </a>
      </div>

      {/* Right side content with sofa image */}
      <div className="w-1/2 flex items-center justify-center bg-[#FBEBB5]">
        <Image
          src="/Rocketsingleseater.png"
          alt="Big Sofa"
          className="bg-[#FBEBB5] max-w-full h-auto "
          width={700}
          height={100}
        />
      </div>
    </section>
  );
};

export default HeroSection;
