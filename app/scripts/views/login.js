/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Login = Backbone.View.extend({

      el: '#view',

      template: JST['app/scripts/templates/login.ejs'],

      events: {
        "submit #login-form": "login"
      },

      login: function() {
        $('#login-button').html('<i class="fa fa-circle-o-notch fa-spin"></i>');

        var data = {};
        data.hostname = $('#username').val();
        data.email = data.hostname;
        data.password = $('#password').val();

        TriviaL.Services.Login(data);

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
