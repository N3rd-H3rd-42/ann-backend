const router = require('express').Router();
const testController = require('../../controllers/testItem');
const cors = require('cors');

router.route('/test')
    .post(cors(), testController.createOne)
    .get(cors(), testController.findAll);

module.exports = router;
