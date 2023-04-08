import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    products: [
      {
        type: mongoose.ObjectId,
        ref: "Products",
      },
    ],
    payment: {},
    buyer: {
      type: mongoose.ObjectId,
      ref: "users",
    },
    status: {
      type: String,
      default: "Chưa xử lý",
      enum: ["Chưa xử lý", "Đang xử lý", "Giao hàng", "Vận chuyển", "Hủy"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
