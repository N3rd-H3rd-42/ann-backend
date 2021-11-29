const router = require('express').Router();
const testController = require('../../controllers/testItem');

router.route('/test')
    .post(testController.createOne)
    .get(testController.findAll);

module.exports = router;
