/*global TriviaL, Backbone*/

TriviaL.Models = TriviaL.Models || {};

(function () {
    'use strict';

    TriviaL.Models.Host = Backbone.Model.extend({

        idAttribute: '_id',

        initialize: function(targetUrl) {
          this.url = TriviaL.Services.apiUrl('hosts',targetUrl);
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
