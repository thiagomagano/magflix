import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 110) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
      <span className="logo">
        <img
          className="logo-img"
          src="https://fontmeme.com/permalink/200727/00f5cf7e36d644b4b537c3a7e8cae24b.png"
          alt="logo-magflix"
        />
      </span>

      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png"
        alt="User Avatar"
        className="nav-avatar"
      />
    </div>
  );
}

export default Navbar;
