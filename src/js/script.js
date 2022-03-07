$(window).bind( 'hashchange', function(e) {
	var url = $.param.fragment();
	if(url==''){
		loadindex();
	}else{
	 loadfamily();
	}
});

function loadindex(){
	$(".watch").stop().animate({opacity:1},1000);
	$(".iconnavileft").stop().animate({opacity:1}, 1000);
	$(".iconnaviright").stop().animate({opacity:1}, 1000);
}

function loadfamily(){
		$("#collectionslider").stop().animate({opacity:1}, 1000, function () {
			$(".home").css("z-index", 0);
			$("#collectionslider").css("z-index", 100);
			$(".home").css("opacity",0);
		});
		$(".backhome").stop().fadeIn(1000);
}
$(window).trigger( 'hashchange' );

$(document).ready(function () {
	var first=true;
	function loadslider(){
		$('.flexslider_family').flexslider({
			animation:"slide",
			slideToStart:4,
			animationDuration:3000,
			animationLoop:false,
			slideshow:false,
			controlNav:false,
			before:toggleslide,
			after:afterslide,
			randomize:false,
			start:slideSetUp
		});
	}
	$(".backhome").click(function () {
		$("#collectionslider").css("z-index", 0);
		$(".home").css("z-index", 100);
		$(".home").css("overflow", "auto");
		$(".backhome").stop().fadeOut(1000);
		$("#collectionslider").stop().animate({opacity:0}, 1000,function(){
			$(".teaser").animate({opacity:1},2000);
			$(".home").stop().animate({opacity:1},2000);
			$(".iconnavileft").stop().animate({left:"0px"}, 2000);
			$(".iconnaviright").stop().animate({left:"0px"}, 2000);
			$(".subline").stop().animate({opacity:1}, 2000);
			window.location="";
		});

	});
	$(".slides li img").click(function () {
		switch ($(this).attr("src")) {
			case "img/Timepieces.jpg":
				$(".backhome").stop().fadeOut(1000);
				$(".footer").stop().animate({opacity:0},1000);
				$(".flexslider_family").animate({opacity:0},1000,function(){
					window.location="modell.html";
				})
				break;
		}
	});

	function slideSetUp(slide) {
		var a = slide.currentSlide;
		$("#collectionslider").fadeIn(1000);
		$(slide.slides[a]).animate({opacity:"1"}, 0);
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

$(window).load(loadslider());

	$(".watch").click(function () {
		$(".subline").stop().animate({opacity:0}, 1000);
		$(".iconnavileft").stop().animate({opacity:0}, 1000);
		$(".iconnaviright").stop().animate({opacity:0}, 1000,function(){
			window.location="#family";
		});
	});
});
