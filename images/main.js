$(function(){
  var rwdMenu = $('.rwd-menu'),
      topMenu = $('.rwd-menu > li > a'),
      parentLi = $('.rwd-menu > li'),
      backBtn = $('.back-btn');
  
  topMenu.on('click',function(e){
    
    var thisTopMenu = $(this).parent(); // current $this
      rwdMenu.addClass('rwd-menu-view');
      parentLi.removeClass('open-submenu');
      thisTopMenu.addClass('open-submenu'); 
  });
  
  backBtn.click(function(){
    var thisBackBtn = $(this);
    parentLi.removeClass();
    rwdMenu.removeClass('rwd-menu-view');
  });
  
  
});// JavaScript Document

/* 滑動的GOTO */
function goTop(val) {
	if($(window).width() > 767 ){
		var gotop_i = 150;
	} else {
		var gotop_i = 100;
	}
	jQuery('html,body').animate({scrollTop: jQuery(val).offset().top - gotop_i },700);
}
