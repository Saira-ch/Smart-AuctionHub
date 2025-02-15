const express = require('express');
const { createReview, getTotalReviews, getAllReviews } = require('../controllers/reviewController');


const router = express.Router();

router.post('/', createReview);
router.get('/', getAllReviews)
router.get('/count', getTotalReviews)




module.exports = router