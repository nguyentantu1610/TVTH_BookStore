import { comparePassword, hashPassword } from "../helper/authHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;
    //validations
    if (!name) {
      return res.send({ message: "Vui lòng nhập tên" });
    }
    if (!email) {
      return res.send({ message: "Vui lòng nhập email" });
    }
    if (!password) {
      return res.send({ message: "Vui lòng nhập mật khẩu" });
    }
    if (!phone) {
      return res.send({ message: "Vui lòng nhập SĐT" });
    }
    if (!address) {
      return res.send({ message: "Vui lòng nhập địa chỉ" });
    }

    //check user
    const exitsitingUser = await userModel.findOne({ email });

    //exitsiting user
    if (exitsitingUser) {
      return res.status(200).send({
        success: false,
        message: "Người dùng đã tồn tại",
      });
    }

    //register user
    const hashedPassword = await hashPassword(password);

    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    }).save();

    res.status(201).send({
      success: true,
      message: "Đăng ký thành công",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: `Lỗi đăng ký`,
      error,
    });
  }
};

//POST LOGIN
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Email hoặc mật khẩu không đúng",
      });
    }

    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email không chính xác",
      });
    }

    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Mật khẩu không chính xác",
      });
    }

    //Token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "Đăng nhập thành công",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        address: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Lỗi đăng nhập",
      error,
    });
  }
};

//test controller
export const testController = (req,res) => {
    res.send("Protected route")
}