/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Login = Backbone.View.extend({

      el: '#view',

      template: JST['app/scripts/templates/login.ejs'],

      events: {
        "click #login-button" : "login"
      },

      login: function() {
        $('#login-button').html('<i class="fa fa-circle-o-notch fa-spin"></i>');

        var bean = {};
        bean.hostname = $('#username').val();
        bean.email = bean.hostname;
        bean.password = $('#password').val();

        var post = $.post(TriviaL.api + '/hosts/login', bean);

        post.success(function(data) {
          $('.logged-in').removeClass('hide');
          $('.logged-out').addClass('hide');

          console.log(data);

          $('#profile-link').html('Dubforce');
          $('#profile-link').attr('href', '#/hosts/dubforce');

          new TriviaL.Views.Search();
          toastr.success('Login Successful', 'TriviaL');
        });

        post.fail(function() {
          toastr.error('Login failed');
        });

        post.always(function() {
          $('#login-button').html('login');
        });

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
