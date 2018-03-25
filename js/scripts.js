/* global $ */
var state = false;

$( document ).ready(function() {

  $('.projButn').on('click', function(){

    $('.projButn').css('color', state? 'rgba(255,255,255,0.8)' : "rgba(255,255,255,0.2)");
    $('.projects').css({'height' : state? '0px' : '35vw', "width" : state? '0px': '35vw'});
    $('.logo-right').css({"transform" : state? 'translateX(0px)' : "translateX(30vw)"});
    $('.logo-left').css({"transform" : state? 'translateX(0px)' : "translateX(-30vw)"});
    $('.decoration').css({'height' : state? '0px' : '65vw', 'width' : state? '0px' : '65vw', 'border-color' : state? 'transparent' : 'rgba(255,255,255,0.8)'});
    state = !state;
  });
  $('.idea').on('click', function(){
    $('.viewFade').css({'display' : 'block'});
    $('.view-content').css({'background-image' : "url('stylesheets/css/imgs/portfolio-idea.png')"});
  });
  $('.exit').on('click', function(){
    $('.viewFade').css({'display' : 'none'});
  });


});