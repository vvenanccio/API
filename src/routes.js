
const express = require('express');
const routes = express.Router();
const ProductController = require("./controllers/ProductController");
const ClienteController = require("./controllers/ClienteController");

//Produtos
routes.get("/products", ProductController.indexedDB);
routes.post("/products", ProductController.store);
routes.get("/products/:id", ProductController.show);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.destroy);

//Clientes
routes.get("/Cliente", ClienteController.indexedDB);
routes.post("/Cliente", ClienteController.store);
routes.get("/Cliente/:id", ClienteController.show);
routes.put("/Cliente/:id", ClienteController.update);
routes.delete("/Cliente/:id", ClienteController.destroy);

module.exports = routes;