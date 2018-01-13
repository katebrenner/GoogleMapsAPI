// $(document).ready(function() {
//       console.log('connected')
//   $("#sidebar-toggle").click(function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggled");
// });

// });
//       function initMap() {
//         var position = {lat: 40.7525703, lng: -73.9776273};
//         var map = new google.maps.Map(document.getElementById('map'), {
//           zoom: 12,
//           center: position,
//           mapTypeId: 'terrain'
//         });
//         let icon = {
//         url: 'https://cdn.shopify.com/s/files/1/1061/1924/products/Poop_Emoji_7b204f05-eec6-4496-91b1-351acc03d2c7_large.png?v=1480481059',
//         scaledSize: new google.maps.Size(25, 25)
//       };

//       let pooIcon = new google.maps.Marker({
//           for(i = 0; i < locations.length; i++){
//              position: {lat: locations[i].lat, lng: locations[i].lng},
//              map: map,
//              icon: icon }
//           })

//   //       let pooIcon = new google.maps.Marker({
//   //       position: {lat: 40.7525703, lng: -73.9776273},
//   //       map: map,
//   //       icon: icon
//   // });
//          var geocoder = new google.maps.Geocoder();

// document.getElementById('submit').addEventListener('click', function() {
//   geocodeAddress(geocoder, map);
//         });

// function geocodeAddress(geocoder, resultsMap) {
//         var address = document.getElementById('address').value;
//         geocoder.geocode({'address': address}, function(results, status) {
//           if (status === 'OK') {
//             console.log(results)
//             resultsMap.setCenter(results[0].geometry.location);
//             var marker = new google.maps.Marker({
//               map: resultsMap,
//               position: results[0].geometry.location,
//               icon: icon
//             });
//           } else {
//             alert('Geocode was not successful for the following reason: ' + status);
//           }
//         });
//       }
//     }

