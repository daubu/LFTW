var $ = jQuery.noConflict();
jQuery(document).ready(function($) {
	$(document).foundation();

	// Toggle Search form 
	$('.toggle-search').on('click', function(e) {
       e.stopPropagation();
        $('.toggle-search').next().toggleClass('opened');
    });
	$('html').click(function(e) {
        if ( $(e.target).closest('.search-form').length === 0 ) {
            $('.toggle-search').next().removeClass('opened');
        }

    });
	
	 
	// Main menu for mobile
	if($( '#dl-menu' ).length) {
		$( '#dl-menu' ).dlmenu({
			animationClasses : { classin : 'dl-animate-in-2', classout : 'dl-animate-out-2' }
		});	
	}
	
	
	//Hover main menu
	$(".menu > li.has-child").mouseenter(function() {
		if($(".dl-submenu").hasClass("down")) {
			$(".dl-submenu").removeClass("down");
	    	$(".submenu-mask").removeClass("down");		
		}
	
        $('.submenu-mask').show();
    }).mouseleave(function() {
        $('.submenu-mask').hide();
    });

 
	// Slicing Map
	if ($('.slide-map').length) { 
	    var $slickElement = $('.slide-map');
	    var $mapElement = $('.map-img-slide');
		$slickElement.slick({
			dots: true,
			arrows: true,
			prevArrow: '#slickPrev',
	    	nextArrow: '#slickNext',
	    	asNavFor: '.map-img-slide'
		});

		$mapElement.slick({
			dots: false,
			arrows: false,
			fade: true,
	    	asNavFor: '.slide-map'
		});
	}


	if ($('.slider-quote').length) { 
		$('.slider-quote').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			autoplay: true,
			asNavFor: '.slider-thumb'
		});
		$('.slider-thumb').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			centerPadding: '0px',
			asNavFor: '.slider-quote',
			centerMode: true,
			focusOnSelect: true,
			dots: false,
			arrows: false,
			autoplay: true
		});
	}


	$('.slider-three .slide-wrap').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		centerPadding: '0px',
		centerMode: true,
		focusOnSelect: true,
		dots: false,
		arrows: true,
		autoplay: false,
		variableWidth: true, 
		prevArrow: '.slPrev',
	    nextArrow: '.slNext' 
	});

	// Custom select dropdown
    if($('select').length) {
		$('select').each(function(){
			var title = $(this).attr('title');
			if( $('option:selected', this).val() != ''  ) title = $('option:selected',this).text();
			$(this)
				.css({'z-index':10,'opacity':0,'-khtml-appearance':'none'})
				.after('<span class="select custom dropdown">' + title + ' <i></i> </span>')
				.change(function(){
					val = $('option:selected',this).text() + ' <i></i> ';
					$(this).next().html(val);
					})
		});
	}

    
    if ($(window).width() > 767) {
    	//Fixed header
    	sticky_header();


    	
	}
 	

	if ($('.photo-slick').length) {
		$('.photo-slick').slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			arrows: true,
			prevArrow: '.fotoPrev',
			nextArrow: '.fotoNext',
			responsive: [
			    {
			      breakpoint: 900,
			      settings: {
			        slidesToShow: 2,
					slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
					slidesToScroll: 1
			      }
			    }
			  ]
		});
	}
	

	if($('.slide-03').length) {
		$('.slide-03').slick({
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 3,
			dots: true,
			arrows: true,
			prevArrow: '#slickPrev',
		    nextArrow: '#slickNext',
		    responsive: [
			    {
			      breakpoint: 900,
			      settings: {
			        slidesToShow: 2,
					slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 480,
			      settings: {
			        slidesToShow: 1,
					slidesToScroll: 1
			      }
			    }
			  ]
		});
	} 
	
	
	
	
	 

	
	 

 	// Load Masonry for project page
 	$( window ).load(function() { 
 		if ($('.project-list').length) {
			var $container = $('.project-list'), filters = {};
			//var screen_w = $(window).width();
			// var col = (screen_w > 1300) ? 5 : 4;
			$container.isotope({
				itemSelector: '.column', 
				resizable: false,
				masonry: { 
					// columnWidth: $container.width() / 5,
					gutter: 0
				}
			});
			$('.filter button').click(function(){
				var $this = $(this);
				$this.parent().find('button').removeClass('is-active');
				$this.addClass('is-active');
				// get group key
				var $buttonGroup = $this.parents('.button-group');
				var filterGroup = $buttonGroup.attr('data-filter-group');
				// set filter for group
				filters[ filterGroup ] = $this.attr('data-filter');
				// combine filters
				var filterValue = concatValues( filters );
				$container.isotope({ filter: filterValue });
				//$container.isotope({ filter: selector });

				//return false;
			});
			function concatValues(obj) {
			    var value = '';
			    for (var prop in obj) {
			        value += obj[prop];
			    }
			    return value;
			}

		}

		if($('.photo-slick').length) {
			$('.photo-slick').magnificPopup({
			    delegate: 'a',
			    type: 'image',
			    tLoading: 'Loading image #%curr%...',
			    mainClass: 'mfp-img-mobile',
			    gallery: {
			        enabled: true,
			        navigateByImgClick: true,
			        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
			    },
			    image: {
			        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
			    }
			});	
		}
		


		$('.slick-slider').each(function(){ 
			if ($(this).parent().find('.item-grid').length) {
				var arr = $(this).parent().find('.slick-arrow');
	    		arr.css("top", $(this).parent().find('.item-grid .thumb img').height() - 20);
			}
	    });


		// Open popup form Donatie
		if ($('.open-popup-link').length) {
			$('.open-popup-link').magnificPopup({
				type:'inline',
				midClick: true 
			});
		};
		$('#close-popup').click(function(){
		    $.magnificPopup.close();
		});

		//Custom radio box for Donatie form
		$('.btn-wrap input:radio').click(function() {
			$(this).parent().find('label').removeClass('active');
		    if ($(this).is(':checked')) {
		        $(this).prev().addClass('active');
		    } else {
		        $(this).prev().removeClass('active');
		    };
		});
	});
 	

 	// Script for small device
 	if ($(window).width() < 768) { 
 		moveElement($('.wrap-header-sl'), $('.overlay-m-menu .close'));
 		moveElement($('.banner-head'), $('header'));
 		moveElement($('.banner-head .wrap-donate-item'), $('.banner-head'));
 		$('.donatie-block').remove();
 		
 		$( window ).load(function() {
 			
			$('.donate-block').slick({
				dots: true,
				arrows: true,
				prevArrow: '.donatiePrev',
	    		nextArrow: '.donatieNext'
			});
			
		});

 		$('.nieuws-list').slick({
			dots: true,
			arrows: true,
			prevArrow: '.newsPrev',
    		nextArrow: '.newsNext'
		});

		
		
		$('.grid-square .item').each(function() { 
			$(this).addClass('item-grid'); 
		});

		$('.grid-square .full-max').slick({
			dots: true,
			arrows: true,
			prevArrow: '.proPrev',
    		nextArrow: '.proNext'
		});
 	} 

 	//Icheck
   	if ($('input[type=radio]').length || $('input[type=checkbox]').length) {
        $('input[type=radio], input[type=checkbox]').not('.dont-style').iCheck({
                checkboxClass: 'icheckbox_minimal',
                radioClass: 'iradio_minimal',
        });
    }
 	

 	var lastScrollTop = 0;
	$(window).scroll(function(event){
	   var st = $(this).scrollTop();
	   if (st > lastScrollTop){
	   		$(".dl-submenu").removeClass("up");
	       $(".submenu-mask").removeClass("up");
	       $(".dl-submenu").addClass("down");
	       $(".submenu-mask").addClass("down");
	   } else {
	      $(".dl-submenu").removeClass("down");
	       $(".submenu-mask").removeClass("down");
	       $(".dl-submenu").addClass("up");
	       $(".submenu-mask").addClass("up");
	   }
	   
	   lastScrollTop = st;
	});
});

// $(window).on("scroll touchmove", function () {
 
// });	


function sticky_header() {
 	var stickyNavTop = 0;

 	if($('.homepage').length && $(window).width() > 767) { 
 		stickyNavTop = $('header').offset().top;
 	}  
   	// our function that decides weather the navigation bar should have "fixed" css position or not.
   	var stickyNav = function(){
	    var scrollTop = $(window).scrollTop(); // our current vertical position from the top
	         
	    // if we've scrolled more than the navigation, change its position to fixed to stick to top,
	    // otherwise change it back to relative
	    if (scrollTop > stickyNavTop) { 
	        $('header').addClass('fixed-nav');
	    } else {
	        $('header').removeClass('fixed-nav'); 
	    }
	};

	stickyNav();

	$(window).scroll(function() {
		stickyNav();
	});
}



function moveElement(curElement, toElement) { 
	curElement.remove().insertAfter(toElement);
}



