import React from 'react';

const Contact = () => {
    return (
        // <!-- component --> 
<section id="contact" class="relative w-full min-h-screen bg-[#111827] text-red-500">
<h1 class="text-4xl text-white p-4 font-bold tracking-wide">
    Contact
</h1>
<div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-800 h-32 w-full"></div>

{/* <!-- wrapper -->  */}
<div class="relative p-5 lg:px-20 flex flex-col md:flex-row items-center justify-center">

    {/* <!-- Social Media -->  */}
    <div class="w-full md:w-1/2 p-5 md:px-0 mx-5">
    <div class="bg-black border border-red-500 w-full lg:w-1/2 h-full p-5 pt-8">
        <h3 class="text-2xl font-semibold mb-5 pl-4">
        Get in touch
        </h3>
        {/* <!-- list -->  */}
        <div class="flex flex-col gap-3">
        <p className="flex items-center p-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>West Joydebpur, Gazipur, Dhaka, Bangladesh</span>
				</p>
				<p className="flex items-center p-2">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+8801939007480</span>
				</p>
				<p className="flex items-center p-2 pb-6">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>sarwarshuvo10@gmail.com</span>
				</p>
                <p className='flex items-center p-2 pb-6'>
                Fill in the form to start a conversation

                </p>
        </div>
    </div>
    </div>

    {/* <!-- Contact Me -->  */}
    <form action="#" class="w-full md:w-1/2 border border-red-500 p-6 bg-black">
    <h2 class="text-2xl pb-3 font-semibold">
        Send Message
    </h2>
    <div>
        <div class="flex flex-col mb-3">
        <label for="name">Name</label>
        <input 
            type="text" id="name" 
            class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
            autocomplete="off"
        />
        </div>
        <div class="flex flex-col mb-3">
        <label for="email">Email</label>
        <input 
            type="text" id="email" 
            class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
            autocomplete="off"
        />
        </div>
        <div class="flex flex-col mb-3">
        <label for="message">Message</label>
        <textarea 
            rows="4" id="message" 
            class="px-3 py-2 bg-gray-800 border border-gray-900 focus:border-red-500 focus:outline-none focus:bg-gray-800 focus:text-red-500"
        ></textarea>
        </div>
    </div>
    <div class="w-full pt-3">
        <button type="submit" class="w-full bg-gray-900 border border-red-500 px-4 py-2 transition duration-50 focus:outline-none font-semibold hover:bg-red-500 hover:text-white text-xl cursor-pointer">
        Send
        </button>
    </div>
    </form>
</div>
</section>
    );
};

export default Contact;