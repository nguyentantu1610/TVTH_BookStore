import React from 'react'
import { Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h2 className="mb-0 text-white">Đăng ký để nhận tin mới nhất</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Địa chỉ email..."
                  aria-label="Địa chỉ email..."
                  aria-describedby="basic-addon2"
                />

                <span className="input-group-text p-2" id="basic-addon2">
                  Đăng ký
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Thông tin <br /> Liên lạc</h4>
              <div></div>
            </div>
            
            <div className="col-3">
              <h4 className="text-white mb-4">Thông tin</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Chính sách chính</Link>
                <Link className="text-white py-2 mb-1">Chính sách hoàn trả</Link>
                <Link className="text-white py-2 mb-1">Chính sách mua bán</Link>
                <Link className="text-white py-2 mb-1">Điều khoản và điều kiện</Link>
              </div>
            </div>
            
            <div className="col-3">
              <h4 className="text-white mb-4">Giới thiệu</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Về chúng tôi</Link>
                <Link className="text-white py-2 mb-1">Thông tin liên lạc</Link>
                <Link className="text-white py-2 mb-1">(...)</Link>
              </div>
            </div>
            
            <div className="col-2">
              <h4 className="text-white mb-4">Mục nhanh</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Truyện tranh</Link>
                <Link className="text-white py-2 mb-1">Tiểu thuyết</Link>
                <Link className="text-white py-2 mb-1">Truyện thiếu nhi</Link>
                <Link className="text-white py-2 mb-1">Truyện nước ngoài</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Phát triển bởi nhóm TVTH </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;