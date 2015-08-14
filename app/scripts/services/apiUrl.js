TriviaL.Services = TriviaL.Services || {};

// List of API URLs.
//Think of it like a catolog.

var URLs = {
  hosts: function(id) {
    return TriviaL.api + "/hosts/" + id;
  },
  events: function(id) {
    return TriviaL.api + "/events/" + id;
  },
  eventsOwner: function(owner) {
    return TriviaL.api + "/events/byOwner/" + owner;
  },
  eventsSearch: function(search) {
    return TriviaL.api + "/events/search/" + search;
  },
  login: function() {
    return TriviaL.api + "/login/";
  },
  subscriptions: function(userId, id) {
    return "/api/users/"+ userId +"/subscriptions/" + id;
  }
}

// Helper for accessing the URL list. Think of it as something similar
TriviaL.Services.apiUrl = function(type) {
  return URLs[type] ?
    URLs[type].apply(this, [].slice.call(arguments, 1)) :
    undefined;
}
