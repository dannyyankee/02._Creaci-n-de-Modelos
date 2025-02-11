const Product = require("./../bd/models/productsModel");


const getProducts = async () => {
  const products = await Product.findAll();
  return products;
};


module.exports = {
  getProducts,
};
