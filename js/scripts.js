/* global $ */
var isOpen = false;
//var phase = false;

$( document ).ready(function() {
//OPENS UP THE PORTFOLIO SECTION------------------------------

  $('.projButn').on('click', function(){

    $('.projButn').css('color', isOpen? 'rgba(255,255,255,1)' : "rgba(255,255,255,1)");
    $('.projects').css({'height' : isOpen? '0px' : '38vw', "width" : isOpen? '0px': '38vw'});
    $('.logo-right').css({"transform" : isOpen? 'translateX(0px)' : "translateX(30vw)"});
    $('.arrow-right').css({"transform" : isOpen? 'translateX(0px)' : "translateX(23vw)", 'height' : isOpen? '0px' : '150px', 'width' : isOpen? '0px' : '100px'});
    $('.logo-left').css({"transform" : isOpen? 'translateX(0px)' : "translateX(-30vw)"});
    $('.arrow-left').css({"transform" : isOpen? 'translateX(0px)' : "translateX(-23vw)", 'height' : isOpen? '0px' : '150px', 'width' : isOpen? '0px' : '100px'});
    $('.decoration').css({'height' : isOpen? '0px' : '58vw', 'width' : isOpen? '0px' : '58vw', 'border-color' : isOpen? 'transparent' : 'rgba(255,255,255,0.8)'});
    $('.read-decoration').css({'height' : isOpen? '0px' : '0vh' , 'width' : isOpen? '0px' : '0vh' , 'border-color' : isOpen? 'transparent' : 'transparent'});
    $('.about-content').css({'height': '0px', 'width' : '0px'});

    isOpen = !isOpen;
  });

  $('.arrow-right').click(function(){
    
    $('.project-content').animate({ "left": "-=525px" }, "slow" );
  });
  $('.arrow-left').click(function(){
    $('.project-content').animate({ "left": "+=525px" }, "slow" );
  });
  //OPENS UP A LARGER PREVIEW OF THE PROJECT SELECTED-----------------
  $('.idea').on('click', function(){
    $('.viewFade').fadeToggle();
    $('.view-content').css({'background-image' : $(this).css('background-image')});
  });
  //PULLS OUT OF THE PREVIEW MODE----------------------
  $('.exit').on('click', function(){
    $('.viewFade').fadeToggle();
  });
  //OPENS UP THE ABOUT SECTION-----------------------------------

  $('.about').on('click', function(){
    $('.projects').css({'height' : isOpen? '0px' : '0px', "width" : isOpen? '0px': '0px'});
    $('.logo-right').css({"transform" : isOpen? 'translateX(0px)' : "translateX(-32vw)"});
    $('.logo-left').css({"transform" : isOpen? 'translateX(0px)' : "translateX(32vw)"});
    $('.decoration').css({'height' : isOpen? '0px' : '0px', 'width' : isOpen? '0px' : '0px', 'border-color' : isOpen? 'transparent' : 'transparent'});
    $('.read-decoration').css({'height' : isOpen? '0px' : '90vh' , 'width' : isOpen? '0px' : '61vw' , 'border-color' : isOpen? 'transparent' : 'rgba(255,255,255,0.8)'});
    $('.about-content').css({'height' : isOpen? '0px' : '95vh', 'width' : isOpen? '0px' : '50vw'});
    isOpen = !isOpen;

  });

});
