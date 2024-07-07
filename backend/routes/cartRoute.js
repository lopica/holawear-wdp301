const express = require("express");
const cartRouter = express.Router();

const { CartController } = require("../controllers/index.js");

cartRouter.get("/get-cart-by-user-id/:id", CartController.getCartByUserId);
cartRouter.post("/create-cart", CartController.createCart);
cartRouter.post("/add-product-to-cart", CartController.addProductToCart);
cartRouter.post("/remove-ordered-items", CartController.removeOrderedItemsFromCart);

module.exports = cartRouter;
