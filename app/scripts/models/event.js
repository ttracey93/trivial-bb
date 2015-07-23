/*global TriviaL, Backbone*/

TriviaL.Models = TriviaL.Models || {};

(function () {
    'use strict';

    TriviaL.Models.Event = Backbone.Model.extend({

        id: '',
        host: '',
        category: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        url: '',

        initialize: function() {
        },

        defaults: {
        },

        validate: function(attrs, options) {
        },

        parse: function(response, options)  {
            return response;
        }
    });

})();
