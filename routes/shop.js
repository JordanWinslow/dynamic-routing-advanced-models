const path = require("path")

const express = require("express")

const shopController = require("../controllers/shop")

const router = express.Router()

router.get("/", shopController.getIndex)

router.get("/products", shopController.getProducts)

// putting a /:identifier in the path for express.Router() tells it to expect a dynamic variable rather than a static path.
router.get("/products/:productId", shopController.getDetails)

router.get("/cart", shopController.getCart)

router.post("/cart", shopController.addToCart)

router.get("/orders", shopController.getOrders)

router.get("/checkout", shopController.getCheckout)

module.exports = router
