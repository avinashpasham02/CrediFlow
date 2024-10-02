// routes/credit.js
const express = require('express');
const router = express.Router();
const { assessCredit } = require('../controllers/creditController');

// POST request to assess MSME credit
router.post('/assess', assessCredit);

module.exports = router;
