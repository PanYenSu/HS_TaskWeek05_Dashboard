const url = window.location.pathname;

console.log('Hello!');

$(document).ready(() => {
  console.log('HesSchool Hello!');

  $('.nav-item')
    .find('a')
    .each(function() {
      $(this).toggleClass(
        'nav-link--active',
        $(this).attr('href') == url.split('/')[1]
      );
    });
});