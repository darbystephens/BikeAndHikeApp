(function(){
  var searchComponent = {
    templateUrl:"partials/search.html",
    controller: function(trailService){
      console.log("search");
      var vm = this;
      trailService.getTrailInfo().then(function(rows){
        vm.rows = rows;
      });

    }
  }

  angular
    .module("app")
    .component("searchComponent",searchComponent);
})();
