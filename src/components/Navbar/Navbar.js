import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import NavLinks from "./NavbarLinks";
import "./navbarstyle.css";

let isOpen = false;

const Toggle1 = (y, x) => {
  //   console.log("closed");
  y.style.display = "none";
  x[0].style.transform = "none";
  x[1].style.opacity = "100";
  x[2].style.transform = "none";
  isOpen = false;
};
const Toggle2 = (y, x) => {
  //   console.log("open");
  y.style.display = "block";
  y.style.animation = "fade-in 1s ease-in";
  x[0].style.transform = "rotate(-45deg) translate(-5px,6px)";
  x[0].style.transition = "transform 0.4s ease-in";
  x[1].style.opacity = "0";
  x[1].style.transition = "opacity 0.2s ease-in";
  x[2].style.transform = "rotate(45deg) translate(-5px,-6px)";
  x[2].style.transition = "transform 0.4s ease-in";
  isOpen = true;
};

const handleClick = () => {
  const y = document.getElementById("drop-down");
  const x = document.getElementById("nav_parent").children;
  isOpen ? Toggle1(y, x) : Toggle2(y, x);
};

export default function Navbar() {
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
      className={
        !colorChange
          ? `block text-purple-500  z-50 sticky top-0 md:bg-transparent shadow-xl `
          : `block text-purple-500  z-50 sticky top-0 bg-white`
      }
      style={{ background: `url("/bg.jpeg")`, width: "100%" }}
    >
      <div className="flex justify-center">
        <img className="w-52 h-24" src="/Logo.png" alt="Logo" />
      </div>

      <div className="flex justify-between items-center">
        
      
      
        <div className="hidden sm:flex ml-60 text-md pb-3 justify-center" id="">

          <NavLinks />
        </div>
        

        
        
        <div
          className="sm:hidden py-4 cursor-pointer"
          id="nav_parent"
          onClick={handleClick}
        >
          <div id="div1" className="h-1 w-6 m-1 bg-purple-500"></div>
          <div id="div2" className="h-1 w-6 m-1 bg-purple-500"></div>
          <div id="div3" className="h-1 w-6 m-1 bg-purple-500"></div>
        </div>
      </div>
      <div
        className="hidden sm:hidden text-purple-500 text-sm py-3"
        id="drop-down"
      >
        <NavLinks colorChange={colorChange} />
      </div>
      
      <div className="fixed right-3.5 top-16 z-100">
        <a target="_blank"
                          rel="noreferrer"
                          href="tel:+97150809793" class="tip hidden md:block "><img
                        className="w-16 h-16 rounded-full "
                        src="/call.png"
                        alt="Call Us"
                      /><span>+97150809793</span></a>
                      </div>
     
    </div>
  );
}
