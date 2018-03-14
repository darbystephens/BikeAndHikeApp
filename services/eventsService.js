(function() {

  function eventsService() {
    console.log("event service");
    var events = [{
        host: "Darby",
        information: "Blah Blah And so forth...",
        location: {
          "city": "Denver",
          "state": "Colorado",
          "country": "United States",
          "name": "Green Mountain",
          "parent_id": null,
          "unique_id": 694,
          "directions": "From I-25, take 6th Ave. west. Drive approximately 6 miles to Kipling. Take Kipling south for 2 miles before taking a right on Alameda. Stay on Alameda for 3 miles until you see a parking area on the right. This trail is part of William Frederick Hayden Park.",
          "lat": 39.69666,
          "lon": -105.19224,
          "description": null,
          "date_created": null,
          "children": [],
          "activities": [{
            "name": "Green Mountain",
            "unique_id": "1-14",
            "place_id": 694,
            "activity_type_id": 5,
            "activity_type_name": "mountain biking",
            "url": "http://www.singletracks.com/item.php?c=1&i=14",
            "attribs": {
              "\"length\"": "\"7\"",
              "\"nightride\"": "1"
            },
            "description": "This park has three parking areas. The loop is the same from all. From any trailhead, begin a clockwise loop in the park. On the south-east sides of the park, this loop maintains fairly constant elevation as it winds around the base of Green mountain. On the north west side of the mountain, a jeep road will take you to the top. On top, follow the jeep road past the radio towers, and back onto singletrack on the south east leg of the loop. Descend this singletrack, and finish the loop back to your car.",
            "length": 7,
            "activity_type": {
              "created_at": "2012-08-15T16:12:35Z",
              "id": 5,
              "name": "mountain biking",
              "updated_at": "2012-08-15T16:12:35Z"
            },
            "thumbnail": "http://images.singletracks.com/2009/trails/01/14-1180981080.jpg",
            "rank": null,
            "rating": 3.32
          }, {
            "name": "Green Mountain--William Frederick Hayden Park",
            "unique_id": "2-275",
            "place_id": 694,
            "activity_type_id": 2,
            "activity_type_name": "hiking",
            "url": "http://www.tripleblaze.com/trail.php?c=3&i=275",
            "attribs": {
              "\"length\"": "\"7\""
            },
            "description": "With more than 2,400 acres of open space, William Frederick Hayden Park on Green Mountain is the second largest park in Lakewood. &lt;br /&gt;<br />The park features a challenging network of multi-use trails. The summit, at 6,800 feet, offers unique and stunning views of the Denver metropolitan area to the east, as well as high mountain peaks to the west.",
            "length": 7,
            "activity_type": {
              "created_at": "2012-08-15T16:12:21Z",
              "id": 2,
              "name": "hiking",
              "updated_at": "2012-08-15T16:12:21Z"
            },
            "thumbnail": "http://images.tripleblaze.com/2009/02/275-1223987631.jpg",
            "rank": null,
            "rating": 0
          }]
        }
      },
      {
        host: "George Washington",
        information: "Crossing the Deleware",
        location: {
          "city": "Portland",
          "state": "Maine",
          "country": "United States",
          "name": "Evergreen Cemetary",
          "parent_id": null,
          "unique_id": 2047,
          "directions": "enter evergreen cemetary via stevens ave,  follow road towards back of cemetary,  trail begins behind the duck ponds.  ",
          "lat": 43.68332,
          "lon": -70.30618,
          "description": null,
          "date_created": null,
          "children": [],
          "activities": [{
            "name": "Evergreen Cemetary",
            "unique_id": "1-878",
            "place_id": 2047,
            "activity_type_id": 5,
            "activity_type_name": "mountain biking",
            "url": "http://www.singletracks.com/item.php?c=1&i=878",
            "attribs": {
              "\"length\"": "\"2\"",
              "\"nightride\"": "null"
            },
            "description": "stick to the left at the fork,  go up little hill then take right up singletrack slick rock trail.  or stay low and keep on the easy double track.  take any of the lefts and try to make it up the hill.  many inter-connected trails here.  mostly easy to middle class.  a couple burly drops though if your tuff enuff.  a lot of hidden singletrack in here.  please do not build any stunts here as they will be taken down.  see if you can find my natural log ride or cliff drops.",
            "length": 2,
            "activity_type": {
              "created_at": "2012-08-15T16:12:35Z",
              "id": 5,
              "name": "mountain biking",
              "updated_at": "2012-08-15T16:12:35Z"
            },
            "thumbnail": "http://images.singletracks.com/2011/11/382651_599518937500_41900520_32356263_453546337_n-0.jpg",
            "rank": null,
            "rating": 3.4
          }, {
            "name": "Evergreen Cemetary",
            "unique_id": "2-396",
            "place_id": 2047,
            "activity_type_id": 2,
            "activity_type_name": "hiking",
            "url": "http://www.tripleblaze.com/trail.php?c=3&i=396",
            "attribs": {
              "\"length\"": "\"2\""
            },
            "description": "Evergreen Cemetary features 2 miles of hiking trails near Portland, ME.",
            "length": 2,
            "activity_type": {
              "created_at": "2012-08-15T16:12:21Z",
              "id": 2,
              "name": "hiking",
              "updated_at": "2012-08-15T16:12:21Z"
            },
            "thumbnail": null,
            "rank": null,
            "rating": 0
          }, {
            "name": "Evergreen Cemetery",
            "unique_id": "6-249",
            "place_id": 2047,
            "activity_type_id": 9,
            "activity_type_name": "snow sports",
            "url": "http://www.snowtoit.com/trail.php?c=73&i=249",
            "attribs": {
              "\"type\"": "\"Backcountry \\/ Primative\""
            },
            "description": "This is a wide 2 mile loop for cross country skiing, and there are also a couple segments of singletrack for snow shoeing.",
            "length": 0,
            "activity_type": {
              "created_at": "2012-08-15T17:33:19Z",
              "id": 9,
              "name": "snow sports",
              "updated_at": "2012-08-15T17:33:19Z"
            },
            "thumbnail": null,
            "rank": null,
            "rating": 0
          }]
        }
      }
    ];
    return {
      addEvent: addEvent,
      getEvents: getEvents
    }

    function addEvent(event) {
      events.push(event);
    }

    function getEvents() {
      return events;
    }
  }

  angular
    .module("app")
    .factory("eventsService", eventsService);
})();


// controller: function(eventsService) {
//             var vm = this;
//             $ctrl.events = eventsService.getEvents();
//         }
