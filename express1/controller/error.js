exports.getErrorPage = (req, res, next) => {
    //res.status(404).sendFile(viewPath('404.html'))
    res.status(404).render(
        '404', { pageTitle: 'Page Not Found'}
    )
}