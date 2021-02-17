$(document).ready(function () {
  $("#mobile-menu-toggle").on("click", function () {
    $("#mobile-menu-dropdown-toggle").toggle("slide");
  });
  $("#search-toggle").on("click", function () {
    $("#search-menu-dropdown-toggle").toggle("slide", { direction: "right" });
  });
  $("#close-search-menu-dropdown-toggle").on("click", function () {
    $("#search-menu-dropdown-toggle").fadeOut();
  });
  $("#chapter-menu-toggle").on("click", function () {
    $("#chapter-menu-dropdown-toggle").toggle("slide", { direction: "right" });
    if ($(".header").hasClass("header-custom-2")) {
      $(".header").removeClass("header-custom-2", 500, "easeInBack");
    } else {
      $(".header").addClass("header-custom-2", 500, "easeInBack");
    }
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
