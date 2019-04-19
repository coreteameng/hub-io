// Dependencies --------------------------
const express = require('express');
const router = express.Router();

// MiddleWare -------------------------
router.use(function (req, res, next) {
    next();
});





// Return Router
module.exports = router;