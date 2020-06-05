const router = require('express').Router();

const dayController = require('../../controllers/dayController');

router.route('/save')
	.post(dayController.saveNewDay);

router.route('/display')
	.get(dayController.getDays);

router.route('/delete')
	.post(dayController.deleteDay);

router.route('/update')
	


module.exports = router;