const express = require('express')
const router = express.Router()

const { authenticateUser } = require('../app/middlewares/authentication')

const notesController = require('../app/controllers/notesControllers')
const categoriesController = require('../app/controllers/categoryController')
const usersController = require('../app/controllers/UsersController')

router.post('/user/register', usersController.register)
router.post('/user/login', usersController.login)
router.get('/user/account', authenticateUser, usersController.account)
router.delete('/user/logout', authenticateUser, usersController.logout)

router.get('/notes', authenticateUser, notesController.list)
router.get('/notes/count', authenticateUser, notesController.count)
router.get('/notes/:id', authenticateUser, notesController.show)
router.post('/notes', authenticateUser, notesController.create)
router.put('/notes/:id', authenticateUser, notesController.update)
router.delete('/notes/:id', authenticateUser, notesController.destroy)

router.get('/categories', authenticateUser, categoriesController.list)
router.get('/categories/:id', authenticateUser, categoriesController.show)
router.post('/categories', authenticateUser, categoriesController.create)
router.put('/categories/:id', authenticateUser, categoriesController.update)
router.delete('/categories/:id', authenticateUser, categoriesController.destroy)

module.exports = router
