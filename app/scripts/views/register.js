/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Register = Backbone.View.extend({

        el: '#view',

<<<<<<< HEAD
=======

>>>>>>> 029193062c17708bf4074a68a272bb0a5656ef02
        template: JST['app/scripts/templates/register.ejs'],

        events: {
          'submit': 'register'
        },

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        submitForm: function(e) {
          if (this.confirmPassword) {
            var data = getFormData();
          } else {
            console.log("Passwords Don't Match");
            var msg = "Passwords did not match.";
            this.formError(msg);
            return false;
          }
          return false;
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
          $("#form-error-message").text = msg;
          $("#form-error").display = 'inline';
        }

    });

})();
