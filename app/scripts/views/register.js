/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Register = Backbone.View.extend({

        el: '#view',

        template: JST['app/scripts/templates/register.ejs'],

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        }

    });

})();
