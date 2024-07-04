import React from 'react';

const According = () => {
  return (
    <div className="bg-[#FBFBFB]">
      <div className="max-w-[1160px] mx-auto py-20 text-[#020043] ">
        <h3 className="border rounded-3xl border-[#4D4C7B] px-4 py-1 w-12">
          Faq{' '}
        </h3>
        <h2 className="font-semibold text-4xl text-[#020043] py-4">
          Frequntly Asked Question
        </h2>
        <div className="join join-vertical w-full space-y-2 ">
          <div className="collapse collapse-arrow join-item  ">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
              What are your office hours?
            </div>
            <div className="collapse-content border-t-2 border-base-300 text-[#34326889] pr-24">
              <p>
                Our office hours vary by location, but typically we are open
                Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                may offer extended hours or weekend appointments. Please contact
                your nearest clinic for specific hours.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
              How can I schedule an appointment?
            </div>
            <div className="collapse-content border-t-2 border-base-300 text-[#34326889] pr-24">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
              Do you accept insurance?
            </div>
            <div className="collapse-content border-t-2 border-base-300 text-[#34326889] pr-24">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
              What should I bring to my appointment?
            </div>
            <div className="collapse-content border-t-2 border-base-300 text-[#34326889] pr-24 ">
              <p>hello</p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item ">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium bg-[#FFFFF5]">
              Do you offer telemedicine appointments?
            </div>
            <div className="collapse-content border-t-2 border-base-300 text-[#34326889] pr-2">
              <p>hello</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default According;
