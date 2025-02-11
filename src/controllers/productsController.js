const productsService = require("./../services/productsService");

const getProducts = async (req, res) => {
  const products = await productsService.getProducts();
  res.status(200).send(products);
};

module.exports = {
  getProducts,
};
