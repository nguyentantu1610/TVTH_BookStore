import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="text-center">Made by TVTH Team &copy; TVTH</h1>
      <p className="text-center mt-3">
        <Link to="/about">Về chúng tôi</Link> |{" "}
        <Link to="/contact">Liên lạc</Link> |{" "}
        <Link to="/policy">Chính sách</Link>
      </p>
    </div>
  );
};

export default Footer;
