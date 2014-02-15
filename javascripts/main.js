/* my custom scripts */
jQuery(document).ready(function() {
  
  // smooth scrolling for internal anchor links
  $('a[href*=#]:not([href=#])').click(function(event){
      var target = $(this.hash);		
      if (target.length) {
        //event.preventDefault();
  		  $('html,body').animate({scrollTop: target.offset().top}, 900);
                return false; 
      }
  });
  
  // animate about
  $('#about').waypoint(function() {
        $('#about h2').addClass('d7 animated fadeInDown').addClass('in');
        $('.author_foto').addClass('d6 animated rotateInDownLeft').addClass('in');
		$('.author_words').addClass('d8 animated lightSpeedIn').addClass('in');
     }, { 
        triggerOnce: true, offset: 395
  });

  // animate portfolio
  $('#portfolio').waypoint(function() {
        $('#portfolio h2').addClass('d3 animated bounceIn').addClass('in');
		$('#portfolio .filter_controls').addClass('d4 animated bounceInRight').addClass('in');
		$('#portfolio .portfolio_description').addClass('d2 animated bounceInLeft').addClass('in');
		$('#portfolio #portfolio_grid').addClass('d7 animated bounceInRight').addClass('in');
    }, { 
        triggerOnce: true, offset: 395
	});
	
  $('#portfolio_grid .mix').addClass('mixitup_fade');  
  // INSTANTIATE MIXITUP		
  $('#portfolio_grid').mixitup();

	
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
		
		/* show grid images responsive or not */
  $('[data-toggle=imgs-resp]').click(function() {
	  $('.mix img').toggleClass('img-responsive');  
  });

  
	//Home Height and W
 // blockFullScreen('#home');
 // blockFullScreen('#about');
 // blockFullScreen('#portfolio');  
	
  //Welcome Block Vertical Align
  welcomeVerticalCenter();	
  
  // hide elements for animation
  initOpacity();
  
  
});


jQuery(window).resize(function(){
//  blockFullScreen('#home');
//  blockFullScreen('#about');
//  blockFullScreen('#portfolio');  
	
	//Welcome Block Vertical Align
	welcomeVerticalCenter();
});


//Home Height & Width
function blockFullScreen(elem){
	wh = $(window).height();
  ww = $(window).width();
	$(elem).css({min_height:wh, width:ww});
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


  // hide elements for animation
function initOpacity(){
  $('#about h2').addClass('fade');
  $('.author_foto').addClass('fade');
  $('.author_words').addClass('fade');
  $('#portfolio h2').addClass('fade');
  $('#portfolio .portfolio_description').addClass('fade');
  $('#portfolio .filter_controls').addClass('fade');
  $('#portfolio #portfolio_grid').addClass('fade');
}