/*global TriviaL, Backbone, JST*/

TriviaL.Views = TriviaL.Views || {};

(function () {
    'use strict';

    TriviaL.Views.Todos = Backbone.View.extend({

      el: '#view',

	    template: JST['app/scripts/templates/todos.ejs'],

	    events: {
	        'submit': 'createTodo'
	    },

	    initialize: function () {
	        this.render();

	        this.listenTo(this.collection, 'add', this.addTodoItem);
	        this.listenTo(this.collection, 'reset', this.addAllTodoItems);

	        this.collection.fetch();
	    },

	    render: function () {
	        this.$el.html(this.template());

	        return this;
	    },

	    createTodo: function (event) {
	        event.preventDefault();

	        var title = this.$('#new-todo').val().trim();

	        if (title) {
	            this.collection.create(new TriviaL.Models.Todo({
	                title: title
	            }));

	            $('#new-todo').val('');
	        }
	    },

	    addTodoItem: function (todo) {
	        var view = new TriviaL.Views.Todo({ model: todo });
	        this.$('ul').append(view.render().el);
	    },

	    addAllTodoItems: function () {
	        this.collection.each(this.addTodoItem, this);
	    }

    });

})();
