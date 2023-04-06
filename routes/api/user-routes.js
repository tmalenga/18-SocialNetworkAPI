const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    //addFriend,
    updateUser,
    deleteUser,
    //removeFriend
} = require('../../controllers/usersController');

router
    .route('/')
    .get(getAllUsers)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);

router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// Friend code not working, to return to if you have time!
// router
//     .route('/:userId/friends/:friendId')
//     .post(addFriend)
//     .delete(removeFriend)

module.exports = router;