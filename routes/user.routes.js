const router = require('express').Router();
const req = require('express/lib/request');
const userController = require('../controllers/user.controller');

router.post('/create', userController.createUser);
router.get('/allUsers', userController.getAllUsers);
router.get("/slug/:slug", userController.getUserBySLug);
router.get("/email/:email", userController.getUserByEmail);
router.get("/firstname/:firstname", userController.getUserFirstname);
router.get("/lastname/:lastname", userController.getUserLastname);

module.exports = router
