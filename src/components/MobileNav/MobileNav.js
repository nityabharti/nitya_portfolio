import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./MobileNav.css";

const MobileNav = () => {
  return (
    <>
      <div className="mobile-nav">
        <div className="mobile nav-header">
          <GiHamburgerMenu size={30} />
          <span>My Portfolio App</span>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
