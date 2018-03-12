(function(){
  var mainComponent = {
    templateUrl:"partials/main.html",
    controller:function(){
      console.log("main");
    }
  }

  angular
    .module("app")
    .component("mainComponent",mainComponent);
})();
