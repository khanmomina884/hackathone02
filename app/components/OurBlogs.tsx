


import React from 'react';
import Image from 'next/image'; // Import Image for optimized images

const OurBlog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'Going all-in with millennial design',
      posted: 'Posted on December 1, 2024',
      description: 'Learn how to maintain your sofa and keep it looking new for years to come.',
      image: '/Rectangle 13.png', // Add your image paths here
      link: '#',
    },
    {
      id: 2,
      title: 'Going all-in with millennial design',
      posted: 'Posted on December 3, 2024',
      description: 'Explore our tips for selecting the perfect sofa that complements your home decor.',
      image: '/Rectangle 14.png', // Add your image paths here
      link: '#',
    },
    {
      id: 3,
      title: 'Going all-in with millennial design',
      posted: 'Posted on December 5, 2024',
      description: 'Discover the upcoming trends in sofa designs and what’s trending in 2025.',
      image: '/Rectangle 15.png', // Add your image paths here
      link: '#',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-8 text-center">
        {/* Blog Header */}
        <h2 className="text-4xl font-medium text-black mb-4" style={{ lineHeight: '54px', fontFamily: 'Poppins' }}>
          Our Blogs
        </h2>
        <p className="text-lg text-gray-700 mb-8" style={{ fontFamily: 'Poppins', lineHeight: '24px' }}>
          Find a bright idea to suit your taste with our great selection
        </p>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg">
              {/* Blog Image */}
              <div className="mb-4">
                <Image
                  src={post.image} // Image for each post
                  alt={post.title}
                  width={393} // Adjust size as needed
                  height={220} // Adjust size as needed
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>

              {/* Blog Title */}
              <h3 className="text-xl font-normal text-black mb-2" style={{ fontFamily: 'Poppins', lineHeight: '30px' }}>
                {post.title}
              </h3>

              {/* Blog Posted Time */}
              <p className="text-sm text-gray-600 mb-4" style={{ fontFamily: 'Poppins', lineHeight: '24px' }}>
                {post.posted}
              </p>

              {/* Read More Button */}
              <a
                href={post.link}
                className="inline-block text-black py-2 font-medium"
                style={{
                  width: '130px',
                  height: '46px',
                }}
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-8">
          <a
            href="/blog"
            className="inline-block text-black py-2  font-medium"
            style={{
              width: '126px',
              height: '49px',
            }}
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default OurBlog;

