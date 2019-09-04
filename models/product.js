const fs = require("fs")
const path = require("path")
const productId = 0
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
)

const getProductsFromFile = cb => {
  fs.readFile(p, (err, fileContent) => {
    if (err) {
      cb([])
    } else {
      cb(JSON.parse(fileContent))
    }
  })
}

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title
    this.imageUrl = imageUrl
    this.description = description
    this.price = price
  }

  save() {
    this.id = (productId + 1).toString()
    getProductsFromFile(products => {
      products.push(this)
      fs.writeFile(p, JSON.stringify(products), err => {
        console.log(err)
      })
    })
  }

  static fetchAll(cb) {
    getProductsFromFile(cb)
  }

  static findById(id, cb) {
    getProductsFromFile(products => {
      const found = products.find(currentProduct => currentProduct.id === id)
      cb(found)
    })
  }
}
