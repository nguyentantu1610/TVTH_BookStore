import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProduct from '../components/SpecialProduct';

const Home = () => {
  return <>
    <section className="home-wrapper-1 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative">
              <img src="images/pic1.jpg" className="img-fluid rounded-3" alt="main banner" />
              <div className="main-banner-content position-absolute">
                <h4>Cửa hàng mang đến cho bạn</h4>
                <h5>Kiến thức </h5>
                <p>Từ trẻ em cho đến thanh niên</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img src="images/pic5.jpg" className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Mua nhiều nhất</h4>
                  <h5>Light Novel</h5>
                  <p>300.000 VNĐ - <br /> 600.000 VNĐ</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/pic2.jpg" className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Cửa hàng mang đến cho bạn</h4>
                  <h5>Kiến thức </h5>
                  <p>300.000 - 600.000 VNĐ</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/pic3.jpg" className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Cửa hàng mang đến cho bạn</h4>
                  <h5>Kiến thức </h5>
                  <p>300.000 - 600.000 VNĐ</p>
                </div>
              </div>
              <div className="small-banner position-relative">
                <img src="images/pic4.jpg" className="img-fluid rounded-3" alt="main banner" />
                <div className="small-banner-content position-absolute">
                  <h4>Cửa hàng mang đến cho bạn</h4>
                  <h5>Kiến thức </h5>
                  <p>300.000 - 600.000 VNĐ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              <div className="d-flex align-items-center gap-15">
                <img src="images/service.png" alt="services" />
                <div>
                  <h6>Vận chuyển miễn phí</h6>
                  <p className="mb-0">Áp dụng đơn hàng 300.000 VNĐ</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-15">
                <img src="images/service-02.png" alt="services" />
                <div>
                  <h6>Khuyến mãi</h6>
                  <p className="mb-0">Tiết kiệm thêm chi phí</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-15">
                <img src="images/service-03.png" alt="services" />
                <div>
                  <h6>Hỗ trợ 24/7</h6>
                  <p className="mb-0">Đội ngũ hỗ trợ tích cực</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-15">
                <img src="images/service-04.png" alt="services" />
                <div>
                  <h6>Giảm giá</h6>
                  <p className="mb-0">Khuyến mãi với giá hợp lý</p>
                </div>
              </div>

              <div className="d-flex align-items-center gap-15">
                <img src="images/service-05.png" alt="services" />
                <div>
                  <h6>Thanh toán</h6>
                  <p className="mb-0">Thanh toán 100% uy tín</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="home=wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>LightNovel</h6>
                  <p>10 Item</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Truyện tranh</h6>
                  <p>10 Item</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Truyện nước ngoài</h6>
                  <p>10 Item</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Truyện thiếu nhi</h6>
                  <p>10 Item</p>
                </div>
                <img src="images/laptop.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>LightNovel</h6>
                  <p>10 Item</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Truyện tranh</h6>
                  <p>10 Item</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Truyện nước ngoài</h6>
                  <p>10 Item</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Truyện thiếu nhi</h6>
                  <p>10 Item</p>
                </div>
                <img src="images/laptop.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="featured-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Mặt hàng nổi bật</h3>
          </div>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>

    <section className="special-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Đặc biệt</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </div>
    </section>

    <section className="popular-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Mặt hàng bán chạy</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>

    <section className="marque-wrapper home-wrapper-2 py-5">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="images/fahasa.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/kimdong.png" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/nxbpn.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="images/nxbtre.png" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="blog-wrapper py-5 home-wrapper-2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Tin tức mới</h3>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
        </div>
      </div>
    </section>


  </>;
};

export default Home