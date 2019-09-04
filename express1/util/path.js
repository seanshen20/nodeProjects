const path = require('path')
const rootDir = path.dirname(process.mainModule.filename)
exports.viewPath = view => path.join(rootDir, "views", view)
