(function(){

  var trailService = function($http) {
        return {
            getTrailInfo: getTrailInfo
        };
        function getTrailInfo(searchParams) {
          return $http({
            method: "GET",
            url: "https://trailapi-trailapi.p.mashape.com/",
            params: {
              "q[activities_activity_type_name_eq]": "hiking",
              "q[city_cont]": "Denver",
              "q[state_cont]": "Colorado",
              "radius": "50"
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
