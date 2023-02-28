const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Product = require("../models/Product");

//get products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      title,
      brand,
      category,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      thumbnail,
    } = req.body;

    const product = new Product({
      title,
      brand,
      category,
      description,
      price,
      discountPercentage,
      rating,
      stock,
      thumbnail,
    });

  
    await product.save();
    return res
      .status(200)
      .json({ product, msg: "New product added successfully" });
  } catch {
    return res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
