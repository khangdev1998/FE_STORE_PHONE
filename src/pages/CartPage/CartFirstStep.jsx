import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CartPage.module.scss";

const CartFirstStep = () => {
  // Dữ liệu cho các sản phẩm
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Apple iPhone 11 Pro Max, 8GB, 256GB",
      price: 28000000, // 28.000.000 VND
      originalPrice: 32000000, // 32.000.000 VND (giá gốc)
      quantity: 1,
      image:
        "https://cdn2492.cdn-template-4s.com/thumbs/san-pham/dien-thoai/113_thumb_350.webp", // Hình ảnh sản phẩm
    },
  ]);

  // Hàm để xóa sản phẩm khỏi giỏ hàng
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Hàm để cập nhật số lượng sản phẩm
  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item
      )
    );
  };

  // Tăng số lượng sản phẩm
  const increaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + 1);
    }
  };

  // Giảm số lượng sản phẩm
  const decreaseQuantity = (id) => {
    const item = cartItems.find((item) => item.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  // Tính tổng giá sản phẩm
  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Giỏ hàng của bạn</h3>
      <div className="row g-3">
        <div className="col-xl-9">
          <div className="border rounded-3 p-4 overflow-auto">
            <table
              className="table table-striped"
              style={{ minWidth: "885px" }}
            >
              <thead>
                <tr>
                  <th style={{ width: "45%", verticalAlign: "middle" }}>
                    Sản phẩm
                  </th>
                  <th style={{ width: "21%", verticalAlign: "middle" }}>Giá</th>
                  <th style={{ width: "17%", verticalAlign: "middle" }}>
                    Số lượng
                  </th>
                  <th style={{ width: "17%", verticalAlign: "middle" }}>
                    Hành động
                  </th>
                </tr>
              </thead>
              <tbody className=" mt-3">
                {cartItems.map((item) => (
                  <tr key={item.id} className="bg-light">
                    <td className="p-3">
                      <div className="d-flex align-items-center">
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "80px",
                            height: "80px",
                            marginRight: "15px",
                          }}
                        />
                        <Link to={`/product-detail`} className="text-muted">
                          {item.name}
                        </Link>
                      </div>
                    </td>
                    <td className="p-3">
                      <p>
                        <span
                          style={{
                            textDecoration: "line-through",
                            color: "gray",
                          }}
                        >
                          {item.originalPrice.toLocaleString()}₫
                        </span>
                      </p>
                      <p>{item.price.toLocaleString()}₫</p>
                    </td>
                    <td className="p-3">
                      <div className="input-group">
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => decreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <input
                          type="number"
                          className="form-control text-center"
                          min="1"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, Number(e.target.value))
                          }
                        />
                        <button
                          className="btn btn-outline-secondary"
                          onClick={() => increaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="p-3">
                      <button
                        className="btn btn-danger"
                        onClick={() => removeItem(item.id)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-xl-3">
          <div className="border rounded-3 p-4">
            <h5 className="text-danger">
              Tổng giá: {getTotalPrice().toLocaleString()}₫
            </h5>
            <div className="d-flex flex-column gap-2 mt-3">
              <Link to="/cart-step2" className="btn btn-primary p-2">
                Thanh toán ngay
              </Link>
              <Link to="/list-phone" className="btn btn-primary p-2">
                Tiếp tục mua sắm
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartFirstStep;
