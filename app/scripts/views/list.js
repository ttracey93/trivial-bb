/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.List = Backbone.View.extend({
        
        selectedDayFilters: [],
        
        el: "#view",

        template: JST['app/scripts/templates/list.ejs'],

        eventTemplate: JST['app/scripts/templates/host-event.ejs'],

        events: {
          "click #list-date-picker": "pickDate",
          "submit #listing-search": "searchListing",
          "change #day-checkboxes": "dayFilter"
        },

        initialize: function (data) {
          //console.log(data);
          this.eventCollection = new TriviaL.Collections.Events(data,'search');
          this.render();
        },

        render: function() {
          var _thisEl = this.$el;
          var _thisTmp = this.template;
          var events = this.eventCollection
          
          events.fetch(
            {
              success: function() {
                _thisEl.html(_thisTmp( {data: events} ));
                $('.collapsible').collapsible({
                  // A setting that changes the collapsible behavior to expandable instead of the default accordion style
                  accordion : false,
                  expandable: true
                });
              }
            }
          );
        },

        //Renders a new listing based off new search term.
        searchListing: function(e) {
          
          var term = $("#search-listing-input").val();
          TriviaL.Services.Geocode(term,function(city,state) {
            var url = '#/search/' + city + "," + state;
            window.router.navigate(url, {trigger: true});  
          });
           
          return false;
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
        
        /**
         * I was trying to solve the filter by day issue.
         * I have it done by a single day.
         * However an issue comes up when a user selected multiply days to filter by.
         */
        
        //Filters the list of events by day of the week.
        dayFilter: function(e) {
          
          //Get user selected day(s).
          //var selectedDay = this._getNumericDayValue(e.target.id);
          this.selectedDayFilters.push(this._getNumericDayValue(e.target.id));
          for(var i = 0; i < this.eventCollection.models.length; i++) {
            var currentDay = this.eventCollection.models[i].attributes.dateTime;       
            var dateObj = new Date(currentDay);
            
            //Remove all events that are not on a day that is in the "selectedDayFilters."
            for(var k = 0; k < this.selectedDayFilters.length; k++) {
              if(dateObj.getDay() != k) {
                this.eventCollection.remove(this.eventCollection.at(i));                
              }  
            }
            
            /*
            if(dateObj.getDay() != selectedDay) {
              this.eventCollection.remove(this.eventCollection.at(i));
            } 
            */
          }
          //Update event listings view.
          $("#event-listings").html(this.eventTemplate( {data: this.eventCollection} ));
        },
        
        _getNumericDayValue: function(val) {
          var day = val.toLowerCase();
          var dayList = {
            'sunday': 0,
            'monday': 1,
            'tuesday': 2,
            'wednesday': 3,
            'thursday': 4,
            'friday': 5,
            'saturday': 6,
          };
          return dayList[day];
        }

    });

})();
