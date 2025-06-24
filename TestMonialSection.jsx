import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';

const TestMonialSection = () => {
  return (
    <div className='pb-14 px-8 md:px-0'>
      <h2 className='text-3xl font-medium text-yellow-800'>Testimonial</h2>
      <p className='md:text-base text-gray-500 mt-3'>
        Hear as you share their journeys of transformation, success and how our <br /> platform has made a difference in their lives
      </p>
      <div className='grid grid-cols-auto gap-4 mt-14 cursor-pointer'>
        {dummyTestimonial.map((testimonial, index) => (
          <div
            key={index}
            className='text-sm text-left border border-gray-500/30 pb-6 rounded-lg bg-white shadow-[0px_4px_15px_0px] shadow-black/5 overflow-hidden'
          >
            <div className='flex items-center gap-4 px-5 py-4 bg-gray-500/10'>
              <a href={testimonial.link || '#'} target="_blank" rel="noopener noreferrer">
                <img
                  className='h-12 w-12 rounded-full transition-transform duration-300 hover:scale-110 cursor-pointer'
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </a>
              <div>
                <h1 className='text-lg font-medium text-gray-800'>{testimonial.name}</h1>
                <p className='text-gray-800/80'>{testimonial.role}</p>
              </div>
            </div>
            <div className='p-5 pb-7'>
              <div className='flex gap-0.5'>
                {[...Array(5)].map((_, i) => (
                  <img
                    className='h-5'
                    key={i}
                    src={i < Math.floor(testimonial.rating) ? assets.stand : assets.star_blank}
                    alt="star"
                  />
                ))}
              </div>
              <p className='text-gray-500 mt-5'>{testimonial.feedback}</p>
            </div>
            <a href="#" className='text-blue-500 underline px-5'>Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TestMonialSection;