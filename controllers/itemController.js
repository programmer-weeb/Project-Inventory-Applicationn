const Item = require('../models/item')
const Category = require('../models/category')

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

// /item/:id
exports.getItem = asyncHandler(async (req, res, next) => {
    const item = await Item.findOne({ _id: req.params.id }).populate('category').exec()
    // console.log(item)
    // res.send(item)
    res.render('getItem', {
        title: 'Item',
        itemName: item.name,
        itemPrice: item.price,
        itemDescription: item.description,
        itemCategory: item.category.name,
        itemId: item._id,
    })
})

// /item/create
exports.getCreateItem = asyncHandler(async (req, res, next) => {

    const categories = await Category.find().exec()

    res.render('getCreateItem', {
        title: 'getCreateitem',
        categories
    })
})

// /item/:id/update
exports.getUpdateItem = function (req, res, next) {
    res.send(`GET Update Item`)
}
// /item/:id/delete
exports.getDeleteItem = function (req, res, next) {
    res.send(`GET Delete Item`)
}

// /item/create
exports.postCreateItem = [
    body('name', 'invalidName')
        .trim()
        .isLength({ min: 3 })
        .escape(),
    body('description', 'Invalid description')
        .trim()
        .isLength({ min: 3 })
        .escape(),
    body('category', 'Invalid category')
        .trim()
        .escape(),
    body('price', 'Invalid price')
        .isLength({ min: 1 })
        .escape(),
    asyncHandler(async (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            res.send(errors.array())
        } else {
            const categoryId = req.body.category
            const category = await Category.findById(categoryId).exec()

            const newItem = new Item({
                name: req.body.name,
                description: req.body.description,
                category: category,
                price: req.body.price,
            })
            await newItem.save()
            res.redirect(newItem.url)
        }
    })
]

// /item/:id/update
exports.postUpdateItem = function (req, res, next) {
    res.send(`POST Update Item`)
}

// /item/:id/delete
exports.postDeleteItem = asyncHandler(async (req, res, next) => {
    const itemIdToDel = req.params.id
    await Item.findByIdAndDelete(itemIdToDel)
    res.redirect('/')
})