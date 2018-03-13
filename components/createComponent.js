(function(){
  var createComponent = {
    templateUrl:"partials/create.html",
    controller:function(trailService){
      vm = this;
      vm.checkResults = function(){
        
      }
    }


  }


  angular
    .module("app")
    .component("createComponent",createComponent);
})();
