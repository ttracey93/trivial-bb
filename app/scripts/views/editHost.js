/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.EditHost = Backbone.View.extend({

        template: JST['app/scripts/templates/editHost.ejs'],

        el: '#view',

        events: {
          "click #profile-edit-link": 'editProfile',
          "click #account-edit-link": 'editAccount',
          "click #email-edit-link": 'editEmail',
          "click #events-edit-link": 'editEvents',
          "submit #profile-settings-form": 'setProfile',
          "submit #email-settings-form": 'setEmail',
          "submit #account-settings-form": 'setAccount'
        },

        initialize: function (url) {
          this.model = new TriviaL.Models.Host(url);
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

          return this;
        },

        /*
         * Deals with the changed made by the link clicks.
         */
        editProfile: function() {
          this._changeActiveLink('profile-edit-link');
          this._changeEditForm('profile-settings-form');
        },

        editAccount: function() {
          this._changeActiveLink('account-edit-link');
          this._changeEditForm('account-settings-form');
        },

        editEmail: function() {
          this._changeActiveLink('email-edit-link');
          this._changeEditForm('email-settings-form');
        },

        editEvents: function() {
          this._changeActiveLink('events-edit-link');
          this._changeEditForm('events-settings-form');
        },

        /*
         * Deals with sending data to server.
         */

        setProfile: function() {
          var settings = this._getProfileData();

          console.log(settings);
          this.model.set({profile: settings});
          console.log(this.model);
          this.model.save();
          return false;
        },

        setEmail: function() {
          var settings = this._getEmailData();

          this.model.set({email: settings});
          console.log(this.model);
          this.model.save({patch: true});
          return false;
        },

        setAccount: function() {
          var settings = $("#account-settings-form").serializeArray();
          console.log(settings);
          return false;
        },

        /*
         * Private methods.
         */

        _changeActiveLink: function(id) {
          //Remove active link.
          $('#setting-links').children('a').each(function(index, val) {
            var id = $(this).attr('id');
            $('#'+id).removeClass('active');
          });

          //Add active class.
          $('#'+id).addClass('active');
        },

        _changeEditForm: function(id) {
          //Hide current form.
          $('form').css('display','none');
          //Display selected form.
          $('#'+id).css('display','block');
        },

        _getProfileData: function() {
          return {
            profileImage: $('#host-profile-image').val(),
            bannerImage: $('#host-banner-image').val(),
            company: $('#host-company-name').val(),
            location: $('#host-location').val(),
            description: $('#host-description').val()
          };
        },

        _getEmailData: function() {
          return {
            email: $('#host-email-address').val(),
            private: $('#private-check').val(),
            notifications: $('#email-notifications').val()
          };
        }

    });

})();
