/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.List = Backbone.View.extend({

        el: "#view",

        template: JST['app/scripts/templates/list.ejs'],

        eventTemplate: JST['app/scripts/templates/host-event.ejs'],

        events: {
          "click #list-date-picker": "pickDate",
          "submit #listing-search": "searchListing"
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
            var _thisEl = this.$el;
            var _thisTmp = this.template;
            var events = new TriviaL.Collections.Events('Jacksonville','search');
            this.collection = events;
            events.fetch(
              {
                success: function() {
                  console.log(events.models);
                  _thisEl.html(_thisTmp( {data: events} ));
                }
              }
            );
            //this.$el.html(this.template());
        },

        searchListing: function() {

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
