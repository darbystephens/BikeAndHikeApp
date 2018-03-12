(function(){
  var searchComponent = {
    templateUrl:"partials/search.html",
    controller: function(){
      console.log("search");
    }
  }

  angular
    .module("app")
    .component("searchComponent",searchComponent);
})();
