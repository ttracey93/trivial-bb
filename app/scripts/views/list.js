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

            //Get test data.
            var testData = {"name":"Event2","host":"Superfly","address":"42 Moonland Street","city":"Orlando","state":"Florida","zip":"54487","date":"December, 1 2011","time":"3:40PM"};
            //Create model.
            var event = new TriviaL.Models.Event(testData);
            //Create collection.
            this.events = new TriviaL.Collections.Events(event);

            console.log(this.events);

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
