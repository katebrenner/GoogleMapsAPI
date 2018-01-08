 const mapModel = require('../model/mapModel');
 const venueModel = require('../model/venueModel');
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
  venueModel.findall()
    .then(venue => {
      res.render('map/new', {venue: venue})
      console.log(venue)
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
      venue_id: req.body.venue_id
    })
    .then(locations => {
      res.redirect(`/map/${locations.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};


 module.exports = mapController
