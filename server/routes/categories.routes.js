const {Router} = require('express')
const {setCategories, } = require('../controllers/categories.controller')
const router = Router()

// /api/auth/categories/set-login
router.post('/admin/set-categories', setCategories)

// console.log ('all routes -> ', router.stack)
module.exports = router
