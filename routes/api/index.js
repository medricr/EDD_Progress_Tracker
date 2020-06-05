const router = require('express').Router();
const user = require('./userRotues');
const days = require('./dayRoutes');

router.use('/user',user);
router.use('/days', days);

module.exports = router;