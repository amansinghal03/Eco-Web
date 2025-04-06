/**
 * Exoplanet Custom JS
 *
 * @package Exoplanet
 *
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 */




jQuery(function($) {
    /* Top Search */
    jQuery('.search-box span i').click(function(){
        jQuery(".serach_outer").toggle();
    });


   
  const circularProgress = document.querySelectorAll(".circular-progress");

  Array.from(circularProgress).forEach((progressBar) => {
    const progressValue = progressBar.querySelector(".percentage");
    const innerCircle = progressBar.querySelector(".inner-circle");
    
    let startValue = 0,
      endValue = Number(progressBar.getAttribute("data-percentage")),
      speed = 50,
      progressColor = progressBar.getAttribute("data-progress-color");
// Set border radius for the progress bar
// progressBar.style.borderRadius = "50%";
    const progress = setInterval(() => {
      startValue++;
      progressValue.textContent = `${startValue}%`;
      progressValue.style.color = `${progressColor}`;

      innerCircle.style.backgroundColor = `${progressBar.getAttribute(
        "data-inner-circle-color"
      )}`;


      progressBar.style.background = `conic-gradient(${progressColor} ${
        startValue * 3.6
      }deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
      if (startValue === endValue) {
        clearInterval(progress);
      }
    }, speed);
  });
  



  
  
    
});

// slider custom dots

document.addEventListener('DOMContentLoaded', function () {
  var carousel = document.getElementById('carouselExampleCaptions');
  var customDots = document.querySelectorAll('.custom-dots .dot-wrapper button');

  carousel.addEventListener('slid.bs.carousel', function (event) {
      // Remove 'active' class from all custom dots
      customDots.forEach(function(dot) {
          dot.classList.remove('active');
      });

      // Add 'active' class to the corresponding custom dot
      customDots[event.to].classList.add('active');
  });
});


/* Mobile responsive Menu*/

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
 
jQuery('document').ready(function(){



  // Our Services Carousel
var owlServices = jQuery('#our-services .owl-carousel');

owlServices.owlCarousel({
  margin: 20,
  nav: true,
  autoplay: true,
  loop: true,
  lazyLoad: true,
  autoplayTimeout: 3000,
  dots: true,
  autoplayHoverPause: true,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 2
    },
    1200: {
      items: 3
    }
  },
  onInitialized: addNumberingToDots1,
  onTranslated: addNumberingToDots1
});

function addNumberingToDots1() {
  var dots = jQuery('#our-services .owl-dot'); // Scope to #our-services carousel
  dots.each(function(index) {
    jQuery(this).html('<span>0' + (index + 1) + '</span>');
  });
}

// Slider Carousel
var owlSlider = jQuery('#slider .owl-carousel');
owlSlider.owlCarousel({
  margin: 20,
  nav: true,
  autoplay: true,
  loop: true,
  lazyLoad: true,
  autoplayTimeout: 3000,
  dots: true,
  autoplayHoverPause: true,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 1
    },
    1200: {
      items: 1
    }
  },
  onInitialized: addNumberingToDots2,
  onTranslated: addNumberingToDots2
});

function addNumberingToDots2() {
  var dots = jQuery('#slider .owl-dot'); // Scope to #slider carousel
  dots.each(function(index) {
    if (index === 3) {
      // Add "Scroll Down" text to the third dot (index 2)
      jQuery(this).html('<span>Scroll Down</span>');
    } else {
      // Add regular numbering to other dots
      jQuery(this).html('<span>0' + (index + 1) + '</span>');
    }
  });
}
jQuery(document).on('click', '#slider .owl-dot', function() {
  var index = jQuery(this).index();
  if (index === 3) {
    // Scroll to a specific section when the third dot is clicked
    jQuery('html, body').animate({
      scrollTop: jQuery('.target-section').offset().top
    }, 1000);
  }
});



// Testimonial Carousel
var owlTestimonial = jQuery('#testimonial .owl-carousel');

owlTestimonial.owlCarousel({
  margin: 20,
  nav: true,
  autoplay: true,
  loop: true,
  lazyLoad: true,
  autoplayTimeout: 3000,
  dots: true,
  autoplayHoverPause: true,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 1
    },
    992: {
      items: 1
    },
    1200: {
      items: 1
    }
  },
  onInitialized: addNumberingToDots3,
  onTranslated: addNumberingToDots3
});

function addNumberingToDots3() {
  var dots = jQuery('#testimonial .owl-dot'); // Scope to #testimonial carousel
  dots.each(function(index) {
    jQuery(this).html('<span>0' + (index + 1) + '</span>');
  });
}




// Testimonial Carousel
var owlProject = jQuery('#project .owl-carousel');

owlProject.owlCarousel({
  margin: 20,
  nav: true,
  autoplay: true,
  loop: true,
  lazyLoad: true,
  autoplayTimeout: 3000,
  dots: true,
  autoplayHoverPause: true,
  navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 2
    },
    1200: {
      items: 3
    }
  },
  onInitialized: addNumberingToDots4,
  onTranslated: addNumberingToDots4
});

function addNumberingToDots4() {
  var dots = jQuery('#project .owl-dot'); // Scope to #project carousel
  dots.each(function(index) {
    jQuery(this).html('<span>0' + (index + 1) + '</span>');
  });
}
  

  new WOW().init();




  var owl = jQuery('#teams .owl-carousel');
  owl.owlCarousel({
  margin:20,
  nav: false,
  autoplay : true,
  lazyLoad: true,
  autoplayTimeout: 3000000,
  loop: false,
  dots: true,
  navText : ['<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>','<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>'],
  responsive: {
    0: {
      items: 1
    },
    576: {
      items: 2
    },
    992: {
      items: 3
    },
    1200: {
      items: 3
    }
  },
  autoplayHoverPause : true,
  mouseDrag: true
});





var owl = jQuery('#all-ecologies .owl-carousel');
owl.owlCarousel({
margin:20,
nav: false,
autoplay : true,
lazyLoad: true,
autoplayTimeout: 3000000,
loop: false,
dots: true,
navText : ['<i class="fa-solid fa-arrow-left" aria-hidden="true"></i>','<i class="fa-solid fa-arrow-right" aria-hidden="true"></i>'],
responsive: {
  0: {
    items: 1
  },
  576: {
    items: 2
  },
  992: {
    items: 3
  },
  1200: {
    items: 4
  }
},
autoplayHoverPause : true,
mouseDrag: true
});
  






    var owl = jQuery('#frequent-updates .owl-carousel');
      owl.owlCarousel({
      margin:20,
      nav: false,
      autoplay : true,
      lazyLoad: true,
      autoplayTimeout: 3000,
      loop: false,
      dots:false,
      navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 2
        },
        768: {
          items: 2
        },
        1000: {
          items: 3
        }
      },
      autoplayHoverPause : true,
      mouseDrag: true
    });
});

var owl = jQuery('#counter .owl-carousel');
owl.owlCarousel({
margin:20,
nav: false,
autoplay : true,
lazyLoad: true,
autoplayTimeout: 3000,
loop: false,
dots:false,
navText : ['<i class="fa fa-chevron-left" aria-hidden="true"></i>','<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
responsive: {
  0: {
    items: 1
  },
  576: {
    items: 2
  },
  768: {
    items: 2
  },
  1000: {
    items: 4
  }
},
autoplayHoverPause : true,
mouseDrag: true
});


//Loader
jQuery(window).load(function() {
  jQuery(".preloader").delay(2000).fadeOut("slow");
});














  // Appoinment contact form date input START
  if (jQuery('.appointment-date input').length) {

    var today = new Date().toISOString().split('T')[0];

    jQuery(".appointment-date input").attr('min', today);
    jQuery('.appointment-date input').attr('type', 'text');

    jQuery('.appointment-date input').focus(function() {
      jQuery(this).attr('type', 'date');
      jQuery('.appointment-date .fa-calendar-days').hide();
    });

    jQuery('.appointment-date input').blur(function() {
      jQuery(this).attr('type', 'text');
      jQuery('.appointment-date .fa-calendar-days').show();
    });
  }
  // Appoinment contact form date input END

jQuery('document').ready(function() {
  jQuery('#counter .count').each(function () {
    var $this = jQuery(this);
    var finalValue = parseFloat($this.text());

    $this.prop('Counter', 0).animate({
        Counter: finalValue
    }, {
        duration: 8000,
        easing: 'swing',
        step: function (now) {
            // Check if the original value has a decimal part
            if (finalValue % 1 !== 0) {
                // If decimal, display with one decimal place
                $this.text(now.toFixed(1));
            } else {
                // If integer, display as a whole number
                $this.text(Math.ceil(now));
            }
        }
    });
});



  var footer1=jQuery('#contact-details').outerHeight();
  jQuery('.google-map iframe').height(footer1);

  // ------------ Scroll Top ---------------

  jQuery(window).scroll(function() {
    if (jQuery(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      jQuery('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      jQuery('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  jQuery('#return-to-top').click(function() {      // When arrow is clicked
    jQuery('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
    }, 2000);
  });


});

// ------------ Sticky Navbar -------------------

window.onscroll = function() { 
  if ( jQuery('#sticky-onoff').html() == 'yes' ) {
    myScrollNav()
  }
};

var navbar = document.getElementById("header");
var sticky = navbar.offsetTop;
function myScrollNav() {
  if (window.pageYOffset > sticky) {
    //alert(window.pageYOffset);
    navbar.classList.add("sticky");
    navbar.classList.add("stickynavbar");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.remove("stickynavbar");
  }
}

jQuery(function() {
  jQuery("#addClass").click(function () {
    jQuery('#qnimate').addClass('popup-box-on');
      });
    jQuery("#removeClass").click(function () {
      jQuery('#qnimate').removeClass('popup-box-on');
    });
})








//Video Popup
jQuery(function () {
  //----- OPEN
  jQuery('[data-popup-open]').on('click', function (e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-open');
    jQuery('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
    e.preventDefault();
  });
  //----- CLOSE
  jQuery('[data-popup-close]').on('click', function (e) {
    var targeted_popup_class = jQuery(this).attr('data-popup-close');
    jQuery('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);

    e.preventDefault();
  });
  jQuery('#about_popup_dismiss').on('click', function (e) {
    jQuery('#sports-video-popup').attr("src", "about:blank");
  });
  jQuery('#about_popup_dismiss').on('click', function (e) {
    jQuery('#about-video-popup').attr("src", "about:blank");
  });
});

var modal = document.getElementById("modal");
var closeButton = document.getElementById("close-button");
var prevButton = document.getElementById("prev-button");
var nextButton = document.getElementById("next-button");
var modalImage = document.getElementById("modal-image");
var images = []; // Store image URLs here
var currentImageIndex = 0;

function openModal(imageSrc) {
    modal.style.display = "block";
    modalImage.src = imageSrc;
}

function closeModal() {
    modal.style.display = "none";
}

// Populate images array
var links = document.getElementsByClassName("modal-link");
Array.from(links).forEach(function(link) {
    images.push(link.href);
    link.addEventListener("click", function(event) {
        event.preventDefault();
        openModal(this.href);
        currentImageIndex = images.indexOf(this.href);
    });
});

closeButton.addEventListener("click", closeModal);
prevButton.addEventListener("click", function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImage.src = images[currentImageIndex];
});
nextButton.addEventListener("click", function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImage.src = images[currentImageIndex];
});
window.addEventListener("click", function(event) {
    if (event.target == modal) {
        closeModal();
    }
});


  




// numbers increament and Decrements

function increment() {
  var input = document.querySelector('.quantity-input');
  var value = parseInt(input.value);
  input.value = value + 1 ;
}

function decrement() {
  var input = document.querySelector('.quantity-input');
  var value = parseInt(input.value);
  if (value > 1) {
      input.value = value - 1;
  }
}

function increment() {
  var input = document.getElementById('quantityValue');
  var value = parseInt(input.value);
  input.value = value + 1;
  updateLabel();
}

function decrement() {
  var input = document.getElementById('quantityValue');
  var value = parseInt(input.value);
  if (value > 1) {
      input.value = value - 1;
      updateLabel();
  }
}

function updateLabel() {
  var input = document.getElementById('quantityValue');
  var label = document.getElementById('person-label');
  var value = parseInt(input.value);
  label.textContent = value + ' person' + (value !== 1 ? 's' : '');
}





$(document).ready(function() {
	// Users can skip the loading process if they want.
	$('.skip').click(function() {
		$('.overlay, body').addClass('loaded');
	})
	
	// Will wait for everything on the page to load.
	$(window).bind('load', function() {
		$('.overlay, body').addClass('loaded');
		setTimeout(function() {
			$('.overlay').css({'display':'none'})
		}, 2000)
	});
	
	// Will remove overlay after 1min for users cannnot load properly.
	setTimeout(function() {
		$('.overlay, body').addClass('loaded');
	}, 60000);
});