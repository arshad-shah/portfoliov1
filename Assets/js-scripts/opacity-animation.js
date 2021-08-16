$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#heroContent").fadeOut(500);
    } else {
      $("#heroContent").fadeIn(500);
    }
  });
});
