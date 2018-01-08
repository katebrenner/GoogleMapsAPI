const db = require('../db/config');
const mapModel = {}

mapModel.findall = () => {
  return db.query('SELECT * FROM locations')
}


mapModel.create = locations => {
  return db.one(
    `
      INSERT INTO locations
      (name, address, lat, lng, type)
      VALUES ($1, $2, $3, $4, $5) RETURNING *
    `,
    [locations.name, locations.address, locations.lat, locations.lng, locations.type]
  );
};



module.exports = mapModel
