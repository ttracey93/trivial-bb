/*global TriviaL, Backbone*/

TriviaL.Routers = TriviaL.Routers || {};

(function () {
    'use strict';

    console.log('This is definitely running');

    TriviaL.Routers.AppRouter = Backbone.Router.extend({
        routes: {
            "login": "login",
            "*actions": "defaultRoute"
            // matches http://example.com/#anything-here
        }
    });
    // Initiate the router
    var router = new TriviaL.Routers.AppRouter;

    router.on('route:login', function() {
      console.log('Will the real login route please stand up');
      new TriviaL.Views.Login();
    });

})();
