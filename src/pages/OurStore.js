import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from 'react-rating-stars-component';
import ProductCard from '../components/ProductCard';

const OurStore = () => {
    const [grid, setGrid] = useState(4);

    return (
        <>
            <Meta title={"Cửa hàng"} />
            <BreadCrumb title='Cửa hàng' />
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Phân theo loại
                                </h3>
                                <div>
                                    <ul className="ps-0">
                                        <li>LightNovel</li>
                                        <li>Truyện tranh</li>
                                        <li>Truyện nước ngoài</li>
                                        <li>Truyện thiếu nhi</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Sắp xếp theo
                                </h3>
                                <div>
                                    <h5 className="sub-title">Hiện tại</h5>
                                    <div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label" htmlFor="">
                                                Còn hàng (1)
                                            </label>
                                        </div>

                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="" />
                                            <label className="form-check-label" htmlFor="">
                                                Hết hàng (0)
                                            </label>
                                        </div>
                                    </div>
                                    <h5 className="sub-title">Giá</h5>
                                    <div className="d-flex align-items-center gap-10">
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control"
                                                id="floatingInput"
                                                placeholder="Từ" />
                                            <label for="floatingInput">Từ</label>
                                        </div>
                                        <div className="form-floating mb-3">
                                            <input type="email" className="form-control"
                                                id="floatingInput1"
                                                placeholder="Đến" />
                                            <label for="floatingInput">Đến</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Danh mục
                                </h3>
                                <div>
                                    <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">LightNovel</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Truyện tranh</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Thiếu nhi</span>
                                        <span className="badge bg-light text-secondary rounded-3 py-2 px-3">Nước ngoài</span>
                                    </div>

                                </div>
                            </div>
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Sản phẩm ngẫu nhiên
                                </h3>
                                <div>
                                    <div className="random-products mb-3 d-flex">
                                        <div className="w-50">
                                            <img src="images/DoremonCD.jpg" className="img-fluid" alt="CD" />
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                Những câu chuyện Doremon theo chuyên đề
                                            </h5>
                                            <p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <b>300.000 VNĐ</b>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="random-products d-flex">
                                        <div className="w-50">
                                            <img src="images/DoremonCD.jpg" className="img-fluid" alt="CD" />
                                        </div>
                                        <div className="w-50">
                                            <h5>
                                                Những câu chuyện Doremon theo chuyên đề
                                            </h5>
                                            <p>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={4}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                                <b>300.000 VNĐ</b>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-9">
                            <div className="filter-sort-grid mb-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="mb-0 d-block" style={{ width: "100px" }} >Sắp xếp:</p>
                                        <select name="" className="form-control form-select" id="" >
                                            <option value="manual">Nổi bật</option>
                                            <option value="best-selling" selected="selected">Mua nhiều nhất</option>
                                            <option value="title-asc">A-Z</option>
                                            <option value="title-decs">Z-A</option>
                                        </select>
                                    </div>
                                    <div className="d-flex align-items-center gap-10">
                                        <p className="totalproducts mb-0">21 sản phẩm</p>
                                        <div className="d-flex gap-10 align-items-center grid">

                                            <img
                                                onClick={() => {
                                                    setGrid(3);
                                                }}
                                                src="images/gr4.svg"
                                                className="d-block img-fluid"
                                                alt="grid" />

                                            <img
                                                onClick={() => {
                                                    setGrid(4);
                                                }}
                                                src="images/gr3.svg"
                                                className="d-block img-fluid"
                                                alt="grid" />

                                            <img
                                                onClick={() => {
                                                    setGrid(6);
                                                }}
                                                src="images/gr2.svg"
                                                className="d-block img-fluid"
                                                alt="grid" />

                                            <img
                                                onClick={() => {
                                                    setGrid(12);
                                                }}
                                                src="images/gr.svg"
                                                className="d-block img-fluid"
                                                alt="grid" />

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="products-list pb-5">
                                <div className="d-flex gap-10 flex-wrap">
                                    <ProductCard grid={grid} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurStore