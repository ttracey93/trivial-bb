/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Register = Backbone.View.extend({

        el: '#view',

        template: JST['app/scripts/templates/register.ejs'],

        events: {
          'submit #register-form': 'register'
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        register: function(e) {
          if (this.confirmPassword()) {
            var data = this.getFormData();

            //Send to server to create account.
            this.createAccount(data);
          }
          else {
            toastr.error('Passwords must match');
          }

          return false;
        },

        createAccount: function(bean) {
          var url = TriviaL.api + "/hosts/register";

          var post = $.post(url, bean, function(data) {
            //Deal with response;
            $('.logged-in').removeClass('hide');
            $('.logged-out').addClass('hide');

            $.ajaxSetup({ 'token': data.token });
            localStorage.setItem('token', data.token);
            localStorage.setItem('hostInfo', JSON.stringify(data.host));

            $('#profile-link').html(data.host.hostname);
            $('#profile-link').attr('href', '#/hosts/' + data.host.url);

            new TriviaL.Views.Dashboard();
            toastr.success('Registration Successful', 'TriviaL');
          });

          post.error(function(xhr) {
            console.log(xhr.responseJSON);

            xhr.responseJSON.errors.forEach(function(error) {
              console.log(error);
              toastr.error(error);
            });
          });
        },

        getFormData: function() {
          return {
            hostname: $("#hostname").val(),
            url: $("#url").val(),
            email: $("#email").val(),
            password: $("#password").val()
          };
        },

        confirmPassword: function() {
          var password = $("#password").val();
          var confirmPassword = $("#confirm-password").val();
          if (password === confirmPassword) {
            return true;
          }
          return false;
        },

        formError: function(msg) {
          var errorSign = "<i class='fa fa-exclamation-circle'></i>";
          msg = errorSign + " " + msg;
          $("#form-error-message")
            .html(msg)
            .css('display','block');
        }
    });

})();
