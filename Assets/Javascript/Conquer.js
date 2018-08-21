
$("li a").click(function(){
	$("li a").parent().removeClass("active");
	$(this).parent().addClass("active");
	if ($(this).attr("href")==="#section1"){
		var position=$("#section1").offset().top;
		$('body,html').animate({ scrollTop: position }, 500);
	}
	else if ($(this).attr("href")==="#section2"){
		var position=$("#section2").offset().top;
		$('body,html').animate({ scrollTop: position }, 500);
	}
	else if ($(this).attr("href")==="#section3"){
		var position=$("#section3").offset().top;
		$('body,html').animate({ scrollTop: position }, 500);
	}
	else if ($(this).attr("href")==="#section4"){
		var position=$("#section4").offset().top;
		$('body,html').animate({ scrollTop: position }, 500);
	}
	else if ($(this).attr("href")==="#section5"){
		var position=$("#section5").offset().top;
		$('body,html').animate({ scrollTop: position }, 500);
	}
	else if ($(this).attr("href")==="#section6"){
		var position=$("#section6").offset().top;
		$('body,html').animate({ scrollTop: position }, 500);
	}
});

$(window).scroll(function(){
	if($(window).scrollTop()===0){
   		$("li a").parent().removeClass("active");
   		$("#s1").addClass("active");
   	}

   	if($("#section1").offset().top - $(window).scrollTop()<0){
   		$("li a").parent().removeClass("active");
   		$("#s2").addClass("active");
   	}

   	if($("#section2").offset().top - $(window).scrollTop()<0){
   		$("li a").parent().removeClass("active");
   		$("#s3").addClass("active");
   	}

   	if($("#section3").offset().top - $(window).scrollTop()<0){
   		$("li a").parent().removeClass("active");
   		$("#s4").addClass("active");
   	}

   	if($("#section4").offset().top - $(window).scrollTop()<0){
   		$("li a").parent().removeClass("active");
   		$("#s5").addClass("active");
   	}

   	if($("#section5").offset().top - $(window).scrollTop()<0){
   		$("li a").parent().removeClass("active");
   		$("#s6").addClass("active");
   	}
});




