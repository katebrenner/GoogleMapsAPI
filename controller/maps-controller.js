 const mapModel = require('../model/mapModel');
 const venueModel = require('../model/venueModel');
 const axios = require('axios');
 const mapController = {}


mapController.index = (req, res) => {
  console.log(req.user)
  mapModel.findall().then( locations => {
    res.render('map/index', {
      locations: locations,
      user: req.user
    });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
};

mapController.new = (req, res) => {
  venueModel.findall()
    .then(venue => {
      axios({
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address}&key=AIzaSyCwGVukC1LFAwcw415VQCJpNb3n4V8VYUk` })
    .then( data => {
      let place_id = data.data.results[0].place_id;
      console.log(place_id)
      axios ({
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/details/json?placeid=${place_id}&key=AIzaSyCwGVukC1LFAwcw415VQCJpNb3n4V8VYUk`
      }).then ( placesData => {
        console.log(placesData.data.result.opening_hours.weekday_text)
       res.render('map/new', {
        hours: placesData.result,
        latval: data.data.results[0].geometry.location.lat,
        lngval: data.data.results[0].geometry.location.lng,
        address: data.data.results[0].formatted_address,
        venue: venue
      });
    })
  })
    .catch(err => {
      console.log(err)
      res.status(400).send('error');
    });
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
            console.log('hi')
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
      venueModel.findall()
      .then(venue => res.render('map/edit', {
        locations: locations,
        venue: venue
      }))
    })
    .catch(err => {
      res.status(400).json(err)
    })
};

mapController.update = (req, res) => {
  mapModel.update({
    name: req.body.name,
    venue_id: req.body.venue_id
  }, req.params.id)
  .then(() => {
    res.redirect('/map')
  })
  .catch(err => {
    console.log(err)
    res.status(400).json(err)
  })
};

mapController.destroy = (req, res) => {
  mapModel.destroy(req.params.id)
    .then(() => {
      res.redirect('/map')
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

 module.exports = mapController
