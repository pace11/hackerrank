const Products = require('../models/products');

exports.createProduct = async (req, res) => {
  try {
    const product = await Products.create(req.body);
    res.status(201).json(req.body)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

exports.getProducts = async (req, res) => {
  const products = await Products.findAll();
  res.json(products)
}

exports.getProductById = async (req, res) => {
  const product = await Products.findByPk(req.params.id);
  if (!product) res.status(404).json({ message: "Product not found" })
  else res.json(product)
}

exports.updateProduct = async (req, res) => {
  const product = await Products.findByPk(req.params.id);
  if (product) {
    await product.update(req.body);
    res.json(product)
  } else {
    res.status(404).json({ message: 'Products not found' })
  }
}

exports.deleteProduct = async (req, res) => {
  const product = await Products.findByPk(req.params.id);
  if (product) {
    await product.destroy();
    res.json({ messsage: 'Product deleted successfully' })
  } else {
    res.status(404).json({ message: 'Products not found' })
  }
}