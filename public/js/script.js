//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

var scroll = document.requestAnimationFrame ||
  function(callback) {
    window.setTimeout(callback, 1000 / 60)
  };
var elementToShow = document.querySelectorAll('.js-show-on-scroll');

function loop() {
  elementToShow.forEach(function(element) {
    if (isElementInViewport(element)) {
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);

}

loop();


// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
  // special bonus for those using jQuery
  if (typeof jQuery === "function" && el instanceof jQuery) {
    el = el[0];
  }
  var rect = el.getBoundingClientRect();
  return (
    (rect.top <= 0 &&
      rect.bottom >= 0) ||
    (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight)) ||
    (rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
  );
}


$(".nav a").on("click", function(){  $(".nav").find(".active").removeClass("active");  $(this).parent().addClass("active");});

//makes the top-btn disappear until scroll
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 400) {
        $('#top-btn').fadeIn();
    } else {
        $('#top-btn').fadeOut();
    }
});

$( '#top-nav .navbar-nav a' ).on( 'click', function () {
	$( '#top-nav .navbar-nav' ).find( 'li.active' ).removeClass( 'active' );
	$(this).parent( 'li' ).addClass( 'active' );
});

var active = $('#top-nav li .active');



// if (req.params === "/about"){
//   active.removeClass('li.active');
//   $(this).parent('li').addClass('active');
// }

// var selector = '.nav-item';
//
// $(selector).on('click', function(){
//     $(selector).removeClass('active');
//     $(this).addClass('nav-style');
// });

//ABOUT PAGE JS

// var str = $(".description".innerHTML);
// var truncatedStr = str.substring(0, 10);
//
// document.getElementByClassName(".description").innerHTML = "p" + truncatedStr + "</p>";


// POPOVER FOR SUBSCRIBE AND ARROW TOP BUTTONS
// $(document).ready(function(){
//   $('[data-toggle="popover"]').popover();
// });
//
// $(function () {
//   $('#notification-btn').popover('show');
// });
