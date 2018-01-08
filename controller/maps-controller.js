 const mapModel = require('../model/mapModel');
 const venueModel = require('../model/venueModel');
 const axios = require('axios');
 const mapController = {}


mapController.index = (req, res) => {
  mapModel.findall().then( locations => {
    console.log('this is locations:' + locations);
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
    .then((params) => {
      console.log('this is req.params.id ' + req.params.id)
      res.redirect(`/map/${params.id}`)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

mapController.show = (req, res) => {
  mapModel.findById(req.params.id)
    .then(locations => {
        venueModel.findById(locations.venue_id)
          .then(venue => {
            res.render('map/show', { locations: locations, venue: venue })
          })
          .catch(err => {
            res.status(400).json(err);
          });
    })
};


mapController.edit = (req,res) => {
  mapModel.findById(req.params.id)
    .then(locations => {
      res.render('map/edit', {
        locations: locations
      })
    })
    .catch(err => {
      res.status(400).json(err)
    })
}

 module.exports = mapController
