import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import img1 from '../assets/Rectangle 27-2.png';
import img2 from '../assets/Rectangle 27-1.png';
import img3 from '../assets/Rectangle 27.png';

const Services = () => {
  return (
    <div className="bg-[#FBFBFB] py-16">
      <div className="max-w-[1160px] mx-auto  bg-[#FFFFF5] rounded-3xl p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pb-10">
          <div className="p-8">
            <h3 className="border rounded-3xl border-[#4D4C7B] px-4 py-1 w-20">
              Service{' '}
            </h3>
            <h2 className="font-semibold text-4xl text-[#020043] py-6">
              Empowering Health, Enriching Lives
            </h2>
            <p>
              We are committed to providing high-quality, <br /> compassionate
              care to every patient we serve. <br /> Whatever your healthcare
              needs may be, you <br />
              can trust us to be your partner in health and wellness.
            </p>
            <button className="self-center text-black  py-3  flex justify-center items-center gap-1  rounded-xl px-6 bg-[#FFC637] font-medium mt-10">
              Appointment <GoArrowUpRight />
            </button>
          </div>
          <div className="relative text-[#FFFFF5] p-6">
            <img className="rounded-[30px]" src={img1} alt="" />
            <div className="absolute bg-[#020043c3] rounded-[30px] px-2 py-3 w-3/5 flex justify-center items-end gap-3 -bottom-10 lg:bottom-12 left-12">
              <div className="w-2/3">
                <p className="text-[18px] font-semibold py-3">
                  Advanced Technology
                </p>
                <p className="text-[12px] font-normal text-[#ffffffd2]">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
              </div>
              <div className="bg-[#FFC637] rounded-full size-12 flex justify-center items-center text-3xl">
                <GoArrowUpRight />
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          <div className="relative text-[#FFFFF5] p-6">
            <img className="rounded-[30px]" src={img2} alt="" />
            <div className="absolute bg-[#020043c3] rounded-[30px] px-2 py-3 w-3/5 flex justify-center items-end gap-3 -bottom-10 lg:bottom-12 left-12">
              <div className="w-2/3">
                <p className="text-[20px] font-semibold py-3">
                  Online Doctor Meet
                </p>
                <p className="text-[12px] font-normal text-[#ffffffd2] ">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
              </div>
              <div className="bg-[#FFC637] rounded-full size-12 flex justify-center items-center text-3xl">
                <GoArrowUpRight />
              </div>
            </div>
          </div>
          <div className="relative text-[#FFFFF5] p-6">
            <img className="rounded-[30px]" src={img3} alt="" />
            <div className="absolute bg-[#020043c3] rounded-[30px] px-2 py-3 w-3/5 flex justify-center items-end gap-3 -bottom-10 lg:bottom-12 left-12">
              <div className="w-2/3">
                <p className="text-[18px] font-semibold py-3">
                  Consultancy your health
                </p>
                <p className="text-[12px] font-normal text-[#ffffffd2] ">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
              </div>
              <div className="bg-[#FFC637] rounded-full size-12 flex justify-center items-center text-3xl">
                <GoArrowUpRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
