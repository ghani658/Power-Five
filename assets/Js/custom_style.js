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
$('select').each(function(){
    var $this = $(this), numberOfOptions = $(this).children('option').length;
  
    $this.addClass('select-hidden'); 
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="select-styled"></div>');

    var $styledSelect = $this.next('div.select-styled');
    $styledSelect.text($this.children('option').eq(0).text());
  
    var $list = $('<ul />', {
        'class': 'select-options'
    }).insertAfter($styledSelect);
  
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
  
    var $listItems = $list.children('li');
  
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.select-styled.active').not(this).each(function(){
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle();
    });
  
    $listItems.click(function(e) {
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
        //console.log($this.val());
    });
  
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });

});