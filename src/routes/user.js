const router = require('express').Router();

const userController = require('../controllers/user')

router.get("/", userController.getAllUser);
router.post('/', userController.createUser);
router.delete('/', userController.deleteUser);
router.put('/', userController.updateUser);
// router.get("/asking", greet.asking);

module.exports = router;