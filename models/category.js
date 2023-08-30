const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 30
    },
    description: {
        type: String,
        required: true,
        maxLength: 55
    }
})

CategorySchema.virtual('url').get(function () {
    return `/category/${this._id}`
})

module.exports = mongoose.model('Category', CategorySchema)