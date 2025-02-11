const express = require("express");
const router = express.Router();

const productsRouter = require("./productsRouter.js");
const clientsRouter = require("./clientsRouter.js");

router.use("/products", productsRouter);
router.use("/clients", clientsRouter);

module.exports = router;
