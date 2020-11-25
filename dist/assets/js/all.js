"use strict";

// const { urlencoded } = require("express");
console.log('Hello!');
$(document).ready(function () {
  console.log('HesSchool Hello!');
  $('.nav-item').find('a').each(function () {
    $(this).toggleClass('nav-link--active', $(this).attr('href') == url.split('/')[1]);
  }); // $('.nav-link').toggleClass(
  //   'nav-link--active',
  //   $(this).attr('href') == url.split('/')[1]
  // );
});
//# sourceMappingURL=all.js.map
