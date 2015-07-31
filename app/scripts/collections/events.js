/*global TriviaL, Backbone*/

TriviaL.Collections = TriviaL.Collections || {};

(function () {
    'use strict';

    TriviaL.Collections.Events = Backbone.Collection.extend({

        model: TriviaL.Models.Event

    });

})();
