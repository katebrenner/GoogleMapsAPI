const db = require('../db/config');
const venueModel = {}

venueModel.findall = () => {
  return db.query('SELECT * FROM venue');
}

module.exports = venueModel
