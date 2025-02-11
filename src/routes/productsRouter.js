const productsRouter = require("express").Router();
const productsController = require("./../controllers/productsController");

productsRouter.get("/", productsController.getProducts);

module.exports = productsRouter;
