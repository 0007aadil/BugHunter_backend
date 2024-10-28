const express = require('express');
const { postBounty, getBounties } = require('../controllers/bountyController');
const authMiddleware = require('../config/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, postBounty);
router.get('/', getBounties);

module.exports = router;
