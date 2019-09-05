const express = require('express')
const router = express.Router()
const {viewPath} = require('../util/path')
const { getErrorPage } = require('../controller/error')

router.use('*', getErrorPage)
module.exports = router