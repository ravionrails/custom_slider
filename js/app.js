var _startSlide = 0;
var _nextSlide = 1;
var _playSlide = true;

$(document).ready(function(){
	$('#slider > div#imgContainer').fadeIn(300);
	playSlider();

	$('#pause_me').click(function(){
		pauseSlide();
	});

	$('#play_me').click(function(){
		playSlide();
	});

	$('#slider > div').on('click', 'img', function(e){
		pauseSlide();		
		$('#imgContainer').hide();
		$('#slider > div#imgContainer').before('<div id="videoContainer"><video width="600" autoplay controls="" id="video1">\
			<source type="video/mp4" src="video/'+ $(this).attr('data-img') +'.mp4"></source></video></div>');
		videoEventBinding();
	});

});

function videoEventBinding(){
	$('#slider video').on({
		play: function(e){ pauseSlide(); },
		pause: function(e){ playSlide(); },
		ended: function(e){ $('#videoContainer').remove();playSlide(); }
	});
}

function playSlider(){
	loop = setInterval(function(){
		if( _playSlide ){
			_startSlide = _nextSlide;
			_nextSlide += 1;
			insertNextSet(_nextSlide)
		}
	}, 3300);
}

function insertNextSet(_nextSlide){
	// var imagesList = ['man', 'coffee_shop', 'gas_station', 'laughing', 'roof_shooting'];
	// var imgEle = "";
	// $('#imgContainer img').attr('src', 'images/'+ imagesList[_nextSlide] +'.jpg');
	var img_path = 'images/'+ _nextSlide +'.jpg';
	$('#imgContainer img').attr({ 'src': img_path, 'data-img': _nextSlide});
	$('#imgContainer').fadeIn(300);
}

function pauseSlide(){
	_playSlide = false;
}

function playSlide(){
	_playSlide = true;
	$('#imgContainer').show();
}
