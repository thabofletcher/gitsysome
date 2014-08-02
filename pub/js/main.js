  function githubUser() {
    var user = $('#userName').val();
    $.post('http://localhost:8080/api/', {userName: user}, function (data) {
      console.log(data);

      $('#github-image').attr('src', data.gh.avatar_url);
      $('#github-name').text(data.gh.login);
      $('#github-description').text(data.gh.location);
      $('#github-link').attr('href', data.gh.html_url);

      etsytest = data.etsy
      $('#etsy-image').attr('src', data.etsy.results[0].image_url_75x75);
    });
}