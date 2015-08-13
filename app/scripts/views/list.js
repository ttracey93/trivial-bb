/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.List = Backbone.View.extend({

        el: "#view",

        template: JST['app/scripts/templates/list.ejs'],

        eventTemplate: JST['app/scripts/templates/host-event.ejs'],

        events: {
          "click #list-date-picker": "pickDate"
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            //this.model = new TriviaL.Models.Event(data);

            /*
            //Get test data.
            var testData = {"name":"Event2","host":"dubforce","address":"42 Moonland Street","city":"Orlando","state":"Florida","zip":"54487","date":"December, 1 2011","time":"3:40PM"};
            //Create model.
            var event = new TriviaL.Models.Event(testData);
            //Create collection.
            this.eventsCollection = new TriviaL.Collections.Events(event);
            */
            this.render();
        },

        render: function () {

            var events = new TriviaL.Collections.Events('Jacksonville','search');
            events.fetch(
              {
                success: function() {
                  //console.log(events.models);
                }
              }
            );
            //this.$el.html(this.template({data:'df'}));
        },

        generateTmp: function(models) {
          models.fetch();
          console.log(models);
          //Passing in the collection of events.
          this.$el.html(this.template( {data:models} ));
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
