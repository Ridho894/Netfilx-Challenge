import React, { useEffect, useState } from "react";
import Logo from "../assets/netflix-logo-png.png";

function Navbar() {
  const [show, setShow] = useState(false);
  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);
  return (
    <header
      className={`fixed ${
        show && "bg-dark"
      } top-0 w-full h-[70px] z-10 animations`}
    >
      <div className="flex justify-between py-4 max-w-7xl mx-auto">
        <img
          className="w-20 object-contain cursor-pointer"
          src={Logo}
          alt=".img"
        />
        <img
          className="w-10 h-10 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/197/197559.png"
          alt=".img"
        />
      </div>
    </header>
  );
}

export default Navbar;
