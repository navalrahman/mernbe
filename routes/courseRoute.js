

const express = require('express')
const router = express.Router()
const courseController = require('../controllers/courseController')


const requireAuth = require('../middleware/requireAuth')


router.use(requireAuth)


router.get('/subjects', courseController.getAllcourse)


module.exports = router;