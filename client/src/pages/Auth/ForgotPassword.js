import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Có gì đó bị lỗi");
    }
  };

  return (
    <Layout title={"Đổi mật khẩu"}>
      <div className="register-bg">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h4 className="title">Thay đổi mật khẩu</h4>

            <div className="mb-4 mt-4">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-control"
                id="email"
                placeholder="Nhập email ..."
                required
                style={{ width: "260px" }}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="form-control"
                id="password"
                placeholder="Nhập mật khẩu mới ..."
                required
                style={{ width: "260px" }}
              />
            </div>

            <div className="mb-4 mt-4">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                className="form-control"
                id="answer"
                placeholder="1 ngày có bao nhiêu giờ ..."
                required
                style={{ width: "260px" }}
              />
            </div>

            <div className="mb-3">
              <button type="submit" className="btn btn-primary">
                Thay đổi
              </button>
            </div>

          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ForgotPassword;
