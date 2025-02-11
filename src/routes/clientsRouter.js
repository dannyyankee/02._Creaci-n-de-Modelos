const clientsRouter = require("express").Router();
const clientsController = require("./../controllers/clientsController");

clientsRouter.get("/", clientsController.getclients);

module.exports = clientsRouter;
