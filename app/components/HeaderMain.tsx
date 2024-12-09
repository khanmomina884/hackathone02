import React from 'react';
import { BiUser  } from 'react-icons/bi';
import { BsSearch } from 'react-icons/bs';
import { FiHeart } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';

export const HeaderMain = () => {
    return (
        <div className='border-b border-gray-200 py-6 flex justify-center items-center'>
            <div className='w-full sm:w-[300px] md:w-[70%] relative'>
                <input
                    className='border-gray-200 border p-2 px-4 rounded-lg w-full'
                    type="text"
                    placeholder='Enter any product name...'
                />
                <BsSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400' size={20} />
            </div>

            <div className='hidden lg:flex gap-4 text-gray-500 text-[30px] items-center ml-6'> {/* Add gap and align icons */}
                <BiUser />
                <FiHeart />
                <HiOutlineShoppingBag />
            </div>
        </div>
    );
};
