  function githubUser() {
    var user = $('#userName').val();
    $.post('http://localhost:8080/api/', {userName: user}, function (data) {
      console.log(data);

      $('#github-image').attr('src', data.gh.avatar_url);
      $('#github-name').text(data.gh.login);
      $('#github-description').text(data.gh.location);
      $('#github-link').attr('href', data.gh.html_url);


      $('#etsy-image').attr('src', data.etsy.results[0].avatar_url);
      $('#etsy-name').text(data.etsy.results[0].login);
      $('#etsy-description').text(data.etsy.results[0].location);
      $('#etsy-link').attr('href', data.etsy.results[0].html_url);
    });
}