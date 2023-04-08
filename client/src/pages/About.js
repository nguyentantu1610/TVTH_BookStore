import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"Về chúng tôi"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/aboutus.png"
            alt="contactus"
            style={{ width: "600px", height: "600px" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">Về chúng tôi</h1>

          <p className="text-justify mt-2 text-center">
            TVTH Team chúng tôi cam kết hệ thống an toàn 100% <br />
            Thành viên gồm : Tự - Vàng - Thảo - Hảo
          </p>

          <p className="mt-3"></p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
