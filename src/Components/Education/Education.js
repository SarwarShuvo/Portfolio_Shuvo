import React from "react";

const Education = () => {
  return (
    <section className="bg-gradient-to-r from-sky-400 via-purple-400 to-red-300">
        <div className="container mx-auto ">

            {/* Headline  */}
      <h2 className="text-3xl font-bold ml-10 mb-5 pb-10 ">
        Educational Background
      </h2>

      <div className="grid ml-10 mr-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">

        {/* School  */}
          <div className="flex flex-col items-center max-w-sm p-12 bg-white border drop-shadow-lg border-gray-200 rounded-lg hover:bg-white hover:shadow-[0px_0px_20px_3px_#63b3ed]">
            <h4>2007-2013</h4>
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-black dark:text-white underline underline-offset-8">
              Secondary School Certificate
            </h5>
            <small class="font-normal text-gray-700 text-center">
              Rani Bilashmoni Government Boys' High School
            </small>
          </div>
       
        {/* College  */}
          <div className="flex flex-col items-center max-w-sm p-12 bg-white border drop-shadow-lg border-gray-200 rounded-lg hover:bg-white hover:shadow-[0px_0px_20px_3px_#63b3ed]">
            <h4>2013-2015</h4>
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-black dark:text-white underline underline-offset-8">
            Higher Secondary Certificate
            </h5>
            <small class="font-normal text-gray-700">M.E.H Arif College</small>
          </div>

        {/* University  */}
          <div className="flex flex-col items-center max-w-sm p-12 bg-white border drop-shadow-lg border-gray-200 rounded-lg hover:bg-white hover:shadow-[0px_0px_20px_3px_#63b3ed]">
            <h4>2016-2020</h4>
            <h5 class="mb-5 mt-2 text-md font-[ZenDots] whitespace-nowrap tracking-widest font-extrabold text-black dark:text-white underline underline-offset-8">
                 Bachelor of Science
            </h5>
            <small class="font-normal text-gray-700 text-center">
              Department of Computer Science and Engineering <br />
              INTERNATIONAL UNIVERSITY OF BUSINESS AGRICULTURE AND TECHNOLOGY
            </small>
          </div>
      </div>
    </div>
    </section>
  );
};

export default Education;
