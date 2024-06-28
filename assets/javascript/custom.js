/**
 * Sticky Header on Scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('sticked');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        selectHeader.classList.remove('sticked');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }
    }
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }

  /****************************************** Navbar links active state on scroll ***********************************************/
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */

  // const mobileNavShow = document.querySelector('.mobile-nav-show');
  // const mobileNavHide = document.querySelector('.mobile-nav-hide');

  // document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
  //   el.addEventListener('click', function (event) {
  //     event.preventDefault();
  //     mobileNavToogle();
  //   })
  // });

  // function mobileNavToogle() {
  //   document.querySelector('body').classList.toggle('mobile-nav-active');
  //   mobileNavShow.classList.toggle('d-none');
  //   mobileNavHide.classList.toggle('d-none');
  // }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /** ******************************* Toggle mobile nav dropdowns ********************************* */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function (event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  // ******************************************* Mobile nav toggle ******************************************/

  // Function to toggle the mobile navigation menu
  function mobileNavToggle() {
    const body = document.body;
    const mobileNavShow = document.querySelector('.mobile-nav-show');
    const mobileNavHide = document.querySelector('.mobile-nav-hide');

    body.classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  // Event listener for clicking on the mobile navigation toggle button
  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function (event) {
      event.preventDefault();
      mobileNavToggle();
    });
  });

  // Event listener for clicking on the close button in the mobile navigation menu
  document.querySelector('.mobile-nav-hide').addEventListener('click', function (event) {
    event.preventDefault();
    mobileNavToggle();
  });

  // Function to hide the mobile navigation menu on same-page/hash links
  function hideMobileNavOnLinkClick() {
    document.querySelectorAll('#navbar a').forEach(navbarlink => {
      if (!navbarlink.hash) return;

      navbarlink.addEventListener('click', () => {
        if (document.body.classList.contains('mobile-nav-active')) {
          mobileNavToggle();
        }
      });
    });
  }

  // Hide mobile navigation on link clicks
  hideMobileNavOnLinkClick();


  /******************************************** Animation on scroll function and init **************************************/
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

// <!-------------------------------------  loaders -------------------------------- --!>
// Function to show loader after 1 second
function showLoader() {
  document.getElementById('pre-loader').style.display = 'block';
}

// Function to hide loader after 5 seconds
function hideLoader() {
  document.getElementById('pre-loader').style.display = 'none';
}

// Show loader after 1 second
// setTimeout(showLoader, 1000);

// Hide loader after 5 seconds
setTimeout(hideLoader, 1000);
// <!-------------------------------------  loaders -------------------------------- --!>

// <!------------------------------------- progress-wrap -------------------------------- --!>

//Scroll back to top

(function ($) {
  "use strict";

  $(document).ready(function () {
    "use strict";

    var progressPath = document.querySelector('.progress-wrap path');
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
    progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength / height);
      progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on('scroll', function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery('.progress-wrap').addClass('active-progress');
      } else {
        jQuery('.progress-wrap').removeClass('active-progress');
      }
    });
    jQuery('.progress-wrap').on('click', function (event) {
      event.preventDefault();
      jQuery('html, body').animate({ scrollTop: 0 }, duration);
      return false;
    })


  });

})(jQuery);


// ************************************************************************************************************************************

var galleryThumbs = new Swiper(".gallery-thumbs", {
  spaceBetween: 10,
  slidesPerView: 6,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  centerInsufficientSlides: true,
  slideToClickedSlide: true
});

var galleryTop = new Swiper(".gallery-top", {
  //loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  thumbs: {
    swiper: galleryThumbs
  },
  autoplay: {
    delay: 3000, // Delay between slides in milliseconds
    disableOnInteraction: false, // Enable/disable autoplay on user interaction
    reverseDirection: false // Prevent reversing direction
  },
  on: {
    slideChange: function () {
      let activeIndex = this.activeIndex + 1;

      let activeSlide = document.querySelector(
        `.gallery-thumbs .swiper-slide:nth-child(${activeIndex})`
      );
      let nextSlide = document.querySelector(
        `.gallery-thumbs .swiper-slide:nth-child(${activeIndex + 1})`
      );
      let prevSlide = document.querySelector(
        `.gallery-thumbs .swiper-slide:nth-child(${activeIndex - 1})`
      );

      if (nextSlide && !nextSlide.classList.contains("swiper-slide-visible")) {
        this.thumbs.swiper.slideNext();
      } else if (
        prevSlide &&
        !prevSlide.classList.contains("swiper-slide-visible")
      ) {
        this.thumbs.swiper.slidePrev();
      }
    }
  }
});

// ************************************************************  ******************************************************************
// Fancybox Configuration
$('[data-fancybox="gallery"]').fancybox({
  buttons: [
    "thumbs",
    "fullScreen",
    "close"
  ],
  loop: false,
  protect: true
});

// --------------------------------- AOS
document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 6000,
    easing: "ease",
    mirror: true,
    //  once: true,
  });
});