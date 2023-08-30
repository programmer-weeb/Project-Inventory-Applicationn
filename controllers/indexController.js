const Item = require('../models/item')
const Category = require('../models/category')

const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

module.exports = function (req, res, next) {
    res.send('GET home page')
}