import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div className="col-3">
            <Link className="product-card position-relative">
                <div className="wishlist-icon position-absolute">
                    <Link>
                        <img src="images/wish.svg" alt="wishlist" />
                    </Link>
                </div>
                <div className="product-image">
                    <img src="images/doremonCD1.png" className="img-fluid" alt="product image" />
                    <img src="images/doremonCD.jpg" className="img-fluid" alt="product image" />
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
                    <p className="price">100.000 VNĐ</p>
                </div>
                <div className="action-bar position-absolute">
                    <div className="d-flex flex-column">
                        <Link>
                            <img src="images/view.svg" alt="addcart" />
                        </Link>
                        <Link>
                            <img src="images/add-cart.svg" alt="addcart" />
                        </Link>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default ProductCard