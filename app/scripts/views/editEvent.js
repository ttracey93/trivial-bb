/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.EditEvent = Backbone.View.extend({

        template: JST['app/scripts/templates/editEvent.ejs'],

        el: '#view',

        events: {
          'click #return-to-event': 'returnToEvent',
          'submit #edit-event': 'changesToEvent'
        },

        initialize: function (id) {
            //this.listenTo(this.model, 'change', this.render
            this.eventId = id;
            this.model = new TriviaL.Models.Event(id);
            this.model.fetch();

            this.model.on('sync', function() {
                this.render();
            }, this);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },

        returnToEvent: function () {
          var url = "#/events/" + this.eventId;
          window.router.navigate(url, {trigger: true});
        },

        //Still working on this.
        //Issue is the server side isn't getting any data.

        changesToEvent: function (e) {
          var data = this._getChangedData();
          var url = TriviaL.api + "/events/" + this.eventId + "/edit";
          $.post(url, data, function(data) {
          });
            console.log(data);
          //this.model.save(changedAttr, {patch: true});
          return false;
        },

        _getChangedData: function() {
          return {
            name: $("#edit-name").val(),
            dateTime: $("#edit-dateTime").val(),
            address: $("#edit-address").val(),
            city: $("#edit-city").val(),
            state: $("#edit-state").val(),
            zip: $("#edit-zip").val()
          }
        }

    });

})();
