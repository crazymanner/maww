
$('.menu__bottom__item').hide();

$(".menu__bars").on("click", function() {
  
  $(".menu__bottom").animate({ top: "12.9%" }, 1000);
  

  $(".menu__bars").css('top', "-45%");
  $(".menu__bars").fadeTo('slow', '0');
  $('.close').fadeTo("slow", .3);
  $('.close').css('z-index', '1');
  $(this).css('z-index', '0');
  $(".close").animate({ top: "50%" }, 100);
     $(".menu__bottom")
  .css({ 
    borderBottomLeftRadius: 250, 
    borderBottomRightRadius: 250 })
  .animate({
    borderBottomLeftRadius: 0, 
    borderBottomRightRadius: 0}, 100);
$('.menu__bottom__item').fadeIn(4000);
   
});

$(".close").on("click", function() {
  $(this).css('opacity', '0');
  $(".close").animate({ top: "-50%" }, 100);
  $(".menu__bottom").animate({ top: "-100%" }, 1500);
  $(".menu__bars").fadeTo(2000, 1);
   $('.menu__bars').css('z-index', '1');
  $(this).css('z-index', '0');
    $(".menu__bars").animate({ top: "45%" }, 100);

});
