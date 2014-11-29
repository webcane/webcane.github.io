/* my custom scripts */

jQuery(window).load(function () {
	setTimeout('init()', 180);
});

jQuery(document).ready(function() {
	
	  // hide elements for animation
	  initOpacity();

	  openSite();
	  scrollAfterOpenSite();
		
	  // portfolio
	  initPortfolio();
	  portfolio23ColumnSwitch();
	  portfolioImgSwitch();
			
	  //Welcome Block Vertical Align
	  welcomeVerticalCenter();	
  
});

jQuery(window).resize(function(){ 
	//Welcome Block Vertical Align
	welcomeVerticalCenter();
});

function init() {
	hideLoader();
	
	// init animation
	loadAppear();
	loadTextillate();
}

function hideLoader() {
	$(".loader-wrapper .loader").fadeOut();
	$(".loader-wrapper").fadeOut("slow");
}

function loadAppear() {
    $('.animated.fade').appear(function () {
        var el = $(this);
        var animation = el.data('animation');
        var delay = el.data('delay');
        if (delay) {
            setTimeout(function () {
                el.addClass(animation);
                el.addClass('in');
            }, delay);
        } else {
            el.addClass(animation);
            el.addClass('in');
        }
    });
}

function loadTextillate() {
	$(".letters_wave").textillate({ 
		in: { effect: 'bounceInUp', shuffle : 'true' }, 
		out: { effect: 'bounceOutUp', shuffle : 'true' } });
}

// hide elements for animation
function initOpacity(){
	$('.animated').addClass('fade');
}

function openSite() {
	  $('.lock a').click(function(){
		  $(this).children("i").removeClass('fa-lock')
	        .addClass('fa-unlock')
	        .fadeIn(1000, function () {
	        	// open site
	        	$('.site-wrapper').css("height", "auto");
	        });
		  // hide lock
		  $(this).fadeOut(2000);
	  });
}

function scrollAfterOpenSite() {
	  // smooth scrolling for internal anchor links
	  $('a[href*=#]:not([href=#])').click(function(event){
	      var target = $(this.hash);		
	      if (target.length) {
	        //event.preventDefault();
	  		  $('html,body').animate({scrollTop: target.offset().top}, 900);
	                return false; 
	      }
	  });	
}

function initPortfolio() {
	  $('#portfolio_grid .mix').addClass('mixitup_fade');  
	  // INSTANTIATE MIXITUP		
	  $('#portfolio_grid').mixitup();
}

function portfolio23ColumnSwitch() {
	  /* show grid in 2 or 3 columns */
	  $('[data-toggle=cols]').click(function() {
		  mix = $('.mix');
		  mix.toggleClass('col-12');
		  mix.toggleClass('col-md-6');
		  mix.toggleClass('col-lg-6');
		  mix.toggleClass('col-6');    
		  mix.toggleClass('col-md-4');
		  mix.toggleClass('col-lg-4');  
	  });
}

function portfolioImgSwitch() {
	  /* show grid images responsive or not */
	  $('[data-toggle=imgs-resp]').click(function() {
		  $('.mix img').toggleClass('img-responsive');  
	  });
}

//Welcome Block Vertical Align
function welcomeVerticalCenter() {
	var body_h = $(window).height();
	var container_h = $('.welcome_logo').height();	
	var marg_top = Math.abs((body_h - container_h)/2);
	var marg_top_offset = 60;	
	$('.welcome_logo').css('padding-top', marg_top - marg_top_offset);
	$('.welcome_logo').css('padding-bottom', marg_top + marg_top_offset);
}