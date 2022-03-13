// JavaScript Document

$(document).ready(function(){
  $(".menu-md span i").click(function(){
    $(this).toggleClass("fa-bars");
	$(this).toggleClass("fa-times");
	$(".menu-container>ul").toggleClass("open");
  });
  
  $("#backtop").click(function () {
	  // $(window).scrollTop(0);
	  $("html,body").animate({ scrollTop: 0 }, 800);
  });
});