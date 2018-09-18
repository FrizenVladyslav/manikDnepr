	function vmInitMap(){
        var uluru = {lat: 48.394752, lng: 35.023541 };
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });

        var InfoWindow = new google.maps.InfoWindow({
        	content: '<p>г.Днепр, Тополь 2, дом 42</p>'
        });

        InfoWindow.open(map, marker);

        marker.addListener('mousemove', function(){
        	InfoWindow.open(map, marker);
        });
        marker.addListener('mouseover', function(){
        	InfoWindow.open(map, marker);
        });

}

$(function() {


	
	$(".vm-gallery-content").mCustomScrollbar({
		theme:"rounded-dots",
		scrollInertia: 100
	});	
	
	$('.item').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});


	$(document).ready(function() {
		$(".diamondswrap").diamonds({
	    size: 250, // Size of the squares
	    gap: 10 // Pixels between squares
		});
		var vm = 0; 
		$('.diamond-box').each(function(){
			vm++;
			$('.diamond-box').eq(vm).css('background-image', "url('img/manik/"+vm+".jpg'");
			var attr = $('.diamond-box').attr('style');
		});
	});


	$(document).ready(function(){
		    $window = $(window);
		$('div[data-type="background"]').each(function(){
		     var $bgobj = $(this);
		 $(window).scroll(function() {
		        var yPos = -($window.scrollTop() / $bgobj.data('speed')); 
		        var coords = '50% '+ yPos + 'px';
		        $bgobj.css({ backgroundPosition: coords });
		    }); 
		 });   

	}); 

	$('#myGallery').spacegallery({loadingClass: 'loading'});

	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$('.vm-header-nav').slideToggle();
	});

	$('.head-nav').mPageScroll2id();
	$('.vm-header-bottom a').mPageScroll2id();

});