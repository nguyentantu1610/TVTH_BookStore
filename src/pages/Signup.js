import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <Meta title={"Đăng ký"} />
      <BreadCrumb title='Đăng ký' />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3 className="text-center mb-3">Đăng ký</h3>
                <form action="" className="d-flex flex-column gap-15">
                  <div>
                    <input type="text"
                      name="name"
                      placeholder="Nhập Tên"
                      className="form-control" />
                  </div>

                  <div>
                    <input type="email"
                      name="email"
                      placeholder="Nhập email"
                      className="form-control" />
                  </div>

                  <div>
                    <input type="tel"
                      name="mobile"
                      placeholder="Nhập SĐT"
                      className="form-control" />
                  </div>

                  <div className="mt-1">
                    <input type="password"
                      name="password"
                      placeholder="Nhập mật khẩu"
                      className="form-control" />
                  </div>
                  <div>
                    <div className="mt-3 d-flex justify-content-center gap-15 align-items-center">
                      <button className="button border-0">Đăng ký</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup