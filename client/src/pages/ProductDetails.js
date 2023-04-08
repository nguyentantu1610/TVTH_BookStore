import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";

const ProductDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProduct] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  //Get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProduct(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row container product-details">
        <div className="col-md-6">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height="470"
            width={"100px"}
          />
        </div>
        <div className="col-md-6 product-details-info">
          <h1 className="text-center">Chi tiết sản phẩm</h1>
          <hr />
          <h6>Tên : {product.name}</h6>
          <h6>Mô tả : {product.description}</h6>
          <h6>
            Giá :{" "}
            {product?.price?.toLocaleString("vi-VN", {
              style: "currency",
              currency: "VND",
            })}
          </h6>
          <h6>Thể loại : {product?.category?.name}</h6>
          <button class="btn btn-secondary ms-1">Thêm vào giỏ hàng</button>
        </div>
      </div>
      <hr />
      <div className="row container similar-products">
        <h6 className="mt-4">Sản phẩm liên quan</h6>
        {relatedProducts.length < 1 && (
          <p className="text-center">Không tìm thấy sản phẩm liên quan</p>
        )}
        <div className="d-flex flex-wrap">
          {relatedProducts?.map((p) => (
            <div className="card m-2" style={{ width: "18rem" }}>
              <img
                src={`/api/v1/product/product-photo/${p._id}`}
                className="card-img-top"
                alt={p.name}
              />
              <div className="card-body">
                <div className="card-name-price">
                  <h5 className="card-tittle">{p.name}</h5>
                  <p className="card-title card-price">
                    {p.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                </div>
                <p className="card-text">{p.description.substring(0, 30)}...</p>
                <div className="card-name-price">
                  <button
                    className="btn btn-info ms-1"
                    onClick={() => navigate(`/product/${p.slug}`)}
                  >
                    More Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
