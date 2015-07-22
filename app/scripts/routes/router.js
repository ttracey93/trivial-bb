/*global TriviaL, Backbone*/

TriviaL.Routers = TriviaL.Routers || {};

(function () {
    'use strict';

    console.log('This is definitely running');

    TriviaL.Routers.AppRouter = Backbone.Router.extend({
        routes: {
            "search": "search",
            "login": "login",
            "*actions": "defaultRoute"
            // matches http://example.com/#anything-here
        } ,
        // Search router event.
        search: function() {
          console.log("search view");
          new TriviaL.Views.Search();
        } ,
        // Login router event.
        login: function() {
          console.log('Will the real login route please stand up');
          new TriviaL.Views.Login();
        }
    });
    // Initiate the router
    var router = new TriviaL.Routers.AppRouter;
})();
