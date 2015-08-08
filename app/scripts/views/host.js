/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Host = Backbone.View.extend({

        el: '#view',

        template: JST['app/scripts/templates/host.ejs'],

         events: {
           'click #edit-host-profile': 'editHost'
         },

        initialize: function (options) {
          this.model = new TriviaL.Models.Host(options.url);
          this.model.fetch();

          this.model.on('sync', function() {
              this.render();
          }, this);
        },

        render: function () {
          var host = this.model.attributes.host;
          var profileImageUrl = host.profileImageId ? 'http://imgur.com/' + host.profileImageId + '.jpg' :
            'http://placehold.it/350x150';
          var bannerImageUrl = host.bannerImageId ? 'http://imgur.com/' + host.bannerImageId + '.jpg' :
            'http://placehold.it/350x150';

          this.$el.html(this.template({
            'host': this.model.attributes.host,
            'profileImageUrl': 'http://imgur.com/' + this.model.attributes.host.profileImageId + '.jpg',
            'bannerImageUrl': 'http://imgur.com/' + this.model.attributes.host.bannerImageId + '.jpg'
          }));
        },

        editHost: function() {
          var url = '#/hosts/' + this.model.attributes.host.url + '/edit';
          window.router.navigate(url, {trigger: true});
        }

    });

})();
