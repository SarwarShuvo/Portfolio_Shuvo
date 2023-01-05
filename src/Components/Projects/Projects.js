import React from "react";
import image from "../Images/1.png";
import image2 from '../Images/letheio.png'
import image3 from '../Images/expen.png'
import image4 from '../Images/protassha.png'

const Projects = () => {
  return (
    <section className="bg-[#111827]">
      <div className="container mx-auto pb-2">
        <h2 className="text-3xl text-white font-bold ml-10 mb-5 pt-16">
          Projects
        </h2>
        
        {/* Project List  */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-10">
          <div class="lg:grid justify-center antialiased bg-gray-900 text-gray-200 grid-cols-2 shadow-xl shadow-red-800 gap-4 max-w-6xl mx-auto p-4 sm:px-6 h-full items-center">
              <div>
                <img
                  class=""
                  src={image}
                  width="4500"
                  height="308"
                  alt="portfolio website"
                />
              </div>
              <div>
                <header>
                  <div class="mb-3">
                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                      <li class="m-1">
                        <a
                          class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Website
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                    Portfolio Website
                  </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum ad omnis totam, minus eum quasi nisi? Fuga
                </p>
                <footer class="flex items-center mt-4">
                  <div>
                    <span class="text-gray-500">Jan 19, 2020</span>
                  </div>
                </footer>
              </div>
          </div>


          <div class="lg:grid justify-center antialiased bg-gray-900 text-gray-200 grid-cols-2 shadow-xl shadow-red-800 gap-4 max-w-6xl mx-auto p-4 sm:px-6 h-full items-center">
              <div>
                <img
                  class=""
                  src={image2}
                  width="4500"
                  height="308"
                  alt="portfolio website"
                />
              </div>
              <div>
                <header>
                  <div class="mb-3">
                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                      <li class="m-1">
                        <a
                          class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Website
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                    Letheio Website
                  </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum ad omnis totam, minus eum quasi nisi? Fuga
                </p>
                <footer class="flex items-center mt-4">
                  <div>
                    <span class="text-gray-500">Jan 19, 2020</span>
                  </div>
                </footer>
              </div>
          </div>


          <div class="lg:grid justify-center antialiased bg-gray-900 text-gray-200 grid-cols-2 shadow-xl shadow-red-800 gap-4 max-w-6xl mx-auto p-4 sm:px-6 h-full items-center">
              <div>
                <img
                  class=""
                  src={image3}
                  width="4500"
                  height="308"
                  alt="portfolio website"
                />
              </div>
              <div>
                <header>
                  <div class="mb-3">
                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                      <li class="m-1">
                        <a
                          class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Website
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  Personal Expense Tracker
                  </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum ad omnis totam, minus eum quasi nisi? Fuga
                </p>
                <footer class="flex items-center mt-4">
                  <div>
                    <span class="text-gray-500">Jan 19, 2020</span>
                  </div>
                </footer>
              </div>
          </div>

          
          <div class="lg:grid justify-center antialiased bg-gray-900 text-gray-200 grid-cols-2 shadow-xl shadow-red-800 gap-4 max-w-6xl mx-auto p-4 sm:px-6 h-full items-center">
              <div>
                <img
                  class=""
                  src={image4}
                  width="4500"
                  height="308"
                  alt="portfolio website"
                />
              </div>
              <div>
                <header>
                  <div class="mb-3">
                    <ul class="flex flex-wrap text-xs font-medium -m-1">
                      <li class="m-1">
                        <a
                          class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out"
                          href="#0"
                        >
                          Website
                        </a>
                      </li>
                    </ul>
                  </div>
                  <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2">
                  Point Of Sale
                  </h3>
                </header>
                <p class="text-lg text-gray-400 flex-grow">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolorum ad omnis totam, minus eum quasi nisi? Fuga
                </p>
                <footer class="flex items-center mt-4">
                  <div>
                    <span class="text-gray-500">Jan 19, 2020</span>
                  </div>
                </footer>
              </div>
          </div>
        </div>
        </div>
  
    </section>
  );
};

export default Projects;
