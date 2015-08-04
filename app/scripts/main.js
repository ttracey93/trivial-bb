/*global TriviaL, $*/


window.TriviaL = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    api: 'http://localhost:3000/api',
    init: function () {
        'use strict';

        this.Views.navbar = new this.Views.Navbar();
    }
};

$(document).ready(function () {
    'use strict';

    // Start Backbone history a necessary step for bookmarkable URL's
    Backbone.history.start();
    TriviaL.init();
});
