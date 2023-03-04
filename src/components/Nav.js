import React from "react";
import { FaAlignJustify } from "react-icons/fa";
const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">                        
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
                <a href="">Trang Chủ</a>
              </li>
              <li>
                <a href="">Món Ăn Trending</a>
              </li>
              <li>
                <a href="">Liên Hệ</a>
              </li>
              <li>
                <a href="">Món Ăn Hot</a>
              </li>
              <li>
                <a href="">Đặt Nhanh</a>
              </li>
              <li>
                <a href="">Thử Thách</a>
              </li>
              <li>
                <a href="">Quà Tặng</a>
              </li>
            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
