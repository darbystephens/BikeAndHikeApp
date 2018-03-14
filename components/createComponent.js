(function(){
  var createComponent = {
    templateUrl:"partials/create.html",
    controller:function(trailService,eventsService){
      var vm = this;
      vm.getTrailInfo = function(searchParams) {
        console.log("in controller", searchParams);

        trailService.getTrailInfo(searchParams).then(function(locations){
          vm.locations = locations;
        });
      }
      vm.event = {};
      vm.createEvent = function(location){
        console.log(location);
        vm.event.location = location;
        console.log(vm.event);
        eventsService.addEvent(vm.event);
      }
      // vm.searchParams = {};
      // vm.searchParams.city="Portland";
      // vm.searchParams.state="Oregon";
      // vm.searchParams.radius = 50;
      // vm.searchParams.activities="hiking";
    }


  }


  angular
    .module("app")
    .component("createComponent",createComponent);
})();
