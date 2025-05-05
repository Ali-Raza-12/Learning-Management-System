const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');
const express = require('express');
const router = express.Router();


router.get('/', getAllUsers);
router.get('/:id', getAllUsers);
router.post('/:id', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;