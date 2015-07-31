/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.List = Backbone.View.extend({

        el: "#view",

        template: JST['app/scripts/templates/list.ejs'],

        events: {
          "click #list-date-picker": "pickDate"
        },

        initialize: function (data) {
            //this.listenTo(this.model, 'change', this.render);
            //this.model = new TriviaL.Models.Event(data);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(/*this.model.toJSON()*/));
        },

        /* Event functions */
        pickDate: function(e) {
          $('.datepickerList').pickadate(
            {
              closeOnSelect: true,
              closeOnClear: true,
            }
          );
        },

    });

})();
