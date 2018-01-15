# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Approval From Squad Lead
|---|---| ---|
|Day 1: Fri| Game Idea, Wireframes and Priority Matrix|
|Day 2: Mon| Pseudocode\Actual code\Basic Clickable Model|
|Day 3: Tue| Working Prototype |
|Day 4: Wed| App Completed / Slides |
|Day 5: Thur| Project Presentations |

## Project Description

Use this section to describe your final project and perhaps any links to relevant sites that help convey the concept and\or functionality.

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
## POST MVP
Include the full list of features that you are considering for POST MVP

- Google autocomplete for addresses
- Google location detection
- User Auth
- Have all CRUD functionality one page so user doesn't have to leave page
- Have user be able to upload pics


## Wireframes

Include images of your wireframes. 

![](https://i.imgur.com/iI5NNo6.jpg)
![](https://i.imgur.com/Y3gGpSk.jpg?1)


## App Components

### Creating Items


### Deleting Items


### Editing Items


### Getting Items



## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Component 1 | H | 10hrs| 12hrs | 12hrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  

The below is part of a larger function that creates the map.
I was very concerned with how I would pull lat and long from the table and render it to the map.
I had to include a script tag in my index page. 
At first I tried creating a separate javascript file, but then I realized that the data being returned from my controller was being sent to my ejs, but not my script.js, so I compiled it all onto the same page, with a script tag on my ejs. 
```let locations = <%- JSON.stringify(locations) %>
    for(i = 0; i < locations.length; i++){
      let pooIcon = new google.maps.Marker({
        class: 'pooIcon',
        position: {lat: locations[i].lat, lng: locations[i].lng},
        map: map,
        icon: icon })```

## jQuery Discoveries
 Use this section to list some, but not all, of the jQuery methods and\or functionality discovered while working on this project.

 I used no jQuery.  The google maps documentation and built in functions were all in plain javascripy.  I did not want to mix the two.  If anything, it was a good refresher in manipulating ther DOM with javascipt.  A list of some javascript DOM manipulation that I used is below:
 -document.createElement('p');
 - element.innerHTML = 'text';
 - element.className = 'classname';
 - document.getElementById('side').appendChild(child);

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  
 - I wanted to use a css framework to make the page responsive, but instead I wrote out the code so I had more control over it

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.
 -couldn't get icons to render when in a separate script file, so ended up moving them to a script tag within the ejs file. 
- error: syntax error at or near "BY"
- solution: SELECT * FROM locations OBRDER BY lng -> SELECT * FROM locations OBRDER BY lng DESC
- couldn't get edit page to default to the location's venue based on its venue id
- solution: <%= locations.venue_id === venue.venue_id ? 'selected' : null %>
#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object
