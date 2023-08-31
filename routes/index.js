const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController')
const categoryController = require('../controllers/categoryController')
const itemController = require('../controllers/itemController')

router.get('/', indexController)

router.get('/item/create', itemController.getCreateItem)
router.get('/item/:id/update', itemController.getUpdateItem)
router.get('/item/:id/delete', itemController.getDeleteItem)
router.get('/item/:id', itemController.getItem)

router.post('/item/create', itemController.postCreateItem )
router.post('/item/:id/update',  itemController.postUpdateItem)
router.post('/item/:id/delete', itemController.postDeleteItem)


router.get('/category/create', categoryController.getCreateCategory);
router.get('/category/:id/update', categoryController.getUpdateCategory);
router.get('/category/:id/delete', categoryController.getDeleteCategory);

router.post('/category/create', categoryController.postCreateCategory);
router.post('/category/:id/update', categoryController.postUpdateCategory);
router.post('/category/:id/delete', categoryController.postDeleteCategory);
router.get('/category/:id', categoryController.getCategory);

module.exports = router;
