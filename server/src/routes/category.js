const express = require('express');
const router  = express.Router(); 

const itemController = require('../controllers/category'); 
router.get('/api/categories/:id', itemController.getBreadcrumbByCategoryId); 

module.exports = router;