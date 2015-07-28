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
            this.createAccount();
          } else {
            var msg = "Passwords did not match.";
            this.formError(msg);
            return false;
          }
        },

        createAccount: function(data) {
          var url = "/register";
          $.post(url,data,function(json) {
            //Deal with response;
            
          });
        },

        getFormData: function() {
          var data = {
            hostname: $("#hostname").val(),
            url: $("#url").val(),
            email: $("#email").val(),
            password: $("#password").val()
          };
          return data;
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
