// Instantiate services
TriviaL.Services = TriviaL.Services || {};

// Global Login service
TriviaL.Services.Login = function(data) {
  var post = $.post(TriviaL.api + '/hosts/login', data);

  post.success(function(data) {
    $('.logged-in').removeClass('hide');
    $('.logged-out').addClass('hide');

    $.ajaxSetup({ 'token': data.token });
    localStorage.setItem('token', data.token);
    localStorage.setItem('hostInfo', JSON.stringify(data.host));

    $('#profile-link').html(data.host.hostname);
    $('#profile-link').attr('href', '#/hosts/' + data.host.url);

    new TriviaL.Views.Dashboard();
    toastr.success('Login Successful', 'TriviaL');
  });

  post.fail(function() {
    toastr.error('Login failed');
  });

  post.always(function() {
    $('#login-button').html('login');
  });
}
