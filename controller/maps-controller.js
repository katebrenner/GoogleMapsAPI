 const mapModel = require('../model/mapModel');
 const mapController = {}

mapController.index = (req, res) => {
  mapModel.findall().then(locations => {
    res.render('map/index', {
      data: locations
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
}

 module.exports = mapController
