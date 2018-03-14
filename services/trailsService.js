(function(){

  var trailService = function($http) {
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
              return response.data.places;
          });
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
