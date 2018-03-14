(function(){
  var searchComponent = {
    templateUrl:"partials/search.html",
    controller: function(eventsService){
      var vm = this;
      vm.events = eventsService.getEvents();
      }

    }


  angular
    .module("app")
    .component("searchComponent",searchComponent);
})();

// controller: function(eventsService) {
//             var vm = this;
//             $ctrl.events = eventsService.getEvents();
//         }
