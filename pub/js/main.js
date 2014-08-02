  function githubUser() {
    var user = $('#userName').val();
    $.post('http://localhost:8080/api/', {userName: user}, function (data) {
      console.log(data);

      $('#github-image').attr('src', data.avatar_url);
      $('#github-name').text(data.login);
      $('#github-description').text(data.location);
      $('#github-link').attr('href', data.html_url);
    });
}