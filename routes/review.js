const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const reviewController = require("../controllers/reviews.js")


//Post Reviews Route
router.post("/review", reviewController.createReview );

//Delete Reviews Route
router.delete("/:reviewId", wrapAsync(reviewController.destroyReview));


module.exports = router;