/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Dashboard = Backbone.View.extend({

        el: '#view',

        nav: "#dashboard-links",

        main: "#dashboard-page",

        template: JST['app/scripts/templates/dashboard.ejs'],

        eventTemplate: JST['app/scripts/templates/host-event.ejs'],

        addTemplate: JST['app/scripts/templates/addEvent.ejs'],

        events: {
          'click #dashboard': 'dashboard',
          'click #add': 'addEventView',
          'submit #new-event': 'submitNewEvent',
          'click #delete': 'deleteEvent',
          'click #select-date': 'pickDate',
          'click #select-time': 'pickTime'
        },

        initialize: function () {
            //listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            var host = JSON.parse(localStorage.getItem('hostInfo'));

            this.$el.html(this.template({
              'hostInfo': host
            }));

            var events = new TriviaL.Collections.Events(host.hostname);
            events.fetch();

            var eventTemplate = this.eventTemplate;
            var hostEvents = $('#host-events');

            events.on('sync', function() {
              events.models.forEach(function(event) {
                var data = event.attributes;
                console.log(data);

                hostEvents.append(eventTemplate(data));
              });
            });

            return this;
        },

        /* Event functions */
        pickDate: function() {
          $('.datepicker').pickadate(
            {
              closeOnSelect: true,
              closeOnClear: true,
            }
          );
        },

        pickTime: function() {
          $('.timepicker').pickatime(
            {
              min: '8:00AM'
            }
          );
        },

        dashboard: function() {
          this.setActive('dashboard');
          $(this.main).html(this.render());
        },

        addEventView: function() {
          this.setActive('add');
          $(this.main).html(this.addTemplate());
        },

        submitNewEvent: function() {
          var host = JSON.parse(localStorage.getItem('hostInfo'));
          var data = this._getNewEventData();
          data.host = host;

          var post = $.post(TriviaL.api + '/events', data, success);
          post.error(error);
          return false;

          function success(json) {
            console.log('event was saved successfully');
            toastr.success('Event was saved');
            console.log(json);
          }

          function error(xhr) {
            console.log('event save did not succeed');
            toastr.error('Event could not be saved.');
            console.log(xhr);
          }
        },

        _getNewEventData: function() {
          return {
            name: $("#event-name").val(),
            address: $("#event-address").val(),
            city: $("#event-city").val(),
            state: $("#event-state").val(),
            zip: $("#event-zip").val(),
            date: $("#select-date").val(),
            time: $("#select-time").val()
          }
        },

        deleteEvent: function() {
          this.setActive('delete');
          console.log("Delete");
        },

        //Sets clicked link as active.
        setActive: function(id) {
          var links = $(this.nav).children('a');
          $.each(links,function(index,val){
            $("#"+val.id).removeClass('active');
          });
        $("#"+id).addClass('active');
        }

    });

})();
