const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50,
    },
    description: {
        type: String,
        required: true,
        maxLength: 200,
    },
    category: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category',
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
})

ItemSchema.virtual('url').get(function () {
    return `/item/${this._id}`
})

module.exports = mongoose.model('Item', ItemSchema)