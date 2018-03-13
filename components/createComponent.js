(function(){
  var createComponent = {
    templateUrl:"partials/create.html",
    controller:function(trailService){
      var vm = this;
      vm.checkResults = function(){

      }
      trailService.getTrailInfo().then(function(locations){
        vm.locations = locations;

      });
      vm.city="Portland";
      vm.state="Oregon";
      vm.radius = 50;
    }


  }


  angular
    .module("app")
    .component("createComponent",createComponent);
})();
