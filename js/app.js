$(document).ready( function () {
    var body_wrapper_height = $('.header-container').outerHeight();
    var header_wrapper = $('header.header');
    header_wrapper.css("min-height",body_wrapper_height );
  });
  

  $(window).on('load resize', function () {
    var body_wrapper_height = $('.header-container').outerHeight();
    var header_wrapper = $('header.header');
    header_wrapper.css("min-height",body_wrapper_height );
  });
  

  $(window).scroll(function(){
    if ($(window).scrollTop()>100){
      $("body").addClass('scrolled');
    }
    else
    {
      $("body").removeClass('scrolled');
    }
  });
  
  
  
  
  $('.mobile-trigger').click(function(){
  $('body').toggleClass('mobile-open')
  });


  
