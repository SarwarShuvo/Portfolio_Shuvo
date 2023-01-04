import React from 'react';

const Volunteer = () => {
    return (
        <section className="bg-[#111827] text-white">
        <div className="container mx-auto ">

            {/* Headline  */}
      <h2 className="text-3xl font-bold ml-10 mb-5 pt-16 pb-10">
        Volunteer
      </h2>

      <div className="grid ml-10 mr-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-24">

        {/* School  */}
        <div className="flex flex-col items-center max-w-sm p-12 bg-[#111827] border drop-shadow-lg border-none  shadow-[0px_0px_10px_3px_#D22B2B]">
            <h4>2019-2021</h4>
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-slate-200 underline underline-offset-8">
            Vice-Chairman
            </h5>
            <small class="font-normal text-slate-100">GAZIPUR STUDENTS ASSOCIATION</small>
          </div>
       
        {/* College  */}
          <div className="flex flex-col items-center max-w-sm p-12 bg-[#111827] border drop-shadow-lg border-none  shadow-[0px_0px_10px_3px_#D22B2B]">
            <h4>2018-2019</h4>
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-slate-200 underline underline-offset-8">
            General Secretary
            </h5>
            <small class="font-normal text-slate-100">SOULS OF GAZIPUR</small>
          </div>

        {/* University  */}
          <div className="flex flex-col items-center max-w-sm p-12 bg-[#111827] border drop-shadow-lg border-none  shadow-[0px_0px_10px_3px_#D22B2B]">
            <h4>2016-2020</h4>
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-slate-200 underline underline-offset-8">
            Member
            </h5>
            <small class="font-normal text-slate-100 text-center">
            BANGLADESH INNOVATION FORUM <br />
              
            </small>
          </div>

          
          <div className="flex flex-col items-center max-w-sm p-12 bg-[#111827] border drop-shadow-lg border-none  shadow-[0px_0px_10px_3px_#D22B2B]">
            <h4>2016-2018</h4>
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-slate-200 underline underline-offset-8">
              Member
            </h5>
            <small class="font-normal text-slate-100 text-center">
            ROBOTICS CLUB, IUBAT
            </small>
          </div>
      </div>
    </div>
    </section>
    );
};

export default Volunteer;