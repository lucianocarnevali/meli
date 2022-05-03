const express = require('express');
const router  = express.Router(); 

const itemController = require('../controllers/item'); 
router.get('/api/items', itemController.serachItems); 
router.get('/api/items/:id', itemController.getItemById); 

module.exports = router;