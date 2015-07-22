/*global TriviaL, Backbone*/

TriviaL.Collections = TriviaL.Collections || {};

(function () {
    'use strict';

    TriviaL.Collections.Todos = Backbone.Collection.extend({

        localStorage: new Backbone.LocalStorage('backbone-generator-todos'),
        initialize: function () {
            this.model = TriviaL.Models.Todo;
        }

    });

})();
