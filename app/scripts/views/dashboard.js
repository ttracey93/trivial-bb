/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Dashboard = Backbone.View.extend({

        el: '#view',

        nav: "#dashboard-links",

        main: "#dashboard-page",

        template: JST['app/scripts/templates/dashboard.ejs'],

        addTemplate: JST['app/scripts/templates/dashboard/add.ejs'],

        events: {
          'click #dashboard': 'dashboard',
          'click #add': 'addEvent',
          'click #delete': 'deleteEvent'
        },

        initialize: function () {
            //listenTo(this.model, 'change', this.render);
            this.render();
        },

        render: function () {
            this.$el.html(this.template(/*this.model.toJSON()*/));
            return this;
        },

        /* Event functions */

        dashboard: function() {
          this.setActive('dashboard');
          $(this.main).html(this.render());
        },

        addEvent: function() {
          this.setActive('add');
          $(this.main).html(this.addTemplate());
        },

        deleteEvent: function() {
          this.setActive('delete');
          console.log("Delete");
        },

        //Sets clicked link as active.
        setActive: function(id) {
          var links = $(this.nav).children('a');
          $.each(links,function(index,val){
            $("#"+val.id).removeClass('active');
          });
        $("#"+id).addClass('active');
        }

    });

})();
