/*
	Strata by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		settings = {

			// Parallax background effect?
				parallax: true,

			// Parallax factor (lower = more intense, higher = less intense).
				parallaxFactor: 20

		};

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1800px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ '481px',   '736px'  ],
			xsmall:  [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Touch?
		if (browser.mobile) {

			// Turn on touch mode.
				$body.addClass('is-touch');

			// Height fix (mostly for iOS).
				window.setTimeout(function() {
					$window.scrollTop($window.scrollTop() + 1);
				}, 0);

		}

	// Footer.
		breakpoints.on('<=medium', function() {
			$footer.insertAfter($main);
		});

		breakpoints.on('>medium', function() {
			$footer.appendTo($header);
		});

	// Header.

		// Parallax background.

			// Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
				if (browser.name == 'ie'
				||	browser.mobile)
					settings.parallax = false;

			if (settings.parallax) {

				breakpoints.on('<=medium', function() {

					$window.off('scroll.strata_parallax');
					$header.css('background-position', '');

				});

				breakpoints.on('>medium', function() {

					$header.css('background-position', 'left 0px');

					$window.on('scroll.strata_parallax', function() {
						$header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
					});

				});

				$window.on('load', function() {
					$window.triggerHandler('scroll');
				});

			}

	// Main Sections: Two.

		// Lightbox gallery.
			$window.on('load', function() {

				$('#two').poptrox({
					caption: function($a) { return $a.next('h3').text(); },
					overlayColor: '#2c2c2c',
					overlayOpacity: 0.85,
					popupCloserText: '',
					popupLoaderText: '',
					selector: '.work-item a.image',
					usePopupCaption: true,
					usePopupDefaultStyling: false,
					usePopupEasyClose: false,
					usePopupNav: true,
					windowMargin: (breakpoints.active('<=small') ? 0 : 50)
				});

			});
// Menu.
var $menu = $('#menu');

$menu.wrapInner('<div class="inner"></div>');

$menu._locked = false;

$menu._lock = function() {

	if ($menu._locked)
		return false;

	$menu._locked = true;

	window.setTimeout(function() {
		$menu._locked = false;
	}, 350);

	return true;

};

$menu._show = function() {

	if ($menu._lock())
		$body.addClass('is-menu-visible');

};

$menu._hide = function() {

	if ($menu._lock())
		$body.removeClass('is-menu-visible');

};

$menu._toggle = function() {

	if ($menu._lock())
		$body.toggleClass('is-menu-visible');

};

$menu
	.appendTo($body)
	.on('click', function(event) {
		event.stopPropagation();
	})
	.on('click', 'a', function(event) {

		var href = $(this).attr('href');

		event.preventDefault();
		event.stopPropagation();

		// Hide.
			$menu._hide();

		// Redirect.
			if (href == '#menu')
				return;

			window.setTimeout(function() {
				window.location.href = href;
			}, 350);

	})
	.append('<a class="close" href="#menu">Close</a>');
$body
	.on('click', 'a[href="#menu"]', function(e) {
		e.preventDefault();
		e.stopPropagation();
		$menu._toggle();
	})
	.on('click', function() {
		$menu._hide();
	})
	.on('keydown', function(e) {
		if (e.keyCode == 27) $menu._hide();
	});

$menu.on('click', function(e) {
	e.stopPropagation();
});
})(jQuery);

    var closeButton = document.querySelector("#menu a.close")
  
    if (closeButton) {
      // Remove any text nodes directly inside the close button
      Array.from(closeButton.childNodes).forEach((node) => {
        if (node.nodeType === 3) {
          // Text node
          closeButton.removeChild(node)
        }
      })
  
      // Add an empty span that can be targeted by screen readers if needed
      var span = document.createElement("span")
      span.className = "sr-only"
      span.textContent = "Close menu"
      span.style.position = "absolute"
      span.style.width = "1px"
      span.style.height = "1px"
      span.style.padding = "0"
      span.style.margin = "-1px"
      span.style.overflow = "hidden"
      span.style.clip = "rect(0, 0, 0, 0)"
      span.style.whiteSpace = "nowrap"
      span.style.border = "0"
      closeButton.appendChild(span)
    }
  // Menu functionality
;(($) => {
    var $body = $("body"),
      $menu = $("#menu"),
      $menuToggle = $(".menuToggle"),
      $menuClose = $menu.find(".close")
  
    // Menu toggle
    $menuToggle.on("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      $body.toggleClass("is-menu-visible")
    })
  
    // Close menu when clicking on the close button
    $menuClose.on("click", (e) => {
      e.preventDefault()
      e.stopPropagation()
      $body.removeClass("is-menu-visible")
    })
  
    // Close menu when clicking outside
    $body.on("click", (e) => {
      if ($body.hasClass("is-menu-visible") && !$(e.target).closest("#menu").length) {
        e.preventDefault()
        e.stopPropagation()
        $body.removeClass("is-menu-visible")
      }
    })
  
    // Prevent clicks inside menu from closing it
    $menu.on("click", (e) => {
      e.stopPropagation()
    })
  
    // Close menu with escape key
    $(document).on("keydown", (e) => {
      if (e.keyCode == 27 && $body.hasClass("is-menu-visible")) {
        $body.removeClass("is-menu-visible")
      }
    })
  })(jQuery);
