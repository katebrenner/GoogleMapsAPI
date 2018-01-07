 const mapModel = require('../model/mapModel');
 const mapController = {}

mapController.index = (req, res) => {
  mapModel.findall().then( locations => {
    console.log(locations);
    console.log(locations[0].name);
    res.render('map/index', {
      locations: locations
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
}

 module.exports = mapController
