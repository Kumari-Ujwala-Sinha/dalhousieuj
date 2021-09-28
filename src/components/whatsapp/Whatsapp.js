import React, { useState } from "react";


let isOpen = false;



export default function Whatsapp() {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 220) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div
    className="bg-blue-50"
    
  >
    <div
      className="z-50 fixed bottom-2 pl-3 pb-1.5"
      
    >
      
      <div class="hidden lg:block"><a href="https://web.whatsapp.com/send?phone=+971508039793" target="_blank"><img
                        className="w-16 h-16 rounded-full "
                        src="/whasapp.jfif"
                        alt="Call Us"
                      /></a></div>
                      <div class="block lg:hidden"><a href="https://api.whatsapp.com/send?phone=+971508039793" target="_blank"><img
                        className="w-16 h-16 rounded-full "
                        src="/whasapp.jfif"
                        alt="Call Us"
                      /></a></div>
    </div>
    </div>
    
  );
}
