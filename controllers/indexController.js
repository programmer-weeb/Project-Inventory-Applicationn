const Item = require('../models/item')
const Category = require('../models/category')

const {body, validationResult} = require("express-validator");
const asyncHandler = require("express-async-handler");

module.exports = asyncHandler(async (res, req, next) => {
    const [items, categories] = await Promise.all([
        Item.find().exec(),
        Category.find().exec()
    ])

    console.log(items)
    console.log(categories)

    res.render('index', {
        title: 'slkdfjkdlsfjklsdfjfsd',
        categories,
        items,
    })
})
