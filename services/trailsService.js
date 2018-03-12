(function(){

  var trailService = function($http) {
        return {
            getTrailInfo: getTrailInfo
        };
        function getTrailInfo() {
            return $http.get("https://trailapi-trailapi.p.mashape.com/")
                .then(function(response) {
                    return response.data;
                });
        }
    };


  angular
    .module("app")
    .factory("trailService",trailService);
})();
