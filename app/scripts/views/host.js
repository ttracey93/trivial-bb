/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Host = Backbone.View.extend({

        el: '#view',

        template: JST['app/scripts/templates/host.ejs'],
        
        eventTemplate: JST['app/scripts/templates/host-event.ejs'],

         events: {
           'click #edit-host-profile': 'editHost'
         },

        initialize: function (options) {
          //Change the hard coded string after testing. 
          this.eventCollection = new TriviaL.Collections.Events(/*options.url*/'Dubforce');
          this.model = new TriviaL.Models.Host(options.url);
          this.model.fetch();

          this.model.on('sync', function() {
              this.render();
          }, this);
        },

        render: function () {
          var eventTemp = this.eventTemplate;
          var events = this.eventCollection;
          var host = this.model.attributes.host;
          var profileImageUrl = host.profileImageId ? 'http://imgur.com/' + host.profileImageId + '.jpg' :
            'http://placehold.it/350x150';
          var bannerImageUrl = host.bannerImageId ? 'http://imgur.com/' + host.bannerImageId + '.jpg' :
            'http://placehold.it/350x150';
         
          
          this.$el.html(this.template({
            'host': this.model.attributes.host,
            'events': this.eventCollection.models,
            'profileImageUrl': 'http://imgur.com/' + this.model.attributes.host.profileImageId + '.jpg',
            'bannerImageUrl': 'http://imgur.com/' + this.model.attributes.host.bannerImageId + '.jpg'
          }));
          
          /* Load events 
             This code block most likely should be moved.
             Doesn't seem like a good place for it. 
          */
          events.fetch({
            success: function() {
              $.each(events.models,function(index,val) {
                var data = val.attributes;
                                
                $("#host-event-list").html(eventTemp({
                  _id: data._id,
                  name: data.name,
                  host: data.host,
                  address: data.address,
                  city: data.city,
                  state: data.state,
                  zip: data.zip,
                  dateTime: data.dateTime  
                }));
                
              });
            }
          })
        },

        editHost: function() {
          var url = '#/hosts/' + this.model.attributes.host.url + '/edit';
          window.router.navigate(url, {trigger: true});
        }

    });

})();
