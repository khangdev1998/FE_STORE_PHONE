$(document).ready(function () {
  // Toggle dropdown search
  $("#dropdownMenuButton").click(function (event) {
    $(this).next("ul").toggle();
    event.stopPropagation();
  });
  $(document).click(function () {
    $(".header-search__dropdown ul").hide();
  });

  // Rút gọn sidebar
  let isSidebarCollapsed = false;
  $(".sidebar-toggle").click(function () {
    $(".sidebar-list li a span").toggle();

    if (!isSidebarCollapsed) {
      $(".wrapper").css("grid-template-columns", "0fr 1fr");
      $(".sidebar-toggle i").addClass("bi bi-chevron-right");
      isSidebarCollapsed = true;
    } else {
      $(".wrapper").removeAttr("style");
      $(".sidebar-toggle i").removeClass("bi bi-chevron-right");
      isSidebarCollapsed = false;
    }
  });

  // Toggle sidebar mobile
  function createOverlayAndCloseButton() {
    if ($(".overlay").length === 0) {
      var overlay = $('<div class="overlay"></div>');
      var closeButton = $('<div class="close-btn">Close</div>');

      overlay.append(closeButton);
      $("body").append(overlay);

      overlay.on("click", function () {
        $(".sidebar").removeClass("active");
        $(this).fadeOut();
        $("body").removeClass("no-scroll");
      });

      closeButton.on("click", function () {
        $(".sidebar").removeClass("active");
        $(".overlay").fadeOut();
        $("body").removeClass("no-scroll");
      });
    }
  }

  $(".header-logo__bars").click(function (e) {
    $(".sidebar").toggleClass("active");

    createOverlayAndCloseButton();
    $(".overlay").fadeToggle();
    $("body").toggleClass("no-scroll", $(".sidebar").hasClass("active"));
  });
});
