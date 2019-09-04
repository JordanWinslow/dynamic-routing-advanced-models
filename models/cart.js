const fs = require("fs")
const path = require("path")
const p = path.join(
	path.dirname(process.mainModule.filename),
	"data",
	"cart.json"
)

const cartData = {
	products: [],
	totalPrice: 0
}

const Cart = () => {
	const addProduct = (id, price) => {
		fs.readFile(p, (err, data) => {
			if (!err) {
				cartData.products = JSON.parse(data.products)
				cartData.totalPrice = JSON.parse(data.totalPrice)
			}
            const existingProduct = cartData.products.find(prod => prod.id === id)
            if (existingProduct) {
                let updatedProduct = {...existingProduct}
                updatedProduct.qty += 1
            } else {
                let updatedProduct = {id: id, qty: 1}
            } // MIGHT HAVE TO USE parseInt here!!
            cartData.totalPrice += productPrice
            cartData.products = [...cart.products, updatedProduct]
		})
	}
}

module.exports = Cart
