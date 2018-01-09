const router = require('express').Router();
const controller = require('../controller/maps-controller');

router.get('/', controller.index);
// router.get('/new', controller.new);
router.get('/:id', controller.show);
router.get('/:id/edit', controller.edit)
router.post('/', controller.create);
router.post('/search', controller.new)
router.put('/:id', controller.update)

module.exports = router;
