import React from "react";
import { NavLink, Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-blue-50 md:pt-12 pt-4">
      <footer className=" dark:bg-gray-800">
        <div className="container px-6  mx-auto">
          <div className="lg:flex">
            <div className="w-full -mx-6 lg:w-2/5">
              <div className="px-6">
                <div className="flex mt-4 -mx-2">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 text-gray-800 dark:text-gray-800 hover:text-gray-800 dark:hover:text-gray-400"
                    aria-label="Linkden"
                  >
                    <img
                      className="w-10 h-10 rounded-full"
                      src="/facebook.jpg"
                      alt="facebook"
                    />
                  </a>

                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 text-gray-800 dark:text-gray-800 hover:text-gray-800 dark:hover:text-gray-400"
                    aria-label="Facebook"
                  >
                    <img
                      className="w-10 h-10"
                      src="https://image.flaticon.com/icons/png/512/1409/1409946.png"
                      alt="instagram"
                    />
                    
                  </a>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 text-gray-800 dark:text-gray-800 hover:text-gray-800 dark:hover:text-gray-400"
                    aria-label="Facebook"
                  >
                    <img
                      className="w-10 h-10 rounded-lg"
                      src="/youtube.jpg"
                      alt="instagram"
                    />
                    
                  </a>
                  <NavLink to="/contact" onClick={scrollToTop}>
                    <div class="relative shadow-md font-medium mb-2 py-2 px-2 text-purple-500 cursor-pointer bg-blue-50 border-2 border-purple-500 rounded text-lg text-center w-36">
                      <span class="absolute right-0 top-0 animate-ping inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
                      Contact Us
                    </div>
                  </NavLink>

                  {/* <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noreferrer"
                    className="mx-2 text-gray-800 dark:text-gray-800 hover:text-gray-800 dark:hover:text-gray-400"
                    aria-label="Twitter"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 512 512">
                      <path d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z" />
                    </svg>
                  </a> */}
                </div>
                <div class="content flex py-2">
                  <img
                    className="w-35 h-12"
                    src="/visaMaster.png"
                    alt="visaMaster"
                  />
                  <div class="item-body px-2 py-2 text-purple-500 ">Accepted</div>
                </div>
              </div>
            </div>

            <div className="mt-6 lg:mt-0 lg:flex-1 lg:ml-4">
              <div className="grid grid-cols-2 md:gap-6 gap-2 sm:grid-cols-3 md:grid-cols-3">
                <div>
                  <h3 className="text-purple-500 font-bold uppercase dark:text-gray-800">
                    Quick Links
                  </h3>
                  <Link
                    onClick={scrollToTop}
                    to="/"
                    className="block mt-2 text-sm text-purple-500 text-gray-800 dark:text-gray-400 hover:underline"
                  >
                    Home
                  </Link>
                  <Link
                    onClick={scrollToTop}
                    to="/services"
                    className="block mt-2 text-sm text-purple-500 text-gray-800 dark:text-gray-400 hover:underline"
                  >
                    Services
                  </Link>
                  <Link
                    onClick={scrollToTop}
                    to="/technology"
                    className="block mt-2 text-sm text-purple-500 text-gray-800 dark:text-gray-400 hover:underline"
                  >
                    Technology
                  </Link>
                  <Link
                    onClick={scrollToTop}
                    to="/contact"
                    className="block mt-2 text-sm text-purple-500 text-gray-800 dark:text-gray-400 hover:underline"
                  >
                    Contact
                  </Link>
                
                </div>
              <div class="md:hidden block"></div>
                <div class="hidden md:block">
                  <h3 className="text-purple-500 font-bold uppercase dark:text-purple-500">
                    Contact Us
                  </h3>
                  <div className="block mt-2 text-sm text-gray-800 dark:text-gray-400 hover:underline">
                    <div className="inline-flex">
                      <img
                        className="w-4 h-4 rounded-md "
                        src="https://img.icons8.com/ios-glyphs/60/000000/phone-disconnected.png"
                        alt="Call Us"
                      />{" "}
                      <div className="pl-1">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="tel:+971 50 809793"
                          className="text-purple-500"
                        >
                          +971 50 809793
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  
                  <div className="block mt-2 text-sm text-gray-800 dark:text-gray-400 hover:underline">
                    <div className="inline-flex">
                      <img
                        src="https://img.icons8.com/material-rounded/24/000000/mail.png"
                        alt="Company Email"
                        className="w-4 h-4 rounded-md "
                      />
                      <div className="pl-1">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="mailto:Mohamad@eleitlifecoaching.com"
                          className="text-purple-500"
                        >
                         Mohamad@eleitlifecoaching.com
                        </a>{" "}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="mailto:Info@eleitlifecoaching.com"
                          className="text-purple-500"
                        >
                          
                          Info@eleitlifecoaching.com
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div class="md:hidden block">
                  <h3 className="text-purple-500 font-bold uppercase dark:text-purple-500">
                    Contact Us
                  </h3>
                  <div className="block mt-2 text-sm text-gray-800 dark:text-gray-400 hover:underline">
                    <div className="inline-flex">
                      <img
                        className="w-4 h-4 rounded-md "
                        src="https://img.icons8.com/ios-glyphs/60/000000/phone-disconnected.png"
                        alt="Call Us"
                      />{" "}
                      <div className="pl-1">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="tel:+971 50 809793"
                          className="text-purple-500"
                        >
                          +971 50 809793
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  
                  <div className="block mt-2 text-sm text-gray-800 dark:text-gray-400 hover:underline">
                    <div className="inline-flex">
                      <img
                        src="https://img.icons8.com/material-rounded/24/000000/mail.png"
                        alt="Company Email"
                        className="w-4 h-4 rounded-md "
                      />
                      <div className="pl-1">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="mailto:Mohamad@eleitlifecoaching.com"
                          className="text-purple-500"
                        >
                         Mohamad@eleitlifecoaching.com
                        </a>{" "}
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="mailto:Info@eleitlifecoaching.com"
                          className="text-purple-500"
                        >
                          
                          Info@eleitlifecoaching.com
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div class="md:hidden block"></div>

                <div>
                  <h3 className="text-purple-500 font-bold uppercase dark:text-gray-800">
                     Address
                  </h3>
                  <div className="block mt-2 text-sm text-gray-800 dark:text-gray-400 hover:underline">
                    <div className="inline-flex">
                      <img
                        src="https://img.icons8.com/material-outlined/2x/company.png"
                        alt="Company Email"
                        className="w-4 h-4 rounded-md "
                      />
                      <div className="pl-1">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="text-purple-500"
                          href="https://www.google.com/maps/search/106,+17c+Marsa+Garden,+Almouj,+The+Wave+Muscat+Oman/@23.6303419,58.2698818,17z/data=!3m1!4b1"
                        >
                          Silicon Oasis, DDP, Building A2, Dubai, United Arab Emirates
                        </a>{" "}
                      </div>
                    </div>
                  </div>
                  {/* <span className="block mt-2 text-sm text-gray-800 dark:text-gray-400 hover:underline">
                    eleitcoaching.com
                  </span> */}
                </div>
              </div>
            </div>
          </div>

          <hr className="h-px my-6 bg-gray-300 border-none dark:bg-gray-700" />

          <div>
            <div className="md:flex-row pb-30 md:pb-4 flex flex-col text-center text-purple-500 dark:text-purple-500 justify-center">
              <p className="md:border-r-2 px-2 ">
                © eleitlifeCoaching 2021 - All rights reserved
              </p>{" "}
              <p className="px-2"> Developed by EnR Team</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
