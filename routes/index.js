const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: './uploads/csv-files'});

const homeController = require('../controllers/home_controller');
const csvController = require('../controllers/csv_controller');
router.get('/', homeController.home);
router.post('/csv-upload', upload.single('file'),csvController.upload);
router.get('/view/:id', csvController.view);
router.get('/delete/:id', csvController.delete);
console.log('Router is loaded');

module.exports = router;