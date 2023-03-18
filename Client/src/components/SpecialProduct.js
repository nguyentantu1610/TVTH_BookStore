import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

function SpecialProduct() {
    return (
        <div className="col-6 mb-3">
            <div className="special-product-card">
                <div className="d-flex justify-content-between">
                    <div>
                        <img src="images/doremonCD.jpg" className="img-fluid" alt="watch" />
                    </div>
                    <div>
                        <div className="special-product-content">
                            <h5 className="brand">Kim Đồng</h5>
                            <h6 className="title">
                                Tuyển tập Doraemon chuyên đề
                            </h6>
                            <ReactStars
                                count={5}
                                size={24}
                                value={4}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className="price">
                                <span className="red-p">100.000 VNĐ</span> <br /> <strike>200.000 VNĐ</strike>
                            </p>
                            <div className="discount-till d-flex align-items-center gap-10">
                                <p className="mb-0">
                                    <b>5</b>ngày
                                </p>
                                <div className="d-flex gap-10 align-items-center">
                                    <span className="badge rounded-circle p-3 bg-danger">1</span>:
                                    <span className="badge rounded-circle p-3 bg-danger">1</span>:
                                    <span className="badge rounded-circle p-3 bg-danger">1</span>
                                </div>
                            </div>
                            <div className="prod-count my-3">
                                <p>Còn lại: 5</p>
                                <div className="progress">
                                    <div className="progress-bar"
                                        role="progressbar"
                                        style={{ "width": "25%" }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100"></div>
                                </div>
                            </div>
                            <Link className="button">Thêm vào giỏ hàng</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialProduct