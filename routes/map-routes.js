const router = require('express').Router();
const controller = require('../controller/maps-controller');

router.get('/', controller.index);
// router.get('/new', controller.new);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.post('/search', controller.new)

module.exports = router;
