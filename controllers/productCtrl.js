const Products = require('../models/productModel')

const productCtrl = {
    getProducts: async (req, res) => {
        try {
            const products = await Products.find()

            res.json(products)
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    createProducts: async (req, res) => {
        try {
            const { product_id, title, price, public, description, content, images, category} = req.body;
            if (!images) return res.status(400).json({ msg: "No image Upload" })

            const product = await Products.findOne({ product_id })
            if (product)
                return res.status(400).json({ msg: "This product already exists." })

            const newProduct = new Products({
                product_id, title: title.toLowerCase(), price, author, public, description, content, images, category, checked, sold
            })

            res.json(newProduct)

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    deleteProducts: async (req, res) => {
        try {

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    updateProducts: async (req, res) => {
        try {

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
}


module.exports = productCtrl