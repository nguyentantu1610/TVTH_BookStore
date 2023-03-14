import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactImageZoom from 'react-image-zoom';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';


const SingleProduct = () => {
    const props = {
        width: 400,
        height: 600,
        zoomWidth: 600,
        img: "https://product.hstatic.net/200000343865/product/9_a5b47a4d86a04346bf81d3c3a8bf3636_master.jpg"
    }
    return (
        <>
            <Meta title={"Tên sách"} />
            <BreadCrumb title='Tên sách' />
            <Container class1="main-product-wrapper py-5 home-wrapper-2">
                <div className="row">
                    <div className="col-6">
                        <div className="main-product-image">
                            <div>
                                <ReactImageZoom {...props} />
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="main-product-details">
                            <div className="border-bottom">
                                <h3 className="title">Tuyển tập Doraemon chuyên đề</h3>
                            </div>
                            <div className="border-bottom py-3">
                                <p className="price">100.000 VNĐ</p>
                                <div className="d-flex align-items-center gap-10">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                </div>
                            </div>

                            <div className="py-3">
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Định dạng : Bìa mềm</h3>
                                    <p className="product-data">ABC</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Tác giả:</h3>
                                    <p className="product-data">ABC</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Thể loại :</h3>
                                    <p className="product-data">ABC</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Nhà xuất bản :</h3>
                                    <p className="product-data">ABC</p>
                                </div>
                                <div className="d-flex gap-10 align-items-center my-2">
                                    <h3 className="product-heading">Tình trạng :</h3>
                                    <p className="product-data">Còn hàng</p>
                                </div>
                                <div className="d-flex align-items-center gap-15 flex-row mt-2 mb-3">
                                    <h3 className="product-heading">Số lượng :</h3>
                                    <div className="">
                                        <input type="number"
                                            name=""
                                            min={1}
                                            max={10}
                                            className="form-control"
                                            style={{ width: "70px" }}
                                            id="" />
                                    </div>
                                    <div className="d-flex align-items-center gap-30 ms-5">
                                        <button className="button border-0" type="submit">Thêm vào giỏ hàng</button>
                                        <button className="button signup">Mua ngay</button>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <a href="">
                                            <AiOutlineHeart className="fs-5 my-2" /> Thêm vào danh sách yêu thích
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1="description-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h4>Mô tả</h4>
                            <div className="bg-white p-3">
                                <p>
                                    Nobita đã cùng Doraemon phiêu lưu, chu du khắp mọi nơi như bay trên bầu trời cao, khám phá thế giới dưới lòng đất,
                                    thậm chí đi ngược dòng thời gian về quá khứ. Chúng ta hãy cùng nhìn lại khuôn mặt rạng rỡ của Nobita vào những lúc như thế nhé!
                                    Cậu thực sự thích thú mỗi khi được đi phiêu lưu và khám phá những điều mới lạ. Khi ấy, đôi mắt cậu luôn bừng sáng,
                                    hác hẳn so với khuôn mặt phải ngồi vào bàn học bài. Nào, hãy cùng anh bạn Nobita bước vào những chuyến phiêu lưu li kì nhé!
                                </p>
                            </div>
                        </div>
                    </div>
            </Container>

            <Container class1="popular-wrapper py-5 home-wrapper-2">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="section-heading">Mặt hàng bán chạy</h3>
                        </div>
                    </div>
                    <div className="row">
                        <ProductCard />
                    </div>
            </Container>
        </>
    );
};

export default SingleProduct