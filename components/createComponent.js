(function(){
  var createComponent = {
    templateUrl:"partials/create.html",
    controller:function(trailService){
      var vm = this;
      vm.getTrailInfo = function(searchParams) {
        console.log("in controller", searchParams);

        trailService.getTrailInfo(searchParams).then(function(locations){
          vm.locations = locations;
        });
      }

      vm.searchParams = {};
      vm.searchParams.city="Portland";
      vm.searchParams.state="Oregon";
      vm.searchParams.radius = 50;
      vm.searchParams.activities="hiking";
    }


  }


  angular
    .module("app")
    .component("createComponent",createComponent);
})();
