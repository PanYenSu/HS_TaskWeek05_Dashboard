"use strict";

var url = window.location.pathname;
console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
  $('.nav-item').find('a').each(function () {
    $(this).toggleClass('nav-link--active', $(this).attr('href') == url.split('/')[1]);
  });
  $('.btn-edit').click(function () {
    $('.editor').removeClass('d-none');
    $('.reply').addClass('d-none');
    $('.assignment-footer').addClass('d-none');
  });
  $('.btn-cancel').click(function () {
    $('.editor').addClass('d-none');
    $('.reply').removeClass('d-none');
    $('.assignment-footer').removeClass('d-none');
  });
  $('.btn-verifie').click(function () {
    if ($('.verifie-hide').hasClass('d-none')) {
      $('.verifie-show').addClass('d-none');
      $('.verifie-hide').removeClass('d-none');
    } else {
      $('.verifie-hide').addClass('d-none');
      $('.verifie-show').removeClass('d-none');
    }
  });
});
//# sourceMappingURL=all.js.map
