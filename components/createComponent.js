(function(){
  var createComponent = {
    templateUrl:"partials/create.html",
    controller:function(){
      console.log("create");
    }


  }


  angular
    .module("app")
    .component("createComponent",createComponent);
})();
