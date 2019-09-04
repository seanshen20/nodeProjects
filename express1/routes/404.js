const express = require('express')
const router = express.Router()
const {viewPath} = require('../util/path')

router.use('*', (req, res, next) => {
    //res.status(404).sendFile(viewPath('404.html'))
    res.status(404).render(
        '404', { pageTitle: 'Page Not Found'}
    )
})
module.exports = router