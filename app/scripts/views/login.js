/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Login = Backbone.View.extend({

      el: '#view',

      template: JST['app/scripts/templates/login.ejs'],

      events: {
        "click #login-button" : "submit"
      },

      submit: function() {
        new TriviaL.Views.Home();
        return false;
      },

      initialize: function () {
          this.render();
      },

      render: function () {
          this.$el.html(this.template());
          return this;
      }

    });

})();
