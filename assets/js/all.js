"use strict";

var url = window.location.pathname;
console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
  $('.nav-item').find('a').each(function () {
    $(this).toggleClass('nav-link--active', $(this).attr('href') == url.split('/')[1]);
  });
  $('.list-group-item-link').click(function () {
    $(this).addClass("list-group-item-action");
  });
});
//# sourceMappingURL=all.js.map
