import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa"

const HeaderTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className='flex justify-between items-center'>
          <div className="hidden lg:flex gap-4">  {/* added gap for spacing */}
            <div className="header_top_icon_wrapper flex items-center">
              <FaFacebook />
            </div>
            <div className="header_top_icon_wrapper flex items-center">
              <FaTwitter />
            </div>
            <div className="header_top_icon_wrapper flex items-center">
              <FaLinkedin />
            </div>
            <div className="header_top_icon_wrapper flex items-center">
              <FaInstagram />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;