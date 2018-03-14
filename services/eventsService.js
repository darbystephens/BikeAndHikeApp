(function(){

    function eventsService() {
        console.log("event service");
        var events = ["super cool event","another cool event","more stuff to do!","even more!"];
        return {
            addEvents: addEvents,
            getEvents: getEvents
        }

        function addEvents(event) {
            events.push(event);
        }

        function getEvents() {
            return events;
        }
    }

  angular
   .module("app")
   .factory("eventsService",eventsService);
})();


// controller: function(eventsService) {
//             var vm = this;
//             $ctrl.events = eventsService.getEvents();
//         }
