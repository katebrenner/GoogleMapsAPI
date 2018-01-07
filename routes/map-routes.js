const router = require('express').Router();
const controller = require('../controller/maps-controller');

router.get('/', controller.index);
router.get('/new', controller.new)

module.exports = router;
