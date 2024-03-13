import { Product } from "./../models/product.model.js";

const getProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json({
      success: true,
      message: "product was successfully",
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      throw new Error("No product found");
    }
    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// create product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    if (!product) {
      throw new Error("No Product");
    }

    res.status(200).json({
      success: true,
      message: "Product saved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

//update product
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      throw new Error("No Product exist of this name");
    }

    const updatedProduct = await Product.findById(id);

    res.status(200).json({
      success: true,
      updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Product updated successfully",
      message: error.message,
    });
  }
};

//delete a product

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      throw new Error("Product not found");
    }

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
