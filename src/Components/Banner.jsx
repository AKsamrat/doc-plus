import React from 'react';
import img1 from '../assets/banner.png';

const Banner = () => {
  return (
    <div className="bg-gradient-to-b from-[#e5f6ffbe] from-30% via-[#e5f6ff71] via-40%  to-[#02004307]">
      <div className="max-w-[1160px] mx-auto pb-8">
        <div
          className=" w-full h-[470px]  object-fill m
        pt-7"
        >
          <div id="slide1" className="carousel-item relative w-full style">
            <img src={img1} className="w-full" />
            <div className="absolute rounded-[48px] flex  items-center h-full w-full left-0 top-0 bg-gradient-to-b from-[#00c19e27] from-5% via-[#02004370] via-50%  to-[rgba(2, 0, 67, 0.47)] overflow-hidden  ">
              <div className=" text-white space-y-10 ml-6 lg:ml-16  w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
