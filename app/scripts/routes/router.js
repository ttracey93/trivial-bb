/*global TriviaL, Backbone*/

TriviaL.Routers = TriviaL.Routers || {};

(function () {
    'use strict';

    console.log('This is definitely running');

    TriviaL.Routers.AppRouter = Backbone.Router.extend({
        routes: {
            "": "search",
            "search": "list",
            "about": "about",
            "register": "register",
            "dashboard": "dashboard",
            "login": "login",
            "host": "host",
            "*actions": "defaultRoute"
            // matches http://example.com/#anything-here
        } ,
        // Search router event.
        search: function() {
          console.log("search view");
          new TriviaL.Views.Search();
        } ,
        //Create a new account.
        register: function() {
          console.log("register view");
          new TriviaL.Views.Register();
        },
        // Login router event.
        login: function() {
          console.log('Will the real login route please stand up');
          new TriviaL.Views.Login();
        }
    });
    // Initiate the router
    var router = new TriviaL.Routers.AppRouter;
})();
