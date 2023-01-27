const dbHelper = require('./databaseHelper')
const schemas = require('./schemas')

const  dbPath = __dirname + "/data/video_sharingDB.json"

module.exports = dbHelper(dbPath,schemas)


