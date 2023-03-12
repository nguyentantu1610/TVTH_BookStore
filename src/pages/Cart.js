import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';

const Cart = () => {
    return (
        <>
            <Meta title={"Giỏ hàng"} />
            <BreadCrumb title='Giỏ hàng' />
            <section className="cart-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="cart-header d-flex justify-content-between align-content-center">
                                <h4 className="cart-col-1">Sản phẩm</h4>
                                <h4 className="cart-col-2">Giá</h4>
                                <h4 className="cart-col-3">Số lượng</h4>
                                <h4 className="cart-col-4">Tổng tiền</h4>
                            </div>

                            <div className="cart-data d-flex justify-content-between align-content-center">
                                <div className="cart-col-1 d-flex align-items-center">
                                    <div>
                                        <img src="" alt="" />
                                    </div>

                                    <div>
                                        <h5 className="title"> HELLO ALIBABA</h5>
                                    </div>
                                </div>
                                <div className="cart-col-2"></div>
                                <div className="cart-col-3"></div>
                                <div className="cart-col-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart