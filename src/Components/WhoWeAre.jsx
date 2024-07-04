import React from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import img1 from '../assets/Rectangle 24.png';

const WhoWeAre = () => {
  return (
    <div className="bg-[#FBFBFB] py-16">
      <div className="max-w-[1160px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pb-10">
          <div className="p-8">
            <h3 className="border rounded-3xl border-[#4D4C7B] px-4 py-1 w-28">
              Who we are{' '}
            </h3>
            <h2 className="font-semibold text-4xl text-[#020043] py-6">
              We Help To Get <br /> Soultions
            </h2>
            <p className="text-[#020043]">
              We are proud to be a trusted healthcare provider in our <br />{' '}
              community, and we look forward to serving you and your <br />{' '}
              family with excellence, integrity, and compassion. Your health{' '}
              <br /> is our priority, and we are here for you every step of the
              way. <br /> We believe in treating each patient with dignity,
              respect, and <br />
              empathy, ensuring that they receive the attention and care <br />{' '}
              they deserve.
            </p>
            <button className="self-center text-black  py-3  flex justify-center items-center gap-1  rounded-xl px-6 bg-[#FFC637] font-semibold mt-10">
              Learn more <GoArrowUpRight className="font-semibold" />
            </button>
          </div>
          <div className="relative text-[#FFFFF5] p-6">
            <img className="rounded-[30px]" src={img1} alt="" />
            <div className="absolute bg-[#343268] rounded-[30px] px-6 py-10 w-4/6 flex justify-center items-end gap-3 -bottom-6 -left-16">
              <div className="">
                <p className="text-[26px] font-semibold py-3">
                  Our mission is simple
                </p>
                <p className="text-[16px] font-normal text-[#ffffffd2] ">
                  To provide high-quality healthcare services that are
                  accessible, personalized, and patient-centered.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
