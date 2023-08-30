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

router.post('/item/create', )
router.post('/item/:id/update', )
router.post('/item/:id/delete', )


router.get('/category/create', );
router.get('/category/:id/update', );
router.get('/category/:id/delete', );

router.post('/category/create', );
router.post('/category/:id/update', );
router.post('/category/:id/delete', );
router.get('/category/:id', );

module.exports = router;
