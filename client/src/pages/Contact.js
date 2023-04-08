import React from "react";
import Layout from "../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title="Liên lạc">
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.png"
            alt="contactus"
            style={{ width: "600px",height: "600px" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">LIÊN LẠC</h1>

          <p className="text-justify mt-2">
            Hãy thoải mái liên lạc với chúng tôi bất kỳ khi nào, chúng tôi lun
            online 24/7
          </p>

          <p className="mt-3">
            <BiMailSend /> : www.duongminhhao23@gmail.com
          </p>

          <p className="mt-3">
            <BiPhoneCall /> : 0xxx 4xxxxx
          </p>

          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (Miễn phí cước)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
