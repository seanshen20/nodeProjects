const path = require('path')
const rootDir = path.dirname(process.mainModule.filename)
exports.viewPath = view => path.join(rootDir, "views", view)
exports.dataPath = data => path.join(rootDir,"data", data)