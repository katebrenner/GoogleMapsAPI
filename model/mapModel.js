const db = require('../db/config');
const mapModel = {}

mapModel.findall = () => {
  return db.query('SELECT * FROM locations')
}


mapModel.create = locations => {
  return db.one(
    `
      INSERT INTO locations
      (name, address, lat, lng, venue_id)
      VALUES ($1, $2, $3, $4, $5) RETURNING *
    `,
    [locations.name, locations.address, locations.lat, locations.lng, locations.venue_id]
  );
};

mapModel.findById = (id) => {
  return db.oneOrNone(`SELECT * FROM locations WHERE id = $1`, [id])
}




module.exports = mapModel
