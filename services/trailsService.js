(function(){

  var trailService = function($http, $sce) {
        return {
            getTrailInfo: getTrailInfo
        };
        function getTrailInfo(searchParams) {
          console.log("in service", searchParams);
          console.log("city search", searchParams.city);

          return $http({
            method: "GET",
            url: "https://trailapi-trailapi.p.mashape.com/",
            params: {
              "q[activities_activity_type_name_eq]": searchParams.activities,
              "q[city_cont]": searchParams.city,
              "q[state_cont]": searchParams.state,
              "radius": searchParams.radius
            },
            headers: {
              "X-Mashape-Key": "Y16euzfYdpmshVYU6lH6HVzHPfCSp1GDqpbjsnPGBk4FMSMEfH",
              "Accept": "application/json"
            }
          }).then(function(response) {
              response.data.places.forEach(function(location) {
                if (location.activities[0]) {
                  location.activities[0].description = fixHtmlField(location.activities[0].description);
                }
                location.directions = fixHtmlField(location.directions);
                location.name = fixHtmlField(location.name);
              });

              return response.data.places;
          });
        }

        function fixHtmlField(value) {
          if (!value) {
            return value;
          }
          value = value.replace(/&lt;[\w ]+\/?&gt;/g, "");
          value = $sce.trustAsHtml(value);
          return value;
        }
    };



    // function getMyApiData() {
    //           return $http({
    //             method: "GET",
    //             url: "https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json",
    //             params: {
    //               key: "value",
    //               otherKey: "otherValue"
    //             }
    //           }).then(function(response) {
    //               return response.data;
    //           });
    //       }



  angular
    .module("app")
    .factory("trailService",trailService);
})();
