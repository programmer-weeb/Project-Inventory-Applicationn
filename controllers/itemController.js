const Item = require('../models/item')
const Category = require('../models/category')

const {body, validationResult} = require("express-validator");
const asyncHandler = require("express-async-handler");

// /item/:id
exports.getItem = asyncHandler(async (req, res, next) => {
    const item = await Item.findOne({_id: req.params.id}).populate('category').exec()
    // console.log(item)
    // res.send(item)
    res.render('getItem', {
        title: 'Item',
        itemName: item.name,
        itemPrice: item.price,
        itemDescription: item.description,
        itemCategory: item.category.name,

    })
})

// /item/create
exports.getCreateItem = asyncHandler(async (req, res, next) => {

    const categories = await Item.find().exec()

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
exports.postCreateItem = function (req, res, next) {
    res.send(`POST Create Item`);
}

// /item/:id/update
exports.postUpdateItem = function (req, res, next) {
    res.send(`POST Update Item`)
}

// /item/:id/delete
exports.postDeleteItem = function (req, res, next) {
    res.send(`POST Delete Item`)
}