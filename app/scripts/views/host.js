/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Host = Backbone.View.extend({

        el: '#view',

        template: JST['app/scripts/templates/host.ejs'],

         events: {},

        initialize: function (options) {
          this.model = new TriviaL.Models.Host(options.url);
          this.model.fetch();

          this.model.on('sync', function() {
              this.render();
          }, this);
        },

        render: function () {
          console.log(this.model.attributes.host);

          this.$el.html(this.template({
            'host': this.model.attributes.host,
            'profileImageUrl': 'http://imgur.com/' + this.model.attributes.host.profileImageId + '.jpg',
            'bannerImageUrl': 'http://imgur.com/' + this.model.attributes.host.bannerImageId + '.jpg'
          }));
        }

    });

})();
