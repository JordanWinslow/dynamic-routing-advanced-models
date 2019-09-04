const Product = require("../models/product")

exports.getProducts = (req, res, next) => {
	Product.fetchAll(products => {
		res.render("shop/product-list", {
			prods: products,
			pageTitle: "All Products",
			path: "/products"
		})
	})
}

exports.getDetails = (req, res, next) => {
	const productId = req.params.productId
	Product.findById(productId, found => {
		res.render("shop/product-detail", {
      pageTitle: found.title,
      path: "/products",
			product: found
		}) // in product-detail we look for a product object, and "found" is equal to the return of our callback function which is the product corresponding to the ID we were looking for. We must send pageTitle and "path" to update the header and set the "active" navigation link with path: "/products"
	})
}

exports.getIndex = (req, res, next) => {
	Product.fetchAll(products => {
		res.render("shop/index", {
			prods: products,
			pageTitle: "Shop",
			path: "/"
		})
	})
}

exports.getCart = (req, res, next) => {
	res.render("shop/cart", {
		path: "/cart",
		pageTitle: "Your Cart"
	})
}

exports.addToCart = (req, res, next) => {
  const item = req.body.productId
}

exports.getOrders = (req, res, next) => {
	res.render("shop/orders", {
		path: "/orders",
		pageTitle: "Your Orders"
	})
}

exports.getCheckout = (req, res, next) => {
	res.render("shop/checkout", {
		path: "/checkout",
		pageTitle: "Checkout"
	})
}
