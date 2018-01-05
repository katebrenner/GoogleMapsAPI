const db = require('../db/config');
const mapModel = {}

mapModel.findall = () => {
  return db.query('SELECT * FROM locations')
}

module.exports = mapModel
