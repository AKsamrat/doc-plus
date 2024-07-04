import React from 'react';
import img1 from '../assets/Rectangle 32.png';
import { GoArrowUpRight } from 'react-icons/go';
import logo from '../assets/logo light.png';

const Bbanner = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="max-w-[1160px] mx-auto pb-20">
        <div className=" w-full h-[470px]  object-fill pt-7">
          <div id="slide1" className="carousel-item relative w-full style">
            <img src={img1} className="w-full rounded-[32px]" />
            <div className="absolute rounded-[32px] flex  items-center h-full w-full left-0 top-0 bg-gradient-to-r from-[#020043] from-8% via-[#02004330] via-90%  to-[rgba(2, 0, 67, 0.47)] overflow-hidden flex justify-between items-center  ">
              {/* <div className="flex justify-between items-center w-full h-full"> */}
              <div className=" text-white space-y-10 ml-6 lg:ml-16 ">
                <h2 className="text-[40px] font-bold">
                  Get Your <br /> First Appointment <br /> at 50% Off!
                </h2>

                <div className="flex justify-start items-center gap-3">
                  <button className="self-center text-black  py-2 border-slate-500  flex justify-center items-center gap-1 border-2 rounded-xl px-3 bg-[#FFC637] font-medium">
                    Appointment <GoArrowUpRight />
                  </button>
                  <button className="self-center  py-2 border-slate-500  flex justify-center items-center gap-1 border-2 rounded-xl px-3 ">
                    Learn More <GoArrowUpRight />
                  </button>
                </div>
              </div>
              <div className="flex items-start mr-6 lg:mr-16">
                <img className="pb-72 " src={logo} alt="" />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bbanner;
