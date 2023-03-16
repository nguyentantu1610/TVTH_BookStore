import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import wish from '../images/wish.svg';
import wishlist from '../images/wishlist.svg';
import DoremonCD from '../images/DoremonCD.jpg';
import DoremonCD2 from '../images/DoremonCD1.png';
import addcard from '../images/add-cart.svg';
import view from '../images/view.svg';


const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}  `} >
                <Link
                    to={`${location.pathname == '/' ?
                        "product/:id"
                        : location.pathname == "/product/:id"
                            ? "/product/:id"
                            : ":id"
                        }`}
                    className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={DoremonCD} className="img-fluid" alt="product image" />
                        <img src={DoremonCD2} className="img-fluid" alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Kim Đồng</h6>
                        <h5 className="product-title">
                            Tuyển tập Doraemon chuyên đề
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Nobita đã cùng Doraemon phiêu lưu, chu du khắp mọi nơi như bay trên bầu trời cao, khám phá thế giới dưới lòng đất,
                            thậm chí đi ngược dòng thời gian về quá khứ. Chúng ta hãy cùng nhìn lại khuôn mặt rạng rỡ của Nobita vào những lúc như thế nhé!
                            Cậu thực sự thích thú mỗi khi được đi phiêu lưu và khám phá những điều mới lạ. Khi ấy, đôi mắt cậu luôn bừng sáng,
                            hác hẳn so với khuôn mặt phải ngồi vào bàn học bài. Nào, hãy cùng anh bạn Nobita bước vào những chuyến phiêu lưu li kì nhé!
                        </p>
                        <p className="price">100.000 VNĐ</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent">
                                <img src={view} alt="addcart" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={addcard} alt="addcart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}  `} >
                <Link to={`${location.pathname == '/' ?
                    "product/:id"
                    : location.pathname == "/product/:id"
                        ? "/product/:id"
                        : ":id"
                    }`}
                    className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                            <img src={wish} alt="wishlist" />
                        </button>
                    </div>
                    <div className="product-image">
                        <img src={DoremonCD} className="img-fluid" alt="product image" />
                        <img src={DoremonCD2} className="img-fluid" alt="product image" />
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Kim Đồng</h6>
                        <h5 className="product-title">
                            Tuyển tập Doraemon chuyên đề
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={4}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            Nobita đã cùng Doraemon phiêu lưu, chu du khắp mọi nơi như bay trên bầu trời cao, khám phá thế giới dưới lòng đất,
                            thậm chí đi ngược dòng thời gian về quá khứ. Chúng ta hãy cùng nhìn lại khuôn mặt rạng rỡ của Nobita vào những lúc như thế nhé!
                            Cậu thực sự thích thú mỗi khi được đi phiêu lưu và khám phá những điều mới lạ. Khi ấy, đôi mắt cậu luôn bừng sáng,
                            hác hẳn so với khuôn mặt phải ngồi vào bàn học bài. Nào, hãy cùng anh bạn Nobita bước vào những chuyến phiêu lưu li kì nhé!
                        </p>
                        <p className="price">100.000 VNĐ</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent">
                                <img src={view} alt="addcart" />
                            </button>
                            <button className="border-0 bg-transparent">
                                <img src={addcard} alt="addcart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>

        </>

    );
};

export default ProductCard