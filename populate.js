
console.log(
    'This script populates some test category, items to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

const userArgs = process.argv.slice(2)

const Item = require('./models/item')
const Category = require('./models/category')

const items = []
const categories = []

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const mongoDB = userArgs[0]

main().catch(err => console.log(err))

async function main() {
    console.log('About to connect')
    await mongoose.connect(mongoDB)
    console.log('Should be connected')
    // await createCategory('cat1', 'des for cat1');
    await createItem('item222', 'dddd', 'cat1', 1111);
    console.log('Done')

}

async function createItem(name, description, category, price) {
    const newItem = {
        name,
        description,
        category: (await Category.find({name: category}))[0],
        price,
    }
    const item = await new Item(newItem)
    await item.save()
}

async function createCategory(name, description) {
    const category = await new Category({name, description})
    await category.save()
}