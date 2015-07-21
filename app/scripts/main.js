/*global TriviaL, $*/


window.TriviaL = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        console.log('Hello from Backbone!');

        new this.Views.Login();
    }
};

$(document).ready(function () {
    'use strict';

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
    TriviaL.init();
});
