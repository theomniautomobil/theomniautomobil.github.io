//written by God Bennett


var musicTitles = 
					[ 
						"Requiem_Oleg_Semenov",
						"Neoclassical_Oleg_Semenov", 
						"zelante_mattia_strings"
					];

var AUDIOTAGJS_AMBIENT_AUDIO = document.createElement('audio'); //needs to be global, so as to be controllable outside and beyond
var RANDOM_STARTUP_TITLE;
var USER_GESTURE_FLAG = false;

var AUDIOTAGJS_APP_EFFECT_AUDIO_SEND_KUDOS = document.createElement('audio'); //needs to be global, so as to be controllable outside and beyond
var AUDIOTAGJS_APP_EFFECT_AUDIO_OKAY = null;

$(document).ready(function() 
{
	//establish employme voice welcome element
	var randInd =  getRandomValueBasedOnArraySize ( musicTitles );
	console.log ( "randInd>>> " +  randInd );
	RANDOM_STARTUP_TITLE = musicTitles [ randInd ];
	AUDIOTAGJS_AMBIENT_AUDIO.setAttribute('src', 'data/audios/'+ RANDOM_STARTUP_TITLE + '.mp3' );
	AUDIOTAGJS_AMBIENT_AUDIO.load();
	AUDIOTAGJS_AMBIENT_AUDIO.addEventListener("load", function() { 
	
		AUDIOTAGJS_AMBIENT_AUDIO.play(); 
		$(".duration span").html(AUDIOTAGJS_AMBIENT_AUDIO.duration);
		$(".filename span").html(AUDIOTAGJS_AMBIENT_AUDIO.src);
	}, false);
	
	AUDIOTAGJS_APP_EFFECT_AUDIO_SEND_KUDOS.setAttribute('src', 'data/audios/SendKudos.mp3' );
	AUDIOTAGJS_APP_EFFECT_AUDIO_SEND_KUDOS.load();
	
	AUDIOTAGJS_APP_EFFECT_AUDIO_OKAY = AUDIOTAGJS_APP_EFFECT_AUDIO_SEND_KUDOS;
	
	
	
	swal
	(
		{
				title: "",text: "Welcome to The Omni Automobil! Enjoy Automobil Showcase: Dio Lucciola,  Jamaica's 1st self driving car, designed right here in Jamaica, as well as song zelante mattia, 'strings' - God Bennett, TheOmniAutomobil", imageUrl: 'data/images/logoSmall.png', html: true, showCancelButton: false,
				confirmButtonColor: "#fff",
				confirmButtonText: 'Go!',
				cancelButtonText: "",
				closeOnConfirm: true,
				closeOnCancel: false
		},
		function(isConfirm)
		{
			if (isConfirm)
			{
				USER_GESTURE_FLAG = true;
				AUDIOTAGJS_AMBIENT_AUDIO.play ();
				//AUDIOTAGJS_APP_EFFECT_AUDIO_OKAY.play ();
			} 
		}
	);
	
});


function getRandomValueBasedOnArraySize ( value )
{//0-len(value)-1
	return Math.floor ( ( Math.random ( ) * ( value.length ) ) + 0 );
}

