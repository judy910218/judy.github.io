const carousel = new bootstrap.Carousel('#myCarousel')
$('.slideshow').each(function(){
    
    let slideImgs = $(this).find('img'),
        slideImgsCount = slideImgs.length,
        currentIndex = 0;
    
    slideImgs.eq(currentIndex).fadeIn();
    
    setInterval(showNextSlide, 5000);
    
    function showNextSlide(){
        let nextIndex = (currentIndex + 1) % slideImgsCount;
        console.log(nextIndex)
        slideImgs.eq(currentIndex).fadeOut();
        slideImgs.eq(nextIndex).fadeIn();
        currentIndex = nextIndex;
    }
})
$(".popup-btn").click(function() {
    var href = $(this).attr("href")
    $(href).fadeIn(250);
    $(href).children$("popup-box").removeClass("transform-out").addClass("transform-in");
    e.preventDefault();
  });
  
  $(".popup-close").click(function() {
    closeWindow();
  });
  // $(".popup-wrap").click(function(){
  //   closeWindow();
  // })
  function closeWindow(){
    $(".popup-wrap").fadeOut(200);
    $(".popup-box").removeClass("transform-in").addClass("transform-out");
    event.preventDefault();
  }
  $('document').ready(function(){
	$('input[type="text"], input[type="email"], textarea').focus(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').addClass('formgroup-active');
		$('#' + background + '-form').removeClass('formgroup-error');
	});
	$('input[type="text"], input[type="email"], textarea').blur(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').removeClass('formgroup-active');
	});

function errorfield(field){
	$(field).addClass('formgroup-error');
	console.log(field);	
}

$("#waterform").submit(function() {
	var stopsubmit = false;

if($('#name').val() == "") {
	errorfield('#name-form');
	stopsubmit=true;
}
if($('#email').val() == "") {
	errorfield('#email-form');
	stopsubmit=true;
}
  if(stopsubmit) return false;
});
		
});
  