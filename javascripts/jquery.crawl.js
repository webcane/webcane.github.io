(function($){  
   $.fn.crawl = function(options) {
   
  /* var settings = $.extend({}, $.fn.crawl.defaults, options); */
  var settings = $.extend({ duration: 600,height: 'auto', shutter: 'box-shutter' }, options || {});
    /* 
      options = $.extend({  
         duration: 600,
         height  : 'auto', 
         shutter : 'box-shutter'
      }, options);   
    */
      return this.each(function () {  
         var box = $(this);
                
         $(box).hover(function () {
            $(this).find('.'+ settings.shutter).stop().remove().end()
                   .clone().addClass(settings.shutter).appendTo(this)
                   .animate({ height: settings.height + "px", top: 0}, settings.duration); 		
          }, function () {
            $("."+settings.shutter)
                   .animate({ height: 0, top:settings.height + "px"}, settings.duration, function(){ $(this).remove(); });             			
          });             
      });  
   };
 
})(jQuery);