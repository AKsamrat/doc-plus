import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import img6 from '../assets/Ellipse 3.png';
import img7 from '../assets/Ellipse 4.png';
import img8 from '../assets/Ellipse 5.png';

const Testimonial = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="max-w-[1160px] mx-auto py-20">
        <h3 className="border rounded-3xl border-[#4D4C7B] px-4 py-1 w-24">
          Testimonial{' '}
        </h3>
        <h2 className="font-semibold text-4xl text-[#020043] py-4">
          What they say about us
        </h2>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="p-6 rounded-2xl  bg-[#FFFFF5]">
              <h2 className="font-semibold text-[20px] pb-3">
                Expertise and Compassion Combined
              </h2>
              <p>
                I can't thank enough for their exceptional care. The doctors and
                staff showed incredible expertise and compassion throughout my
                treatment journey. I felt truly cared for every step of the way.
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <img
                  src={img6}
                  alt=""
                  className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                />
                <div>
                  <p className="text-sm font-semibold">
                    Sarah D,{' '}
                    <span className="text-sm font-normal">IT Professional</span>
                  </p>
                  <p className=" text-[#4D4C7B]">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 rounded-2xl  bg-[#FFFFF5]">
              <h2 className="font-semibold text-[20px] pb-3">
                Life-Saving Care, Life-Changing Experience
              </h2>
              <p>
                My experience at [Healthcare Provider Name] was life-changing.
                The prompt and accurate diagnosis, coupled with the advanced
                treatments they provided, saved my life.
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <img
                  src={img7}
                  alt=""
                  className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                />
                <div>
                  <p className="text-sm font-semibold">
                    Michael R,{' '}
                    <span className="text-sm font-normal">
                      Business Executive
                    </span>
                  </p>
                  <p className="text-sm dark:text-gray-600">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 rounded-2xl  bg-[#FFFFF5]">
              <h2 className="font-semibold text-[20px] pb-3">
                A Partner in Health and Wellness
              </h2>
              <p>
                As a busy professional, I appreciate the convenience and quality
                of care I receive at [Healthcare Provider Name]. From
                telemedicine consultations to routine check-ups, they've become
                my trusted partner in health and
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <img
                  src={img8}
                  alt=""
                  className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
                />
                <div>
                  <p className="text-sm font-semibold">
                    David S, <span className="text-sm font-normal">Lawyer</span>
                  </p>
                  <p className="text-sm dark:text-gray-600">
                    <div className="rating">
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                        defaultChecked
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                      <input
                        type="radio"
                        name="rating-2"
                        className="mask mask-star-2 bg-orange-400"
                      />
                    </div>
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
