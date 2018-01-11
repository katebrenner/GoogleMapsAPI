const db = require('../db/config');
const venueModel = {}

venueModel.findall = () => {
  return db.query('SELECT * FROM venue');
}

venueModel.findById = (id) => {
  return db.oneOrNone(`SELECT * FROM venue WHERE venue_id = $1`, [id])
}

module.exports = venueModel
