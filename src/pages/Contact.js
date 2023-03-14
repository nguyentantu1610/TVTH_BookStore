import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall, BiInfoCircle } from "react-icons/bi";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
      <Meta title={"Liên hệ"} />
      <BreadCrumb title="Liên hệ" />
      <Container class1="contact-wrapper py-5 home-wrapper-2">
        <div className="row">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.3032333230403!2d106.69305601535186!3d10.788071361927297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528afcee3d723%3A0x648fc24ef1c0146f!2zxJAuIMSQaeG7h24gQmnDqm4gUGjhu6csIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1678523166229!5m2!1svi!2s"
            width="600"
            height="450"
            className="border-0 w-100"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div className="col-12 mt-5">
          <div className="contact-inner-wrapper d-flex justify-content-between ">
            <div>
              <h3 className="contact-title mb-4">Liên hệ</h3>
              <form action="" className="d-flex flex-column gap-15">
                <div>
                  <input type="text" className="form-control" placeholder="Tên" />
                </div>
                <div>
                  <input type="email" className="form-control" placeholder="Email" />
                </div>
                <div>
                  <input type="tel" className="form-control" placeholder="SĐT" />
                </div>
                <div>
                  <textarea name="" id="" className="w-100 form-control" cols="30" rows="4" placeholder="Nội dung"></textarea>
                </div>
                <div>
                  <button className="button border-0">Gửi</button>
                </div>
              </form>
            </div>
            <div>
              <h3 className="contact-title mb-4">Thông tin chúng tôi</h3>
              <div>
                <ul className="ps-0">
                  <li className="mb-3 d-flex gap-15 align-item-center"><AiOutlineHome className="fs-5" />
                    <address className="mb-0">Ở đâu đó trong ĐBP, TP.HCM, Quận 3</address>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-item-center"><BiPhoneCall className="fs-5" />
                    <a href="SĐT: 0900 xxxx yyyy">0900 xxxx yyyy</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-item-center"><AiOutlineMail className="fs-5" />
                    <a href="Email:duongminhhao23@gmail.com">duongminhhao23@gmail.com</a>
                  </li>
                  <li className="mb-3 d-flex gap-15 align-item-center"><BiInfoCircle className="fs-5" />
                    <p className="mb-0">Mở từ T2 - T6 || 6AM - 7PM</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Contact