import React from "react";
import image from "../Images/internship.png";
import image2 from "../Images/seo.png";
import image3 from "../Images/coding.png";


const Experience = () => {
  return (
    <div name="experience" className="bg-[#111827] relative text-white">
      <section className="container mx-auto pt-1">
        < h2 className="text-3xl font-bold ml-10 mb-5 pt-5 " > Working Experience</h2 >
       
        <div className="grid ml-10 mr-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-0 pt-6 pb-24">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-800 h-32 w-full"></div>

          <div className="flex flex-col items-center max-w-sm p-6 bg-pink-50 border drop-shadow-lg border-gray-200 rounded-lg hover:bg-white hover:shadow-[0px_0px_20px_3px_#D22B2B]">
            <img className="h-16" src={image3} alt="" />
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-black underline underline-offset-8">
             Jr Software Engineer
            </h5>
            <small class="font-normal text-gray-700 text-center">
              Letheio <br /> Dhaka, Bangladesh
            </small>
          </div>


          <div className="flex flex-col items-center max-w-sm p-6 bg-pink-50 border drop-shadow-lg border-gray-200 rounded-lg hover:bg-white hover:shadow-[0px_0px_20px_3px_#D22B2B]">
            <img className="h-16" src={image2} alt="" />
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-black ">
            Digital Marketing <span className="flex flex-wrap underline underline-offset-8">& SEO Executive</span>
            </h5>
            <small class="font-normal text-gray-700 text-center">
            trioQuad <br />Dhaka, Bangladesh
            </small>
          </div>


          <div className="flex flex-col items-center max-w-sm p-6 bg-pink-50 border drop-shadow-lg border-gray-200 rounded-lg hover:bg-white hover:shadow-[0px_0px_20px_3px_#D22B2B]">
            <img className="h-16" src={image} alt="" />
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-black underline underline-offset-8">
              Internship
            </h5>
            <small class="font-normal text-gray-700">
              Janata Bank Ltd. <br />Gazipur, Dhaka
            </small>
          </div>
        </div>
      </section >
    </div>
  );
};

export default Experience;
