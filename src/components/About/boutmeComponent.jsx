import React from "react";

function boutmeComponent() {
  return (
    <div style={{background:"linear-gradient(to right, #dbeff6, #e6f3fb,#f4f9fd, #f5fafe)"}}>
      <div class="fixed right-3.5 z-50 block md:hidden"><a target="_blank"
                          rel="noreferrer"
                          href="tel:+97150809793"><img
                        className="w-16 h-16 rounded-full"
                        src="/call.png"
                        alt="Call Us"
                      /></a></div>
      <section className="text-gray-600 body-font">
      <img
            className=" mb-10 w-screen object-fill object-center rounded"
            alt="hero"
            src="/eit.jpeg"
          />
        <div className="container  flex items-center justify-center flex-col">
          <section class="text-gray-600 body-font">
            <div class="container px-5 py-12">
              <div className="lg:mx-24 md:mx-8 mx-2">
                <p className="leading-relaxed mb-20 lg:text-3xl md:text-xl text-gray-400">
                  Hello , I’m Mohamad ! <br />
                  <br />
                  As a Life Coach, I help you tap into your full potential, find
                  direction, identify and accomplish your goals. You are born
                  with unique talents, desires, and motivations; I coach to
                  bring those amazing qualities in alignment with your goals and
                  bring a strong sense of purpose and direction to your everyday
                  life. With proven tools and techniques, my clients get to
                  discover their true self, their true desires, and manifest the
                  life of their dreams. Take your life, career, or relationships
                  to the next level!
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default boutmeComponent;
