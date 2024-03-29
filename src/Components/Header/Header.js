import React from "react";
import {
  RiFacebookCircleLine,
  RiLinkedinBoxLine,
  RiTwitterLine,
} from "react-icons/ri";
import { FaGithubSquare } from "react-icons/fa";
import image from "../Images/shuvo.jpg";

const Header = () => {

    const handleDownload = () => {
      // Replace 'path/to/your/file.pdf' with the actual file path or URL of your PDF file
      const fileUrl = 'https://drive.google.com/file/d/1LfQ2QsEBrT2VZZBtAJ1AnQosvC1gEpvi/view?usp=sharing';

      window.open(fileUrl, '_blank');
    };


    return (
      // Heading Part
      <section name="home" className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-x-8 justify-items-center mb-16">
          <div className="ml-8 md:ml-16 mt-12">
            <h1 className="text-4xl font-[Oswald] md:text-6xl lg:leading-relaxed mb-5">
              Hey! I'm{" "}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-400">
                Sarwar Shuvo
              </span>
              . <br /> I build things for the web.
            </h1>
            <p className="text-xl">
              I have been working on software field for more then one year and
              develop user interactive web application to fulfill organization's
              needs.
            </p>

            {/* Download Resume Button  */}
            <button className="text-black font-bold bg-gradient-to-r from-pink-600 to-blue-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-sm md:text-lg px-5 py-2.5 text-center mt-5 mr-2 mb-2" onClick={handleDownload}>
              Download PDF
            </button>

            {/* <a href="../Images/Sarwar_Resume.pdf" download
              type="button"
              class="text-black font-bold bg-gradient-to-r from-pink-600 to-blue-400 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 rounded-lg text-sm md:text-lg px-5 py-2.5 text-center mt-5 mr-2 mb-2"
            >
              {""}
              Download Resume
            </a> */}

            {/* Follow Me Button  */}
            <div className="hidden md:block">
              <p className="mt-10 text-xl font-semibold">Follow me:</p>
              <button className="mr-3">
                <a
                  target="_blank"
                  href="https://github.com/SarwarShuvo"
                  rel="noreferrer"
                >
                  <FaGithubSquare size="1.3em" color="b" />
                </a>
              </button>
              <button className="mr-3">
                <a
                  target="_blank"
                  href="https://www.facebook.com/iamsarwarshuvo/"
                  rel="noreferrer"
                >
                  <RiFacebookCircleLine size="1.3em" color="blue" />
                </a>
              </button>

              <button className="mr-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/sarwar-shuvo/"
                  rel="noreferrer"
                >
                  <RiLinkedinBoxLine size="1.3em" color="#0072b1" />
                </a>
              </button>
              <button className="mr-1">
                <a
                  target="_blank"
                  href="https://twitter.com/SarwarShuvo30"
                  rel="noreferrer"
                >
                  <RiTwitterLine size="1.3em" color="#1DA1F2 " />
                </a>
              </button>
            </div>

            {/* Image Part */}
          </div>
          <div>
            <img className="max-w-full h-auto lg:h-[512px] mt-6" src={image} alt="" />
          </div>
        </div>
      </section>
    );
  };

  export default Header;
