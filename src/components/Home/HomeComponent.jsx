import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./style.css";
// const images = [
//   {
//     url: "https://content.thriveglobal.com/wp-content/uploads/2020/03/lifecoach.jpg",
//   },
//   {
//     url: "https://polyglotclub.com/services/wp-content/uploads/2019/07/What-to-expect-from-coaching-644x405.jpg",
//   },
//   {
//     url: "https://thehundred.ae/wp-content/uploads/2020/11/Emotion-Relationship-Coaching.jpg",
//   },
//   { url: "http://www.aboutlifeissues.com/images/lifecoaching.jpg" },
// ];

function HomeComponent() {
  return (
    <div>
      <div style={{background:"linear-gradient(to right, #dbeff6, #e6f3fb,#f4f9fd, #f5fafe)"}}>
        <div className="">
        <div class="fixed right-3.5 z-50 block md:hidden"><a target="_blank"
                          rel="noreferrer"
                          href="tel:+97150809793"><img
                        className="w-16 h-16 rounded-full "
                        src="/call.png"
                        alt="Call Us"
                      /></a></div>
          <Carousel autoPlay={true} interval={2000}>
            <div>
              <img src="/slider1.jpeg" />
            </div>
            <div>
              <img src="/slider2.jpeg" />
            </div>
            <div>
              <img src="https://source.unsplash.com/1600x900/?dubai" />
            </div>
          </Carousel>
        </div>

        {/* <div class="md:py-6 py-6">
            <div class=" max-w-3xl mx-auto text-center ">
              <h2 class="md:text-6xl text-4xl text-gray-500 dark:text-white font-bold mb-4">
                Our Target
              </h2>
              <div className=" w-full flex flex-col space-y-4 pt-8">
                <p className="md:leading-loose leading-relaxed md:text-lg text-sm">
                  To equip people to grow personally, and make progress in life
                  areas which they want to improve, e.g. relationships, career,
                  personal growth, communication, health, family life or even
                  work-life balance.
                  <br />
                </p>
              </div>
            </div>
          </div> */}
        <div className="py-16">
          <div className="container m-auto pl-2">
            <div className="flex lg:flex-row-reverse flex-col justify-evenly items-center">
              
              <div className="lg:w-5/12 order-2">
                <img
                  src="https://images.unsplash.com/photo-1496275068113-fff8c90750d1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                  alt="xxy"
                  className="rounded h-80 w-full"
                />
              </div>
              <div className="lg:w-6/12 lg:p-0 py-4 pr-2">
                <div class=" max-w-3xl mx-auto ">
                  <h2 class="body-font md:text-5xl text-3xl text-gray-500 dark:text-white font-bold mb-4">
                    About Us
                  </h2>
                  <div className=" w-full flex flex-col space-y-4 pt-8">
                    <p className="body-font tracking-wider leading-relaxed md:text-xl body-font">
                      Take your life, career, or relationships to the next
                      level!
                    </p>
                    <p className="body-font tracking-wider leading-relaxed md:text-xl body-font">
                      We are a team of dedicated certified life coaches driven
                      to help people live happier lives with the help of a
                      professional guide to reach their goals. By providing
                      strategic methods to achieve a meaningful and joyful life.
                      <br />
                      <span className="">
                        {" "}
                        PROFESSIONAL, CERTIFIED, AND VETTED COACHES THAT YOU CAN
                        TRUST{" "}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16">
          <div className="container m-auto px-2">
            <div className="flex lg:flex-row-reverse flex-col justify-evenly items-center">
              <div className="lg:w-5/12 order-2">
                <img
                  src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Ftarget%2Ftarget_PNG28.png&f=1&nofb=1"
                  alt="xxy"
                  className="rounded h-80 w-full"
                />
              </div>
              <div className="lg:w-6/12 lg:p-0 py-4 px-2">
                <div class=" max-w-3xl mx-auto ">
                  <h2 class="md:text-5xl text-3xl text-gray-500 dark:text-white font-bold mb-4">
                    Our Target
                  </h2>
                  <div className=" w-full flex flex-col space-y-4 pt-8">
                    <p className="tracking-wider leading-relaxed md:text-xl">
                      To equip people to grow personally, and make progress in
                      life areas which they want to improve, e.g. relationships,
                      career, personal growth, communication, health, family
                      life or even work-life balance.
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <section className=" hero container max-w-screen-lg mx-auto pb-10">

        </section>

          {/*<img
            alt="improved"
            class="hidden md:block object-cover object-center w-full h-full block"
            src="./improved1.jpg"
          />
           <img
            alt="improved"
            class="block md:hidden object-cover object-center w-full h-full block"
            src="./improved1.jpeg"
          />*/}

        {/* <div class="container bg-white px-6">
          <div class="flex flex-col md:flex-row items-center justify-between relative w-100 h-auto md:h-64 bg-100 shadow-2xl rounded-lg p-8">
            <div class="w-8/12 text-2xl">
              <span class="flex">
                To equip people to grow personally, and make progress in life
                areas which they want to improve, e.g. relationships, career,
                personal growth, communication, health, family life or even
                work-life balance.
              </span>
            </div>
            <div class="relative shadow-md font-medium my-5 py-2 px-4 text-white cursor-pointer bg-gray-500 hover:bg-gray-500 rounded text-lg text-center w-48">
              <span class="absolute right-0 top-0 animate-ping inline-flex rounded-full h-3 w-3 bg-gray-500"></span>
              Book now
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default HomeComponent;
