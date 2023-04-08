import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/CartStyles.css";

const CartPage = () => {
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();
  const navigate = useNavigate();
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const [clientToken, setClientToken] = useState("");

  //Total price
  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map((item) => {
        total = total + item.price;
      });
      return total.toLocaleString("vi-VN", {
        style: "currency",
        currency: "VND",
      });
    } catch (error) {
      console.log(error);
    }
  };

  //Remove item
  const removeCartItem = (pid) => {
    try {
      let myCart = [...cart];
      let index = myCart.findIndex((item) => item._id === pid);
      myCart.splice(index, 1);
      setCart(myCart);
      localStorage.setItem("cart", JSON.stringify(myCart));
    } catch (error) {
      console.log(error);
    }
  };

  //Get Payment gateway token
  const getToken = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/braintree/token");
      setClientToken(data?.clientToken);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getToken();
  }, [auth?.token]);

  //handle payment
  const handlePayment = async () => {
    try {
      setLoading(true);
      const { nonce } = await instance.requestPaymentMethod();
      const { data } = await axios.post("/api/v1/product/braintree/payment", {
        nonce,
        cart,
      });
      setLoading(false);
      localStorage.removeItem("cart");
      setCart([]);
      navigate("/dashboard/user/orders");
      toast.success("Thanh toán thành công");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="cart-page">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center bg-light p-2 mb-1">
              {`Chào ${auth?.token && auth?.user?.name}`}
            </h1>
            <h4 className="text-center" style={{marginBottom:"40px",marginTop:"50px"}}>
              {cart?.length
                ? `Bạn đang có ${cart.length} sản phẩm trong giỏ hàng ${
                    auth?.token ? "" : "Vui lòng đăng nhập để thanh toán"
                  }`
                : "Không có sản phẩm trong giỏ hàng của bạn"}
            </h4>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-7 p-0 m-0">
              {cart?.map((p) => (
                <div className="row card flex-row" key={p._id}>
                  <div className="col-md-4">
                    <img
                      src={`/api/v1/product/product-photo/${p._id}`}
                      className="card-img-top"
                      alt={p.name}
                      width="100px"
                      height={"135px"}
                    />
                  </div>
                  <div className="col-md-4">
                    <p>{p.name}</p>
                    <p>{p.description.substring(0, 30)}</p>
                    <p>Giá : {p.price}</p>
                  </div>
                  <div className="col-md-4 cart-remove-btn">
                    <button
                      className="btn btn-danger"
                      onClick={() => removeCartItem(p._id)}
                    >
                      Hủy
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-md-5 cart-sumary" style={{paddingLeft:"300px"}}>
              <h2 className="text-center">ĐƠN HÀNG</h2>
              <p className="text-center">Chi tiết đơn hàng</p>
              <hr />
              <h4 className="text-center">Tổng giá : {totalPrice()} </h4>
              {auth?.user?.address ? (
                <>
                  <div className="mb-3">
                    <h4 className="text-center">Địa chỉ hiện tại</h4>
                    <h5 className="text-center">{auth?.user?.address}</h5>
                    <button
                      className="btn btn-outline-warning"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Cập nhập địa chỉ
                    </button>
                  </div>
                </>
              ) : (
                <div className="mb-3">
                  {auth?.token ? (
                    <button
                      className="btn btn-outline-warning text-center"
                      onClick={() => navigate("/dashboard/user/profile")}
                    >
                      Cập nhập địa chỉ
                    </button>
                  ) : (
                    <button
                      style={{ width: "max-content" }}
                      className="btn btn-outline-warning text-center"
                      onClick={() => navigate("/login", { state: "/cart" })}
                    >
                      Vui lòng đăng nhập để thanh toán
                    </button>
                  )}
                </div>
              )}

              <div className="mt-2">
                {!clientToken || !cart?.length ? (
                  ""
                ) : (
                  <>
                    <DropIn
                      options={{
                        authorization: clientToken,
                        paypal: {
                          flow: "vault",
                        },
                      }}
                      onInstance={(instance) => setInstance(instance)}
                    />
                    <button
                      className="btn btn-primary"
                      onClick={handlePayment}
                      disabled={loading || !instance || !auth?.user?.address}
                    >
                      {loading ? "Đang xử lý ..." : "Thanh toán"}
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
