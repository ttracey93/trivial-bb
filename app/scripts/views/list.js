/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.List = Backbone.View.extend({

        el: "#view",

        template: JST['app/scripts/templates/list.ejs'],

        events: {},

        initialize: function (data) {
            //this.listenTo(this.model, 'change', this.render);
            //this.model = new TriviaL.Models.Event(data);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(/*this.model.toJSON()*/));
        }

    });

})();
