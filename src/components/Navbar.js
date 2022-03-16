import React, { useEffect, useState } from "react";

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
      } top-0 p-5 w-full h-[70px] z-10 animations`}
    >
      <div className="flex justify-between">
        {/* Dark */}
        {/* <img
          className="fixed left-0 w-20 object-contain pl-5 cursor-pointer"
          src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png?w=1024"
          alt=".img"
        /> */}
        {/* Light */}
        <img
          className="fixed left-0 top-5 w-20 object-contain pl-5 cursor-pointer"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=".img"
        />
        <img
          className="fixed right-5 w-7 cursor-pointer"
          src="https://cdn-icons-png.flaticon.com/512/197/197559.png"
          alt=".img"
        />
      </div>
    </header>
  );
}

export default Navbar;
