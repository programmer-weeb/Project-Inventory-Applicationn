const Item = require('../models/item')
const Category = require('../models/category')

const {body, validationResult} = require("express-validator");
const asyncHandler = require("express-async-handler");

// /category/:id
exports.getCategory = function (req, res, next) {
    res.send(`Category: ${req.params.id}`);
};

// /category/create
exports.getCreateCategory = asyncHandler(async (req, res, next) => {
    res.render('getCreateCategory', {
        title: 'getCreateCategory'
    })
})

// /category/:id/update
exports.getUpdateCategory = function (req, res, next) {
    res.send(`GET Update Category`);
};
// /category/:id/delete
exports.getDeleteCategory = function (req, res, next) {
    res.send(`GET Delete Category`);
};

// /category/create
exports.postCreateCategory = [
    body('name', 'Invalid name')
        .trim()
        .isLength({min: 3})
        .escape(),
    body('description', 'Invalid description')
        .trim()
        .isLength({min: 3})
        .escape(),
    asyncHandler(async (req, res, next) => {
        // Extract the validation errors from a request.
        const errors = validationResult(req)

        const newCategory = new Category({
            name: req.body.name,
            description: req.body.description,
        })

        if (!errors.isEmpty()) {
            // There are errors. Render the form again with sanitized values/error messages.
            // res.render("genre_form", {
            //     title: "Create Genre",
            //     genre: genre,
            //     errors: errors.array(),
            // });
            res.send(errors.array())
            return;
        }

        // Check if a Category  with same name already exists.
        const categoryExists = await Category.findOne({name: req.body.name}).exec()
        if (categoryExists) {
            res.redirect(categoryExists.url)
        }
        else {
            await newCategory.save()
            res.redirect(newCategory.url)
        }

    })
]

// /category/:id/update
exports.postUpdateCategory = function (req, res, next) {
    res.send(`POST Update Category`);
};

// /category/:id/delete
exports.postDeleteCategory = function (req, res, next) {
    res.send(`POST Delete Category`);
};
