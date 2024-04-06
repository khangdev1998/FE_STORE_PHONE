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

  // Homepage JS
  $(".banner .owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    smartSpeed: 850,
    margin: 20,
    dots: false,
    autoplayHoverPause: true,
    autoplayTimeout: 4500,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left-short"></i>',
      '<i class="bi bi-arrow-right-short"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
    },
  });

  // Sell Tab
  $(".sell-tab span").click(function () {
    var tabId = $(this).attr("data-tab"); // Lấy giá trị data-tab của span được click

    // Active cho span được click và loại bỏ active khỏi các span khác
    $(this).addClass("active").siblings().removeClass("active");

    // Loại bỏ active khỏi tất cả các sell-pane
    $(".sell-pane").removeClass("active");

    // Thêm active vào sell-pane tương ứng với giá trị data-tab
    $('.sell-pane[data-tab="' + tabId + '"]').addClass("active");
  });

  // Accordion Content
  $(".faq-accordion-header").click(function () {
    var panel = $(this).next();
    var isOpen = panel.is(":visible");

    $(".faq-accordion-header").removeAttr("style");
    $(".faq-accordion-icon").removeAttr("style");
    $(".faq-accordion-header i")
      .removeClass("bi-dash-lg")
      .addClass("bi-plus-lg");

    $(".faq-accordion-content").slideUp(200);

    if (!isOpen) {
      panel.slideDown(200);
      $(this).css("color", "#ff6b6c");

      $(this).find(".faq-accordion-icon").css("background", "#A2ADB9");
      $(this).find("i").removeClass("bi-plus-lg").addClass("bi-dash-lg");
    }
  });
});

// Nút bấm back to top
$(window).on('scroll', debounce(function () {
  if ($(this).scrollTop() > 280) {
    $("#back-to-top").fadeIn();
  } else {
    $("#back-to-top").fadeOut();
  }
}, 200));

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      timeout = null;
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

$("#back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 800);
  return false;
});
