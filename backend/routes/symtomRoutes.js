const express = require('express');
const { checkSymptoms } = require('../controllers/symptomController');

const router = express.Router();

// POST endpoint for checking symptoms
router.post('/', checkSymptoms);

module.exports = router;
