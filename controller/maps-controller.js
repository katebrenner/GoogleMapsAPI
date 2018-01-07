 const mapModel = require('../model/mapModel');
 const axios = require('axios');
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


mapController.new = (req, res) => {
  mapModel.findall()
    .then(locations => {
      res.render('map/new', { locations: locations })
      console.log(locations)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};


mapController.create = (req, res) => {
  mapModel.create({
      name: req.body.name,
      address: req.body.address,
      lat: req.body.lat,
      lng: req.body.lng,
      type: req.body.type
    })
    .then(locations => {
      res.redirect(`/locations/${locations.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};


 module.exports = mapController
