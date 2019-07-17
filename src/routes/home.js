const router = require('express').Router();
const greet = require('../controllers/home')

router.get("/", greet.gretting);
router.get("/asking", greet.asking);
module.exports = router;