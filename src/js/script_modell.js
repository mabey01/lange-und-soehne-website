$(document).ready(function () {
	function slideSetUp(slide) {
		var a = slide.currentSlide
		$(slide.slides[a]).css("opacity",1);
	}

	function toggleslide(slide) {
		var b = slide.animatingTo, a = slide.currentSlide;
		$(".flex-direction-nav").fadeOut(200);
		$(slide.slides[a]).animate({opacity:"0.3"}, 1000);
		$(slide.slides[b]).animate({opacity:"1"}, 1000);
	}
	function afterslide() {
		$(".flex-direction-nav").fadeIn(200);
	}

	$(window).load(function () {
		$('.flexslider').flexslider({
			animation:"slide",
			slideToStart:4,
			animationDuration:3000,
			animationLoop:false,
			slideshow:false,
			controlNav:false,
			before:toggleslide,
			randomize:false,
			start:slideSetUp,
			after:afterslide
		});
	});
	$(window).resize(function () {
		if ($(this).scrollTop() > 1) {
			$("#story").animate("margin-top",margstory);
		} else {
			if (margstory < 150) {
				margstory = 150;
				$("#story").css("margin-top", margstory);
			}
			else {
				margstory = $(window).height() - 640;
				$("#story").css("margin-top", margstory);
			}
		}
	});
	$(window).scroll(function(){
		if ($(this).scrollTop() == 0) {
			margstory = $(window).height() - 640;
			if (margstory < 150) {
				margstory = 150;
				$("#story").css("margin-top", margstory);
			}
			else {
				margstory = $(window).height() - 640;
				$("#story").animate({"marginTop": margstory}, "fast");
			}
		}
	});
	$("#backtop").click(function(){
		$.scrollTo(0,2000,{easing:"swing"});
	});
	$(".backcollect").stop().fadeIn(1000);
	$("#slider-container").stop().animate({opacity:1},1000,function(){
		$("body").css("overflow","auto");
	});

	$(".backcollect").click(function(){
		$("body").css("overflow","hidden");
		$(".backcollect").fadeOut(1000);
		$("#slider-container").animate({opacity:0},1000);
		$("#story").animate({opacity:0},1000,function(){
			window.location="../Max/#family";
		})
	});
});
