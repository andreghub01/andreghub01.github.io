$(document).ready(function () {
  $("#mobile-menu-toggle").on("click", function () {
    $("#mobile-menu-dropdown-toggle").toggle("slide");
  });
  $("#search-toggle").on("click", function () {
    $("#search-menu-dropdown-toggle").toggle("slide");
  });
  $("#close-search-menu-dropdown-toggle").on("click", function () {
    $("#search-menu-dropdown-toggle").fadeOut();
  });
  $("#tab-about-show").on("click", function () {
    $(".tab-chapter").removeClass("active");
    $(".tab-content-chapter").removeClass("active");
    $(".tab-about").addClass("active");
    $(".tab-content-about").addClass("active");
  });
  $("#tab-chapter-show").on("click", function () {
    $(".tab-chapter").addClass("active");
    $(".tab-content-chapter").addClass("active");
    $(".tab-about").removeClass("active");
    $(".tab-content-about").removeClass("active");
  });

  var position = $(window).scrollTop();
  var bpBottom = $(".background-property").css("bottom");
  console.log(bpBottom);
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var calculate = parseInt(bpBottom) + position;
    if (scroll > position) {
      //Up
      $(".footer").removeClass("footer-custom");
      if (position < 270) {
        $(".background-property").css("bottom", calculate);
      }
    } else {
      //Down
      if (position < 200) {
        $(".background-property").css("bottom", "50px");
      }
      $(".footer").addClass("footer-custom");
    }
    position = scroll;
  });

  /*
  / CAROUSEL
  */
  var carousel = $(".carousel"),
    currdeg = 0;

  $(".next").on("click", { d: "n" }, rotate);
  $(".prev").on("click", { d: "p" }, rotate);

  function rotate(e) {
    if (e.data.d == "n") {
      currdeg = currdeg - 60;
    }
    if (e.data.d == "p") {
      currdeg = currdeg + 60;
    }
    carousel.css({
      "-webkit-transform": "rotateY(" + currdeg + "deg)",
      "-moz-transform": "rotateY(" + currdeg + "deg)",
      "-o-transform": "rotateY(" + currdeg + "deg)",
      transform: "rotateY(" + currdeg + "deg)",
    });
  }
});
