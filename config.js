(function(){
  angular
    .module("app")
    .config(function($routeProvider){
      $routeProvider
      .when("/main",{
        template:"<main-component></main-component>"
      })
      .when("/search",{
        template:"<search-component></search-component>",
        controller: function($rootScope){
          $rootScope.pageClass = "searchBackgroundImage";
        }
      })
      .when("/create",{
        template:"<create-component></create-component>",
        controller: function($rootScope){
          $rootScope.pageClass = "createBackgroundImage";
        }
      })
      .otherwise({redirectTo:"/main"});
    });

})();
