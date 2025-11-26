const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { addOrder, getOrders } = require('../controllers/orderController');

// Create order
router.post('/', protect, addOrder);

// Get orders for logged-in user
router.get('/', protect, getOrders);

module.exports = router;