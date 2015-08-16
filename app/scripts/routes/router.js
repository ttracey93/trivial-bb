/*global TriviaL, Backbone*/

TriviaL.Routers = TriviaL.Routers || {};

(function () {
    'use strict';

    TriviaL.Routers.AppRouter = Backbone.Router.extend({
        routes: {
            '': 'search',
            'search/:term': 'list',
            'about': 'about',
            'register': 'register',
            'dashboard': 'dashboard',
            'login': 'login',
            'signout': 'signout',
            'hosts/:url': 'host',
            'hosts/:url/edit': 'editHost',
            'events/:id': 'event',
            'events/:id/edit': 'editEvent',
            '*actions': 'defaultRoute'
            // matches http://example.com/#anything-here
        } ,

        // Search router event.
        search: function() {
          if(TriviaL.Views.search) {
            TriviaL.Views.search.render();
          }
          else {
            TriviaL.Views.search = new TriviaL.Views.Search();
          }
        } ,

        // Create a new account.
        register: function() {
          if(TriviaL.Views.register) {
            TriviaL.Views.register.render();
          }
          else {
            TriviaL.Views.register = new TriviaL.Views.Register();
          }
        },

        // Login router event.
        login: function() {
          if(TriviaL.Views.login) {
            TriviaL.Views.login.render();
          }
          else {
            TriviaL.Views.login = new TriviaL.Views.Login();
          }
        },

        // Signout route
        signout: function() {
          $('.logged-in').addClass('hide');
          $('.logged-out').removeClass('hide');

          localStorage.removeItem('token');
          localStorage.removeItem('hostInfo');
          delete $.ajaxSettings.token;

          this.search();
          toastr.info('Host has logged out');
        },

        // Host profile route
        host: function(url) {
          TriviaL.Views.host = new TriviaL.Views.Host({ 'url': url });
        },

        editHost: function(url) {
          if(TriviaL.Views.editHost) {
            TriviaL.Views.editHost.render();
          }
          else {
            TriviaL.Views.editHost = new TriviaL.Views.EditHost(url);
          }
        },

        // List all searched results.
        list: function(term) {
          console.log(term);
          if(TriviaL.Views.list) {
            TriviaL.Views.list.render(term);
          }
          else {
            TriviaL.Views.list = new TriviaL.Views.List(term);
          }
        },

        // Host dashboard
        dashboard: function() {
          if(localStorage.getItem('token') != null) {
            console.log('Token is not null, displaying dashboard');

            if(TriviaL.Views.dashboard) {
              TriviaL.Views.dashboard.render();
            }
            else {
              TriviaL.Views.dashboard = new TriviaL.Views.Dashboard();
            }
          }
          else {
            console.log('Token IS null, redirecting and informing');
            toastr.error('You must log in');
            this.login();
          }
        },

        event: function(id) {
          if(TriviaL.Views.event) {
            TriviaL.Views.event.render();
          }
          else {
            TriviaL.Views.event = new TriviaL.Views.Event(id);
          }
        },

        editEvent: function(id) {
          if(TriviaL.Views.editEvent) {
            TriviaL.Views.editEvent.render();
          }
          else {
            TriviaL.Views.editEvent = new TriviaL.Views.EditEvent(id);
          }
        }
    });
    // Initiate the router

    //var router = new TriviaL.Routers.AppRouter;

    /*
     * Changed by Will Lewis.
     * I couldn't access the route's methods to change pages from the view classes
     * Saw a lot of people on stackover flow set up the router as a global.
     */
    window.router = new TriviaL.Routers.AppRouter;

})();
