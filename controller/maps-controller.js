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
 //    axios({
 //    method: 'get',
 //    //base url zipcode is now dynamic and is looking for input with a name of zipcode
 //    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${req.body.address}&apikey=AIzaSyCwGVukC1LFAwcw415VQCJpNb3n4V8VYUk`
 //  })
 //  .then(data => {
 //    console.log(data.data.results[0].geometry.location.lng)
 //    res.render('map/new', {
 //    lat: data.data.results[0].geometry.location.lat,
 //    lng: data.data.results[0].geometry.location.lng

 //  })
 // })

};


// mapController.create = (req, res) => {
//   mapModel.create({
//       name: req.body.name,
//       address: req.body.address,
//       lat: req.body.lat,
//       lng: req.body.lng,
//       type: req.body.type
//     })
//     .then(locations => {
//       res.redirect(`/locations/${locations.id}`)
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// };


 module.exports = mapController
