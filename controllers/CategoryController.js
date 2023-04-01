import categoryModel from "../models/CategoryModel.js";
import slugify from "slugify";

export const createCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(401).send({ message: "Vui lòng nhập tên thể loại" });
    }
    const existingcategory = await categoryModel.findOne({ name });
    if (existingcategory) {
      return res.status(200).send({
        success: true,
        message: "Thể loại đã tồn tại",
      });
    }
    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();
    res.status(201).send({
      success: true,
      message: "Đã thêm thể loại mới",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Thể loại lỗi",
    });
  }
};

//Update Category
export const updateCategoryController = async (req, res) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    );
    res.status(200).send({
      success: true,
      message: "Cập nhập thể loại thành công",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: `Lỗi khi cập khi nhập thể loại`,
    });
  }
};

//getAll category
export const categoryController = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: "Lấy thành công danh sách thể loại",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Lỗi trong khi lấy tất cả thể loại",
    });
  }
};

//Single category
export const singleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({ slug: req.params.slug });
    res.status(200).send({
      success: true,
      message: "Lấy thể loại thành công",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Lỗi khi lấy từng thể loại",
    });
  }
};

//Delete category
export const deleteCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({
      success: true,
      message: "Xóa thể loại thành công",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Lỗi trong quá trình xóa thể loại",
      error,
    });
  }
};
