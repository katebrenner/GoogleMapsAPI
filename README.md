# Project Overview

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

Where 2 Pee NYC stores information about public restrooms throughout NYC.  Its CRUD functionality allows users to store additional restrooms to the database.  It uses 2 tables- a locations table that stores name, address, lat & long (needed to render the icons to the map), and venue_id, which reference the venues table. This app uses the google maps API to obtain latitude and longitude, and formatted address- which is then stored to the table.  It also utilises google maps’ autocomplete and location services.  The app uses passport for user authentication.


## Priority Matrix

Include a full list of features that have been prioritized based on the `Time and Importance` Matix.
- 2 tables: 1 for locations and 1 for venue type - 5 hours
- Google maps API that renders map and pulls lat and long from locations table and renders to map - 8 hours
- Crud functionality allowing user to add locations - 12 hours

## MVP

Include the full list of features that will be part of your MVP
- 2 tables: 1 for locations and 1 for venue type
- Google maps API that renders map and pulls lat and long from locations table and renders to map
- Crud functionality allowing user to add locations
- Google autocomplete for addresses
- Google location detection
- User Auth

## Wireframes


![](https://i.imgur.com/iI5NNo6.jpg)
![](https://i.imgur.com/Y3gGpSk.jpg?1)




## Functional Components

Estimated time vs time invested 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
|  2 joined tables | H | 5hrs| 5hrs | 5hrs |
|  Render locations from table | H | 8hrs| 8hrs | 8hrs |
|  Crud functionality | H | 12hrs| 12hrs | 12hrs |
|  Autocomplete | M | 5hrs| 5hrs | 5hrs |
|  location detection | M | 5hrs| 2hrs | 2hrs |
|  Places API for location hours(didn't use) | L | 5hrs| 5hrs | 5hrs |
|  User Auth | L | 15hrs| 5hrs | 5hrs |

## Additional Libraries/Languages


SERVER- node.js/ express.js
LANGUAGES- HTML/ CSS/ Javascript
API- Google Maps API
MODULES- Nodemon, body-parser, express, pg-promise, morgan, method-override, body parser, EJS, Passport, bcryptjs, cookie-parser, dotenv, express-session, axios


## Issues and Resolutions
This section is for major issues and resolutions

- couldn't get icons to render when in a separate script file, so ended up moving them to a script tag within the ejs file.
- error: syntax error at or near "BY"
- solution: SELECT * FROM locations OBRDER BY lng -> SELECT * FROM locations OBRDER BY lng DESC
- couldn't get edit page to default to the location's venue based on its venue id
- solution: <%= locations.venue_id === venue.venue_id ? 'selected' : null %>
- App was adaptive  but not responsive, so added event listeners on window resizing, just in case you are the 0.5% that likes to resize your browser while on a site
- Not resolved- deployment

## Code Snippet

The below is part of a larger function that creates the map.  This is where the function loops over the locations in the db and renders the icon based on each locations' stored latitude and longitude

```
let locations = <%- JSON.stringify(locations) %>
    for(i = 0; i < locations.length; i++){
      let pooIcon = new google.maps.Marker({
        class: 'pooIcon',
        position: {lat: locations[i].lat, lng: locations[i].lng},
        map: map,
        icon: icon })
        ```

