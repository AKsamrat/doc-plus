import React from 'react';
import img1 from '../assets/Group 12.png';
import img2 from '../assets/Group.png';
import img3 from '../assets/contract (1) 1.png';
import img4 from '../assets/Group (1).png';
import img5 from '../assets/Ellipse 2.png';
import img6 from '../assets/Ellipse 3.png';
import img7 from '../assets/Ellipse 4.png';
import img8 from '../assets/Ellipse 5.png';

const Care = () => {
  return (
    <div className="bg-gradient-to-b from-[#02004307] from-30% via-[#02004307] via-40%  to-[#FBFBFB] py-20">
      <div className="max-w-[1160px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="col-span-1 bg-white p-4 rounded-3xl ">
          <p className="text-3xl lg:text-5xl font-semibold">90%</p>
          <p className="text-[14px] text-[#020043] py-4">
            Patient satisfaction <br /> rate, reflecting our <br /> commitment.
          </p>
          <div className="flex justify-center items-center">
            <img src={img1} alt="" />
          </div>
        </div>
        <div className="col-span-3">
          <p className="text-[#020043] text-[48px] font-semibold text-center">
            Comprehensive Care for Every Patient
          </p>
          <div className="grid grid-cols-3 gap-5">
            {/* small card 1 */}
            <div className="bg-[#FFFFF5] rounded-3xl p-5">
              <p className="text-3xl lg:text-5xl font-semibold">500+</p>
              <p className="text-[14px] text-[#020043] py-4">
                Board-certified <br /> doctors
              </p>
              <div className="flex justify-end items-center">
                <img src={img3} alt="" />
              </div>
            </div>
            <div className="bg-white rounded-3xl h-5/6 p-5 mt-[44px]">
              <div className="flex justify-start items-center gap-2">
                <p className="text-3xl lg:text-5xl font-semibold">4.8</p>
                <div className="rating">
                  <input
                    type="radio"
                    name="rating-8"
                    className="mask mask-star-2 bg-orange-400"
                    defaultChecked
                  />
                </div>
              </div>
              <p className="text-[14px] text-[#020043] py-4">
                Over 20,000 Patient
              </p>
              <div className="flex justify-center items-center ">
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
              </div>
            </div>
            <div className="bg-[#FFFFF5] rounded-3xl p-5">
              <p className="text-3xl lg:text-5xl font-semibold">$5000</p>
              <p className="text-[14px] text-[#020043] py-4">
                Money spend for <br /> poor patient
              </p>
              <div className="flex justify-end items-center">
                <img src={img4} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 bg-white p-4 rounded-3xl">
          <p className="text-3xl lg:text-5xl font-semibold">50+</p>
          <p className="text-[14px] text-[#020043] py-4">
            Free lession video <br /> for patient
          </p>
          <div className="flex justify-center items-center">
            <img src={img2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;
