const express = require('express');
const router = express.Router();
const { campusController } = require('../controllers');

// Routes
router.get('/', campusController.getAllCampuses);
router.get('/:campusId', campusController.getCampusById);
router.post('/', campusController.createCampus);
router.put('/:campusId', campusController.updateCampus);
router.delete('/:campusId', campusController.deleteCampus);

module.exports = router;
