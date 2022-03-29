const router = require('express').Router();
const userController = require('../controllers/user.controller');

router.post('/create', userController.createUser);
router.get('/allUsers', userController.getAllUsers);
router.get("/user/slug/:slug", userController.getUserBySLug);
router.get("/user/email/:email", userController.getUserByEmail);
router.get("/user/firstname/:firstname", userController.getUserFirstname);
router.get("/user/lastname/:lastname", userController.getUserLastname);

module.exports = router
