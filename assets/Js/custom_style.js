$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
        });

        $(window).scroll(function () {
			if ($(this).scrollTop() > 200) {
				$('header').addClass("fixed");
			} else {
				$('header').removeClass("fixed");
			}
		});  
		

        $(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('.gift-page header').addClass("fixed");
			} else {
				$('.gift-page header').removeClass("fixed");
			}
        });  
        
        $(".scrollTo").on('click', function(e) {
            e.preventDefault();
            var target = $(this).attr('href');
            $('html, body').animate({
              scrollTop: ($(target).offset().top - 140)
            }, 2000);
		 });
		 
		 $("a.menu-icon").click(function(){
			$(".mobile-menu ul").show();
		  });

		  $("a.cross").click(function(){
			$(".mobile-menu ul").hide();
		  });

		  $("a.toggle-btn").click(function(){
			$(".covid-detail").slideToggle(500);
			$("a.toggle-btn i").toggleClass('fa-minus');
		  });
});
$(".mobile-menu a").click(function(){
    $(".list-menu").slideToggle();
});
$('.list-menu > li > i').click(function(){
    event.preventDefault();
	$('.submenu').slideUp('slow');
    $(this).parent().find('.submenu').slideToggle('slow');
});