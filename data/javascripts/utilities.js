	//AUTHOR: Jordan Micah Bennett Soulify 2014

	
	
	//widget utility variables
	var widgetLabelCollection = [ 'WidgetUserInformationConfigurationAreaZeroArea', 'WidgetUserInformationConfigurationAreaOneArea', 'WidgetUserInformationConfigurationAreaTwoArea', 'WidgetUserInformationConfigurationAreaThreeArea', 'WelcomeWidgetUserInformationConfigurationArea', 'WelcomeWidgetUserInformationArea', 'WelcomeWidgetPlaylistArea', 'HelloWidgetArea', 'JoinWidgetArea', 'WelcomeWidgetArea', 'ProfileWidgetArea', 'ProfileSignatureWidgetArea', 'ProfileRecencyWidgetArea', 'ProfileVolumeControlWidgetArea', 'ProfileFavouritesWidgetArea', 'ProfileTopThreePlaylistItemWidgetAreaZero', 'ProfileTopThreePlaylistItemWidgetAreaOne', 'ProfileTopThreePlaylistItemWidgetAreaTwo' ];
	var buttonLabelCollection = [ 'HelloWidgetAreaComponentFour', 'JoinWidgetAreaComponentFourB', 'JoinWidgetAreaComponentSix', 'WelcomeWidgetAreaComponentOne', 'WelcomeWidgetAreaComponentTwo', 'WelcomeWidgetAreaComponentThree', 'WelcomeWidgetAreaComponentFour', 'WelcomeWidgetAreaComponentFive', 'WelcomeWidgetPlaylistAreaComponentZero', 'WelcomeWidgetPlaylistAreaComponentOne', 'WelcomeWidgetPlaylistAreaComponentTwo', 'WelcomeWidgetPlaylistAreaComponentThree', 'WelcomeWidgetPlaylistAreaComponentFour', 'WelcomeWidgetUserInformationAreaComponentZero', 'WelcomeWidgetUserInformationAreaComponentOne', 'WelcomeWidgetUserInformationAreaComponentTwo', 'WelcomeWidgetUserInformationAreaComponentThree', 'WelcomeWidgetUserInformationAreaComponentFour', 'WelcomeWidgetUserInformationConfigurationAreaComponentZero', 'WelcomeWidgetUserInformationConfigurationAreaComponentOne' ];
	var selectLabelCollection = [ 'WidgetUserInformationConfigurationAreaZeroAreaComponentOne' ];
	
	var miscellaneousLabelCollection = [ 'ProfileVolumeControlWidgetAreaComponentFour', 'ProfileFavouritesWidgetAreaComponentOneB' ];
	
	var genreAreaZeroLabelCollection = [ 'WidgetPlaylistPageZeroGenreZeroArea', 'WidgetPlaylistPageZeroGenreOneArea', 'WidgetPlaylistPageZeroGenreTwoArea', 'WidgetPlaylistPageZeroGenreThreeArea', 'WidgetPlaylistPageZeroGenreFourArea', 'WidgetPlaylistPageZeroGenreFiveArea', 'WidgetPlaylistPageZeroGenreSixArea', 'WidgetPlaylistPageZeroGenreSevenArea' ];
	
	var genreAreaOneLabelCollection = [ 'WidgetPlaylistPageOneGenreEightArea', 'WidgetPlaylistPageOneGenreNineArea', 'WidgetPlaylistPageOneGenreTenArea', 'WidgetPlaylistPageOneGenreElevenArea', 'WidgetPlaylistPageOneGenreTwelveArea', 'WidgetPlaylistPageOneGenreThirteenArea', 'WidgetPlaylistPageOneGenreFourteenArea', 'WidgetPlaylistPageOneGenreFifteenArea' ];
	
	var labelLabelCollection = [ 'ProfileVolumeControlWidgetAreaComponentZero', 'ProfileVolumeControlWidgetAreaComponentThree' ];
	
	var genreAreaZeroComponentZeroLabelCollection = [ 'WidgetPlaylistPageZeroGenreZeroAreaComponentZero', 'WidgetPlaylistPageZeroGenreOneAreaComponentZero', 'WidgetPlaylistPageZeroGenreTwoAreaComponentZero', 'WidgetPlaylistPageZeroGenreThreeAreaComponentZero', 'WidgetPlaylistPageZeroGenreFourAreaComponentZero', 'WidgetPlaylistPageZeroGenreFiveAreaComponentZero', 'WidgetPlaylistPageZeroGenreSixAreaComponentZero', 'WidgetPlaylistPageZeroGenreSevenAreaComponentZero' ];
	
	var genreAreaOneComponentZeroLabelCollection = [ 'WidgetPlaylistPageOneGenreEightAreaComponentZero', 'WidgetPlaylistPageOneGenreNineAreaComponentZero', 'WidgetPlaylistPageOneGenreTenAreaComponentZero', 'WidgetPlaylistPageOneGenreElevenAreaComponentZero', 'WidgetPlaylistPageOneGenreTwelveAreaComponentZero', 'WidgetPlaylistPageOneGenreThirteenAreaComponentZero', 'WidgetPlaylistPageOneGenreFourteenAreaComponentZero', 'WidgetPlaylistPageOneGenreFifteenAreaComponentZero' ];
	
	var widgetLabelGenrePageZeroCollection = [ 'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven' ];
	var widgetLabelGenrePageOneCollection = [ 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen' ];
	var widgetUiLabelGenrePageZeroCollection = [ "African", "Blues", "Comedy", "Country", "Dancehall", "Electronic", "Folk", "Heavy Metal" ];
	var widgetUiLabelGenrePageOneCollection = [ "Hip Hop", "Jazz", "...", "...", "...", "...", "...", "..." ];
	
	var widgetUserInformationIds, widgetDummyInformationIds;
	
	//number to letter utility variables
	ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
	tens = ['', '', 'Twenty', 'Thirty', 'Fourty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
	sep = ['','Thousand','Million','Billion','Trillion','Quadrillion','Quintillion','Sextillion'];
	
	//change loader's default bg colour to soulify's default bg colour
	$( ".pace" ).find ( '.pace-progress' ).css ( 'background', 'rgba(52, 250, 226, 1)' );


	toggleContent ( 'JoinWidgetArea', 'hidden' ); //hide join area on startup
	toggleContent ( 'WelcomeWidgetArea', 'hidden' ); //hide welcome area on startup
	toggleContent ( 'WelcomeWidgetPlaylistArea', 'hidden' ); //hide welcome playlist area on startup
	toggleContent ( 'WidgetPlaylistPageZeroGenreArea', 'hidden' ); //hide WidgetPlaylistPageZeroGenreArea on startup
	toggleContent ( 'WidgetPlaylistPageOneGenreArea', 'hidden' ); //hide WidgetPlaylistPageOneGenreArea on startup
	toggleContent ( 'WelcomeWidgetUserInformationArea', 'hidden' ); //hide WelcomeWidgetUserInformationArea on startup
	toggleContent ( 'WelcomeWidgetUserInformationConfigurationArea', 'hidden' ); //hide WelcomeWidgetUserInformationConfigurationArea on startup
	toggleContent ( 'WidgetUserInformationConfigurationAreaZeroArea', 'hidden' ); //hide WidgetUserInformationConfigurationAreaZeroArea on startup
	toggleContent ( 'WidgetUserInformationConfigurationAreaOneArea', 'hidden' ); //hide WidgetUserInformationConfigurationAreaOneArea on startup
	toggleContent ( 'WidgetUserInformationConfigurationAreaTwoArea', 'hidden' ); //hide WidgetUserInformationConfigurationAreaTwoArea on startup
	toggleContent ( 'WidgetUserInformationConfigurationAreaThreeArea', 'hidden' ); //hide WidgetUserInformationConfigurationAreaThreeArea on startup
	
	
	enableTogglingCapabilityOfWidget ( );
	prepareTitles ( );

	
	generateGenreCoverCollectionClickResponse ( 'WidgetPlaylistPageZeroGenreArea', widgetLabelGenrePageZeroCollection, widgetUiLabelGenrePageZeroCollection );
	generateGenreCoverCollectionClickResponse ( 'WidgetPlaylistPageOneGenreArea', widgetLabelGenrePageOneCollection, widgetUiLabelGenrePageOneCollection );
	
	var CURRENT_GENRE_PAGE = 0, MAXIMUM_GENRE_PAGES = 2, MAXIMUM_ELEMENTS_PER_PAGE = 8;
	var USER_SIGN_IN_EMAIL, USER_SIGN_IN_PASSWORD;
	var CURRENT_GENRE;
	var CURRENTLY_SELECTED_MOOD;
	var CURRENTLY_SELECTED_MOOD_COLOUR, CURRENTLY_SELECTED_MOOD_DEEP_COLOUR;
	var USER_MOOD_STRING;
	var DESKTOP_MODE = screen.width >= 1224 ? true : false;
	
	//////////////////////////////////////////////////////////
	//ESTABLISH toggleContent 
	//////////////////////////////////////////////////////////
	function toggleContent ( activeContentId, status )
	{
		document.getElementById ( activeContentId ).style.visibility = status; //show entity
	}	


	//////////////////////////////////////////////////////////
	//ESTABLISH enableTogglingCapabilityOf widget
	//////////////////////////////////////////////////////////
	function enableTogglingCapabilityOfWidget ( )
	{	
		$(document).ready
		(
			function ( ) 
			{
				$( '#HelloWidgetAreaComponentFour' ).click
				(
					function ( )
					{
						
						toggleContent ( 'HelloWidgetArea', 'hidden' );
						toggleContent ( 'JoinWidgetArea', 'visible' );
					}
				);
				$( '#JoinWidgetAreaComponentSix' ).click
				(
					function ( )
					{
						
						toggleContent ( 'JoinWidgetArea', 'hidden' );
						toggleContent ( 'HelloWidgetArea', 'visible' );
					}
				);					
				$( '#WelcomeWidgetAreaComponentFour' ).click
				(
					function ( )
					{
						document.getElementById ( 'ProfileWidgetAreaComponentOne' ).innerHTML = '+lounge/playlist'; //set directory
						
						//hide all widgets
						for ( var w = 0; w < widgetLabelCollection.length; w ++ )
							toggleContent ( widgetLabelCollection [ w ], 'hidden' );
						
						//show only the widgets we currently need to observe
						toggleContent ( 'ProfileWidgetArea', 'visible' );  
						toggleContent ( 'WelcomeWidgetPlaylistArea', 'visible' );  
						toggleContent ( 'WidgetPlaylistPageZeroGenreArea', 'visible' ); 
	
						document.getElementById ( 'ProfileWidgetArea' ).style.left = '0px';
						
						//enable fx
						enableRotationFx ( 'Y', 360, 'WelcomeWidgetPlaylistArea' );
						enableRotationFx ( 'Y', -360, 'ProfileWidgetArea' ); //second rotation instance about X, reversed from +360
						enableRotationFx ( 'X', 360, 'WidgetPlaylistPageZeroGenreZeroArea' );
						enableRotationFx ( 'X', 360, 'WidgetPlaylistPageZeroGenreOneArea' );
						enableRotationFx ( 'X', 360, 'WidgetPlaylistPageZeroGenreTwoArea' );
						enableRotationFx ( 'X', 360, 'WidgetPlaylistPageZeroGenreThreeArea' );
						enableRotationFx ( 'X', 360, 'WidgetPlaylistPageZeroGenreFourArea' );
						enableRotationFx ( 'X', 360, 'WidgetPlaylistPageZeroGenreFiveArea' );
						enableRotationFx ( 'X', 360, 'WidgetPlaylistPageZeroGenreSixArea' );
						enableRotationFx ( 'X', 360, 'WidgetPlaylistPageZeroGenreSevenArea' );
					}
				);   
				$( '#WelcomeWidgetUserInformationAreaComponentFour' ).click
				(
					function ( )
					{
						document.getElementById ( 'ProfileWidgetAreaComponentOne' ).innerHTML = '+lounge/playlist'; //set directory
						
						toggleContent ( 'WelcomeWidgetPlaylistArea', 'visible' );

						toggleContent ( 'WelcomeWidgetUserInformationArea', 'hidden' );
						
						toggleContent ( 'UserInformationArea', 'hidden' );
						
						toggleContent ( 'WidgetPlaylistPageZeroGenreArea', 'visible' );
						
						toggleContent ( 'WidgetPlaylistPageOneGenreArea', 'visible' );
						
						for ( var w = 0; w < widgetUserInformationIds.length; w ++ )
						{
							toggleContent ( widgetUserInformationIds [ w ], 'hidden' );
							document.getElementById ( widgetUserInformationIds [ w ] ).remove ( );
						}
							
						for ( var w = 0; w < widgetDummyInformationIds.length; w ++ )
						{
							toggleContent ( widgetDummyInformationIds [ w ], 'hidden' );
							document.getElementById ( widgetDummyInformationIds [ w ] ).remove ( );
						}
					}
				);
				

				$( '#WelcomeWidgetUserInformationConfigurationAreaComponentZero' ).click
				(
					function ( )
					{
						updateLastMood ( CURRENTLY_SELECTED_MOOD );
						
						//update genre mood
							//generate regex routine to appropriately replace the desired elements from the moods string list
							var regularExpression = new RegExp ( CURRENT_GENRE + ":" + "(.*)" + "." + CURRENT_GENRE, "gi");
							var newMoodString = USER_MOOD_STRING.replace ( regularExpression, CURRENT_GENRE + ':' + CURRENTLY_SELECTED_MOOD + '.' + CURRENT_GENRE );
							//update mood string based on 
							updateGenreMood ( newMoodString );
					}
				);
		
				$( '#WelcomeWidgetPlaylistAreaComponentFour' ).click
				(
					function ( )
					{
						//set directory displayer
						document.getElementById ( 'ProfileWidgetAreaComponentOne' ).innerHTML = '+lounge';
					
						//hide all widgets
						for ( var w = 0; w < widgetLabelCollection.length; w ++ )
							toggleContent ( widgetLabelCollection [ w ], 'visible' );
						
						//show only the widgets we currently need to observe
						toggleContent ( 'HelloWidgetArea', 'hidden' );  
						toggleContent ( 'JoinWidgetArea', 'hidden' );  
						toggleContent ( 'WelcomeWidgetPlaylistArea', 'hidden' );
						toggleContent ( 'WidgetPlaylistPageZeroGenreArea', 'hidden' );
						toggleContent ( 'WidgetPlaylistPageOneGenreArea', 'hidden' );
						document.getElementById ( 'ProfileWidgetArea' ).style.left = '259.4px';
						
						//hide irrelevant items
						toggleContent ( 'WelcomeWidgetUserInformationConfigurationArea', 'hidden' ); 
						toggleContent ( 'WidgetUserInformationConfigurationAreaZeroArea', 'hidden' );
						toggleContent ( 'WidgetUserInformationConfigurationAreaOneArea', 'hidden' ); 
						toggleContent ( 'WidgetUserInformationConfigurationAreaTwoArea', 'hidden' );
						toggleContent ( 'WidgetUserInformationConfigurationAreaThreeArea', 'hidden' ); 
						toggleContent ( 'WelcomeWidgetUserInformationArea', 'hidden' ); 
						
						
						//enable corrective fx
						enableRotationFx ( 'Y', -360, 'WelcomeWidgetPlaylistArea' );
						enableRotationFx ( 'Y', -360, 'WidgetPlaylistPageZeroGenreZeroArea' );
						enableRotationFx ( 'X', -360, 'WidgetPlaylistPageZeroGenreOneArea' );
						enableRotationFx ( 'X', -360, 'WidgetPlaylistPageZeroGenreTwoArea' );
						enableRotationFx ( 'X', -360, 'WidgetPlaylistPageZeroGenreThreeArea' );
						enableRotationFx ( 'X', -360, 'WidgetPlaylistPageZeroGenreFourArea' );
						enableRotationFx ( 'X', -360, 'WidgetPlaylistPageZeroGenreFiveArea' );
						enableRotationFx ( 'X', -360, 'WidgetPlaylistPageZeroGenreSixArea' );
						enableRotationFx ( 'X', -360, 'WidgetPlaylistPageZeroGenreSevenArea' );
					}
				);

				//download extension
				$( '#WelcomeWidgetAreaComponentThree' ).click
				(
					function ( )
					{
						enableDownload ( 'data/downloads/soulify.chrome.extension.zip' );
					}
				);
				

				
				//genre/playlist page navigation
					//next page
					$( '#WelcomeWidgetPlaylistAreaComponentTwo' ).click
					(
						function ( )
						{
							if ( CURRENT_GENRE_PAGE < MAXIMUM_GENRE_PAGES - 1 )
								CURRENT_GENRE_PAGE ++;
							else
								CURRENT_GENRE_PAGE = 0;
							manageGenrePageNavigation ( );
						}
					);
					//previous page
					$( '#WelcomeWidgetPlaylistAreaComponentThree' ).click
					(
						function ( )
						{
							if ( CURRENT_GENRE_PAGE > 0 )
								CURRENT_GENRE_PAGE --;
							else
								CURRENT_GENRE_PAGE = MAXIMUM_GENRE_PAGES - 1;
							manageGenrePageNavigation ( );
						}
					);
					//jump to page
					$( '#WelcomeWidgetPlaylistAreaComponentOne' ).click
					(
						function ( )
						{
							document.getElementById ( 'WelcomeWidgetPlaylistAreaComponentOne' ).value = 'jump to page?..';
						}
					);
					
					//genre/playlist configuration entrance
					$( '#WelcomeWidgetUserInformationAreaComponentZero' ).click
					(
						function ( )
						{
							//set directory
							document.getElementById ( 'ProfileWidgetAreaComponentOne' ).innerHTML = '+.../' + CURRENT_GENRE + '/configuration';
							//set return button
							document.getElementById ( 'WelcomeWidgetUserInformationConfigurationAreaComponentOne' ).value = 'back to ' + CURRENT_GENRE;
						
							//hide current items
								//hide user information welcome widget
								toggleContent ( 'WelcomeWidgetUserInformationArea', 'hidden' );
								toggleContent ( 'UserInformationArea', 'hidden' );
								/*
								for ( var w = 0; w < widgetUserInformationIds.length; w ++ )
								{
									toggleContent ( widgetUserInformationIds [ w ], 'hidden' );
									document.getElementById ( widgetUserInformationIds [ w ] ).remove ( );
								}
								for ( var w = widgetUserInformationIds.length; w < MAXIMUM_ELEMENTS_PER_PAGE; w ++ )
								{
									toggleContent ( widgetDummyInformationIds [ w ], 'hidden' );
									document.getElementById ( widgetDummyInformationIds [ w ] ).remove ( );
								}*/
								
							//show relevant items
							toggleContent ( 'WelcomeWidgetUserInformationConfigurationArea', 'visible' ); 
							toggleContent ( 'WidgetUserInformationConfigurationAreaZeroArea', 'visible' );
							toggleContent ( 'WidgetUserInformationConfigurationAreaOneArea', 'visible' ); 
							toggleContent ( 'WidgetUserInformationConfigurationAreaTwoArea', 'visible' );
							toggleContent ( 'WidgetUserInformationConfigurationAreaThreeArea', 'visible' ); 
				
							//enable fx
							enableRotationFx ( 'X', 360, 'WelcomeWidgetUserInformationConfigurationArea' );
							enableRotationFx ( 'X', 360, 'WidgetUserInformationConfigurationAreaZeroArea' );
							enableRotationFx ( 'X', 360, 'WidgetUserInformationConfigurationAreaOneArea' );
							enableRotationFx ( 'X', 360, 'WidgetUserInformationConfigurationAreaTwoArea' );
							enableRotationFx ( 'X', 360, 'WidgetUserInformationConfigurationAreaThreeArea' );
			
						}
					);
					
					//genre/playlist configuration
					$( '#WelcomeWidgetUserInformationConfigurationAreaComponentOne' ).click
					(
						function ( )
						{
							//set directory
							document.getElementById ( 'ProfileWidgetAreaComponentOne' ).innerHTML = '+lounge/playlist/' + CURRENT_GENRE;
						
							//hide current items
								//hide user information welcome widget
								toggleContent ( 'WelcomeWidgetUserInformationArea', 'visible' );
								toggleContent ( 'UserInformationArea', 'visible' );
								
						//re-establish all dummy user information background colours
						if ( widgetDummyInformationIds != null && widgetUserInformationIds != null )
							for ( var m = widgetUserInformationIds.length; m < widgetDummyInformationIds.length; m ++ )
								document.getElementById ( '' + widgetDummyInformationIds [ m ] ).style.backgroundColor = CURRENTLY_SELECTED_MOOD_COLOUR;
							
							//hide irrelevant items
							toggleContent ( 'WelcomeWidgetUserInformationConfigurationArea', 'hidden' ); 
							toggleContent ( 'WidgetUserInformationConfigurationAreaZeroArea', 'hidden' );
							toggleContent ( 'WidgetUserInformationConfigurationAreaOneArea', 'hidden' ); 
							toggleContent ( 'WidgetUserInformationConfigurationAreaTwoArea', 'hidden' );
							toggleContent ( 'WidgetUserInformationConfigurationAreaThreeArea', 'hidden' ); 
							
							//enable fx
							enableRotationFx ( 'X', -360, 'WelcomeWidgetUserInformationConfigurationArea' );
							enableRotationFx ( 'X', -360, 'WidgetUserInformationConfigurationAreaZeroArea' );
							enableRotationFx ( 'X', -360, 'WidgetUserInformationConfigurationAreaOneArea' );
							enableRotationFx ( 'X', -360, 'WidgetUserInformationConfigurationAreaTwoArea' );
							enableRotationFx ( 'X', -360, 'WidgetUserInformationConfigurationAreaThreeArea' );
						}
					);
			}
		);
	}

	function generateGenreCoverCollectionClickResponse ( targetArea, targetNameArray, targetUiNameArray ) 
	{
		var genreArea = document.getElementById ( targetArea );
		
		for ( var i = 0, len = genreArea.children.length; i < len; i++ )
		{
			(
				function ( index )
				{
					genreArea.children [ i ].onclick = function ( )
					{
						var userMoods = USER_MOOD_STRING.split ( ',' ); //eg : 'african:happy.african'
						var EXTRACTED_USER_GENRE_MOOD_TITLE;
							

						toggleContent ( 'UserInformationArea', 'visible' );
						
						generateGenreInformation ( targetNameArray [ index ].toLowerCase ( ) );
						
						document.getElementById ( 'ProfileWidgetAreaComponentOne' ).innerHTML = '+lounge/playlist/' + targetUiNameArray [ index ].toLowerCase ( );
						
						CURRENT_GENRE = targetUiNameArray [ index ].toLowerCase ( );
						
						for ( var i = 0; i < userMoods.length; i ++ )
							if ( userMoods [ i ].split ( ':' ) [ 0 ] == CURRENT_GENRE )
								EXTRACTED_USER_GENRE_MOOD_TITLE = userMoods [ i ].split ( ':' ) [ 1 ].split ( '.' ) [ 0 ];
							
						updateLastMood ( EXTRACTED_USER_GENRE_MOOD_TITLE );
						
						//update genre mood
							//generate regex routine to appropriately replace the desired elements from the moods string list
							var regularExpression = new RegExp ( CURRENT_GENRE + ":" + "(.*)" + "." + CURRENT_GENRE, "gi");
							var newMoodString = USER_MOOD_STRING.replace ( regularExpression, CURRENT_GENRE + ':' + EXTRACTED_USER_GENRE_MOOD_TITLE + '.' + CURRENT_GENRE );
							//update mood string based on 
							updateGenreMood ( newMoodString );
						
						loadUiBasedOnLastMoodTitle ( EXTRACTED_USER_GENRE_MOOD_TITLE )

						toggleContent ( targetArea, 'hidden' );
						
						toggleContent ( 'WelcomeWidgetPlaylistArea', 'hidden' );
						
						toggleContent ( 'WelcomeWidgetUserInformationArea', 'visible' );
					}    
				}
			) ( i );
		}
	}
	
	function generateGenreInformation ( genreNameIndex )
	{
		var userSignInEmailQuery = '?SOULIFY_SIGN_IN_USER_EMAIL_GET_VALUE='+USER_SIGN_IN_EMAIL;
		
		var signInQueryString = userSignInEmailQuery;
		

		$.ajax
		(
			{
				type: 'GET',

				url: 'data/phps/_php.population.information.genre.' + genreNameIndex + '.php'+signInQueryString,

				dataType: 'json',

				success: function ( data ) 
				{
					console.log ( data );
		
					widgetUserInformationIds = new Array ( data.length );
					widgetDummyInformationIds = new Array ( MAXIMUM_ELEMENTS_PER_PAGE - data.length );
					
					var elementWidth = 258, elementHeight = 143.4;
					var basisVectorSequence = [ [ 259.4, 0 ], [ 518.4, 0 ], [ 259.4, 144.4 ], [ 518.4, 144.4 ], [ 259.4, 289.4 ], [ 518.4, 289.4 ], [ 259.4, 434.4 ], [ 518.4, 434.4 ] ];
					//actual elements
					for ( var w = 0; w < widgetUserInformationIds.length; w ++ )
					{
						var iframe = document.createElement ( 'iframe' );
						iframe.src = data [ w ].stream;
						iframe.id = "soul_dyanamically_generated_user_information_" + w;
						iframe.style.position = "absolute";
						iframe.style.left = "" + basisVectorSequence [ w ] [ 0 ] + "px";
						iframe.style.top =  "" + basisVectorSequence [ w ] [ 1 ] + "px";
						iframe.style.width = "" + elementWidth + "px";
						iframe.style.height = "" + elementHeight + "px";
						iframe.style.border = "0";
						widgetUserInformationIds [ w ] = iframe.id;
						document.getElementById ( "UserInformationArea" ).appendChild ( iframe );
					}
					//dummy elements
					for ( var w = widgetUserInformationIds.length; w < MAXIMUM_ELEMENTS_PER_PAGE; w ++ )
					{
						var dummyData = document.createElement ( 'iframe' );
						dummyData.id = "soul_dyanamically_generated_dummy_information_" + w;
						dummyData.style.position = "absolute";
						dummyData.style.left = "" + basisVectorSequence [ w ] [ 0 ] + "px";
						dummyData.style.top =  "" + basisVectorSequence [ w ] [ 1 ] + "px";
						dummyData.style.width = "" + elementWidth + "px";
						dummyData.style.height = "" + elementHeight + "px";
						dummyData.style.backgroundColor = CURRENTLY_SELECTED_MOOD_COLOUR;
						dummyData.style.border = "0";
						widgetDummyInformationIds [ w ] = dummyData.id;
						document.getElementById ( "UserInformationArea" ).appendChild ( dummyData );
					}
					
					toggleContent ( 'WidgetPlaylistPageZeroGenreArea', 'hidden' );
					toggleContent ( 'WidgetPlaylistPageOneGenreArea', 'hidden' );
				}
			}
		);
	}
	
	function prepareTitles ( )
	{
		//welcome widget titles
			//establish variable to hold title
			var welcomeWidgetTitleZero = "Soul republic browser extension 1.0.0.0\n(a)Go to tools -> extensions in chrome.\nEnable developer mode (select checkbox [Developer mode] top right extension tab)\n\n(b)Download 'soulify.chrome.extension.zip' file, and extract to desktop.\n\n(1)On extension tab, select [Load unpacked extension], and navigate to 'soulify.chrome.extension' folder. Add to chrome, and you are done!\n\n(2)On any site, like youtube, right click on any empty space on video page, then 'soulify' active video!\n\n\n(3)Supported videos?\nyoutube,veoh,vimeo,dailymotion,metacafe,videobash";
			//set title
			document.getElementById ( 'WelcomeWidgetAreaComponentThree' ).title = welcomeWidgetTitleZero;
	}
	
	function manageGenrePageNavigation ( )
	{				
		switch ( CURRENT_GENRE_PAGE )
		{
			case 0 :
			{
				toggleContent ( 'WidgetPlaylistPageZeroGenreArea', 'visible' ); 
				toggleContent ( 'WidgetPlaylistPageOneGenreArea', 'hidden' ); 
			}
			break;
			case 1 :
			{
				toggleContent ( 'WidgetPlaylistPageZeroGenreArea', 'hidden' ); 
				toggleContent ( 'WidgetPlaylistPageOneGenreArea', 'visible' ); 
			}
			break;			
		}
		
		document.getElementById ( 'WelcomeWidgetPlaylistAreaComponentOne' ).value = 'page ' + ( CURRENT_GENRE_PAGE + 1 );
	}
	
	function enableWidgetAnimation ( )
	{/*
		$('.WidgetArea').css
		(
			{
				'-webkit-transform' : 'rotateY(-180deg)',
				'-moz-transform' : 'rotateY(-180deg)',  
				'-ms-transform' : 'rotateY(-180deg)',  
				'-o-transform' : 'rotateY(-180deg)',  
				'transform' : 'rotateY(-180deg)'
			}
		);*/
	}
	
//sign up user
	$('#SignUpWidgetAreaForm').submit(function(event) 
	{
		var newUserName = document.getElementById ( 'JoinWidgetAreaComponentZero' ).value;
		var newUserEmail = document.getElementById ( 'JoinWidgetAreaComponentOne' ).value;
		var newUserPassword = document.getElementById ( 'JoinWidgetAreaComponentTwo' ).value;
		var newUserTitle = document.getElementById ( 'JoinWidgetAreaComponentThree' ).value;

		
		var signUpWidgetFormAppearanceHtml = document.getElementById ( 'JoinWidgetAreaComponentFourA' );
		var signUpWidgetFormAppearanceFile = signUpWidgetFormAppearanceHtml.files [ 0 ];
		var signUpWidgetFormData = new FormData ( );
		
		signUpWidgetFormData.append ( 'JoinWidgetAreaComponentFourAName', signUpWidgetFormAppearanceFile );
		
		enableNewUserEntry ( newUserName, newUserEmail, newUserPassword, newUserTitle, signUpWidgetFormData );

	});

//login user
	$('#LoginInWidgetAreaForm').submit(function(event) 
	{
		//build queryString
		USER_SIGN_IN_EMAIL = document.getElementById ( 'HelloWidgetAreaComponentOne' ).value;
		USER_SIGN_IN_PASSWORD = document.getElementById ( 'HelloWidgetAreaComponentTwo' ).value;
		
		enableUserLogin ( USER_SIGN_IN_EMAIL, USER_SIGN_IN_PASSWORD );
	});
	
	//number to letter mechanism
	function getLetterFromNumber ( input )
	{
		var val = input, arr = [], str = '', i = 0;
		
		while ( val ) 
		{
			arr.push( val % 1000 );
			val = parseInt( val / 1000, 10 );   
		}
		
		while ( arr.length )
		{
			str = 
				(
					function( a ) 
					{
						var x = Math.floor( a / 100 ),
							y = Math.floor( a / 10 ) % 10,
							z = a % 10;
						
						return ( x > 0 ? ones[x] + 'Hundred' : '' ) +                 
							( y >= 2 ? tens[y] + '' + ones[z] : ones[10*y + z] ); 
					}
				)( arr.shift() ) + sep[i++] + str;                     
		}
		return str;
	}
	
	function enableDownload ( file )
	{
		window.location = file;
	}
	
	//Cookie mechanism - not used
	function createCookie(name,value,days) 
	{
		alert(name+'..' + value + '...' + days );
		if (days) 
		{
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = '; expires='+date.toGMTString();
		}
		else var expires = '';
		document.cookie = name+'='+value+expires+'; path=/';
	}

	function readCookie(name) 
	{
		var nameEQ = name + '=';
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) 
		{
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}

	function eraseCookie(name) 
	{
		createCookie(name,'',-1);
	}
	
	function enableRotationFx ( rotationAxis, rotationAmount, elementId )
	{
		$('#' + elementId ).animate
		(
			{  borderSpacing: rotationAmount },
			{
				step: function(now,fx) 
				{
					$(this).css('-webkit-transform','rotate' + rotationAxis + '('+now+'deg)'); 
					$(this).css('-moz-transform','rotate' + rotationAxis + '('+now+'deg)');
					$(this).css('transform','rotate' + rotationAxis + '('+now+'deg)');
				},
				duration:'slow'
			},
			'linear'
		);
	}
	
	function updateUiBasedOnMood ( )
	{
		$.ajax
		(
			{
				type: 'GET',

				url: 'data/phps/_php.moods.php',

				dataType: 'json',

				success: function ( data ) 
				{
					console.log ( data );
		
					moodColours = data;
	
					//get current value
					CURRENTLY_SELECTED_MOOD = document.getElementById ( 'WidgetUserInformationConfigurationAreaZeroAreaComponentOne' ).value;
					
					//get colours
					var _colour, _deepColour;
					
					for ( var i = 0; i < data.length; i ++ )
						if ( data [ i ].title == CURRENTLY_SELECTED_MOOD )
						{
							_colour = data [ i ].colour;
							_deepColour = data [ i ].deepColour;
						}
							
					_updateUiBasedOnMood ( _colour, _deepColour, CURRENTLY_SELECTED_MOOD );
				}
			}
		);
	}
	
	function loadMoodString ( )
	{
		$.ajax
		(
			{
				type: 'GET',

				url: 'data/phps/_php.mood.string.php?SOULIFY_SIGN_IN_USER_EMAIL_GET_VALUE='+USER_SIGN_IN_EMAIL,

				dataType: 'json',

				success: function ( data ) 
				{
					USER_MOOD_STRING = data [ 0 ].moodString;
				}
			}
		);
	}

	function enableNewUserEntry ( newUserName, newUserEmail, newUserPassword, newUserTitle, newUserFormData )
	{
		event.preventDefault ( );
		
		$.ajax
		(
			{
				type: 'POST',

				url: 'data/phps/_php.new.entry.php?SOULIFY_NEW_USER_NAME=' + newUserName + '&SOULIFY_NEW_USER_EMAIL=' + newUserEmail + '&SOULIFY_NEW_USER_PASSWORD=' + newUserPassword + '&SOULIFY_NEW_USER_TITLE=' + newUserTitle, 

				data : newUserFormData,
				
				processData : false,
				
				processData: false,  // tell jQuery not to process the data
				
				contentType: false,  // tell jQuery not to set contentType
				
				success: function ( data ) 
				{
					var newUserName = document.getElementById ( 'JoinWidgetAreaComponentZero' ).value;
					var newUserEmail = document.getElementById ( 'JoinWidgetAreaComponentOne' ).value;
					
					enableUserLogin ( newUserEmail, newUserPassword );
				}
			}
		);
	}
	
	function enableUserLogin ( userEmail, userPassword )
	{
		loadUiBasedOnLastMoodOnStartup ( );
		
		var userSignInEmailQuery = '?SOULIFY_SIGN_IN_USER_EMAIL_GET_VALUE='+userEmail;
		var userSignInPasswordQuery = '&SOULIFY_SIGN_IN_USER_PASSWORD_GET_VALUE='+userPassword;
		
		loadMoodString ( );
		
		var signInQueryString = userSignInEmailQuery + userSignInPasswordQuery;
		
		event.preventDefault ( );

			$.ajax(
			{

				type: 'GET',

				url: 'data/phps/_php.user.validation.php'+signInQueryString,

				dataType: 'json',

				success: function (data) 
				{

					console.log(data);
					var isUserValid = false;
					
					if ( ( userEmail == data[0].userEmail ) && ( userPassword == data[0].userPassword ) ) 
					{

						isUserValid = true;
						hasUserLoggedIn = true;

						//dynamically mutate widgets to reflect successful user login!
							//enable welcome widget
							toggleContent ( 'WelcomeWidgetArea', 'visible' ); //welcome join area on startup
							//disable hello widget
							toggleContent ( 'HelloWidgetArea', 'hidden' );
							//establish user profile picture background
							document.getElementById ( 'ProfileWidgetAreaComponentZero' ).src = data[0].userProfilePictureStream;
							//establish user profile picture
							document.getElementById ( 'ProfileWidgetAreaComponentTwo' ).src = data[0].userProfilePictureStream;
							//establish user name
							document.getElementById ( 'ProfileWidgetAreaComponentThree' ).innerHTML = '@'+data[0].userName.toLowerCase ( ).replace ( ' ', '' );
							/*var titleLength = document.getElementById ( 'ProfileWidgetAreaComponentThree' ).style.length;
							var containerLength = document.getElementById ( 'ProfileWidgetArea' ).style.size;
							alert(containerLength);
							document.getElementById ( 'ProfileWidgetAreaComponentThree' ).style.position = 'absolute '+containerLength/2-titleLength/2 +' 90%';*/
							//establish user title
							document.getElementById ( 'ProfileWidgetAreaComponentFour' ).innerHTML = data[0].userTitle;
							//establish user notification cardinality
							document.getElementById ( 'ProfileWidgetAreaComponentSixB' ).innerHTML = data[0].userNotificationCardinality;
							//establish user follower cardinality
							document.getElementById ( 'ProfileWidgetAreaComponentSevenB' ).innerHTML = data[0].userFollowerCardinality;
							//establish user following cardinality
							document.getElementById ( 'ProfileWidgetAreaComponentEightB' ).innerHTML = data[0].userFollowingCardinality;
							//establish signature 
							document.getElementById ( 'ProfileSignatureWidgetAreaComponentOne' ).innerHTML = 'JORDAN BENNETT';
							document.getElementById ( 'ProfileSignatureWidgetAreaComponentTwo' ).innerHTML = 'Welcome to Soulify!';
							document.getElementById ( 'ProfileSignatureWidgetAreaComponentFour' ).innerHTML = '10:13';
							//establish recency  
							document.getElementById ( 'ProfileRecencyWidgetAreaComponentTwo' ).innerHTML = '10:13';
							document.getElementById ( 'ProfileRecencyWidgetAreaComponentFive' ).innerHTML = 'JORDAN BENNETT';
							document.getElementById ( 'ProfileRecencyWidgetAreaComponentSix' ).innerHTML = "Jordan Bennett, the orchestrator amidst soulify gives you a warm welcome! He speaks about the dynamics, and speaks about soulify's coolness on a whole...";
							document.getElementById ( 'ProfileRecencyWidgetAreaComponentZero' ).src = 'data/images/widget.profile.recency.initial.media.cover.picture.png';
							
							//establish favourites 
							document.getElementById ( 'ProfileFavouritesWidgetAreaComponentOneA' ).innerHTML = '';
							document.getElementById ( 'ProfileFavouritesWidgetAreaComponentTwoB' ).innerHTML = '0';
							document.getElementById ( 'ProfileFavouritesWidgetAreaComponentOneC' ).src = 'data/images/widget.profile.top.three.playlist.item.initial.picture.png';
							//establish top chart
								//first
								document.getElementById ( 'ProfileTopThreePlaylistItemWidgetAreaComponentZeroA' ).innerHTML = '1';
								document.getElementById ( 'ProfileTopThreePlaylistItemWidgetAreaComponentZeroB' ).src = 'data/images/widget.profile.top.three.playlist.item.initial.picture.png';
								document.getElementById ( 'ProfileTopThreePlaylistItemWidgetAreaComponentZeroC' ).innerHTML = 'Jordan Bennett';
								document.getElementById ( 'ProfileTopThreePlaylistItemWidgetAreaComponentZeroD' ).innerHTML = 'Welcome to Soulify!';
								//second
								document.getElementById ( 'ProfileTopThreePlaylistItemWidgetAreaComponentOneA' ).innerHTML = '';
								toggleContent ( 'ProfileTopThreePlaylistItemWidgetAreaComponentOneB', 'hidden' );
								document.getElementById ( 'ProfileTopThreePlaylistItemWidgetAreaComponentOneC' ).innerHTML = '';
								document.getElementById ( 'ProfileTopThreePlaylistItemWidgetAreaComponentOneD' ).innerHTML = '';
								toggleContent ( 'ProfileTopThreePlaylistItemWidgetAreaComponentOneEA', 'hidden' );
								toggleContent ( 'ProfileTopThreePlaylistItemWidgetAreaComponentOneEB', 'hidden' );
								toggleContent ( 'ProfileTopThreePlaylistItemWidgetAreaComponentOneEC', 'hidden' );
								//third
								document.getElementById ( 'ProfileTopThreePlaylistItemWidgetAreaComponentTwoA' ).innerHTML = '';
								toggleContent ( 'ProfileTopThreePlaylistItemWidgetAreaComponentTwoB', 'hidden' );
								document.getElementById ( 'ProfileTopThreePlaylistItemWidgetAreaComponentTwoC' ).innerHTML = '';
								document.getElementById ( 'ProfileTopThreePlaylistItemWidgetAreaComponentTwoD' ).innerHTML = '';
								toggleContent ( 'ProfileTopThreePlaylistItemWidgetAreaComponentTwoEA', 'hidden' );
								toggleContent ( 'ProfileTopThreePlaylistItemWidgetAreaComponentTwoEB', 'hidden' );
								toggleContent ( 'ProfileTopThreePlaylistItemWidgetAreaComponentTwoEC', 'hidden' );
								
								
								//enable fx
								enableRotationFx ( 'Y', 360, 'WelcomeWidgetArea' );
								enableRotationFx ( 'Y', 360, 'ProfileWidgetArea' );
								enableRotationFx ( 'Y', 360, 'ProfileFavouritesWidgetArea' );
								enableRotationFx ( 'Y', 360, 'ProfileRecencyWidgetArea' );
								enableRotationFx ( 'Y', 360, 'ProfileSignatureWidgetArea' );
								enableRotationFx ( 'X', 360, 'ProfileVolumeControlWidgetArea' );
								enableRotationFx ( 'X', 360, 'ProfileTopThreePlaylistItemWidgetAreaZero' );
								enableRotationFx ( 'X', 360, 'ProfileTopThreePlaylistItemWidgetAreaOne' );
								enableRotationFx ( 'X', 360, 'ProfileTopThreePlaylistItemWidgetAreaTwo' );
					}

					if ( ( userEmail != data[0].userEmail ) || ( userPassword != data[0].userPassword ) ) 
						alert ( 'invalid login details!' );
				}
			});
	}
	
	function updateGenreMood ( moodString )
	{
		$.ajax
		(
			{
				type: 'POST',

				url: 'data/phps/_php.genre.mood.updater.php?SOULIFY_NEW_MOOD_STRING=' + moodString + '&SOULIFY_SIGN_IN_USER_EMAIL_GET_VALUE=' + USER_SIGN_IN_EMAIL,

				dataType: 'json',

				success: function ( data ) 
				{
				}
			}
		);
	}
	
	function updateLastMood ( moodTitle )
	{
		$.ajax
		(
			{
				type: 'POST',

				url: 'data/phps/_php.last.mood.updater.php?SOULIFY_MOOD_SELECTION_VALUE=' + moodTitle + '&SOULIFY_SIGN_IN_USER_EMAIL_GET_VALUE=' + USER_SIGN_IN_EMAIL,

				dataType: 'json',

				success: function ( data ) 
				{
					
				}
			}
		);
	}
	
	function loadUiBasedOnLastMoodTitle ( moodTitle )
	{
		$.ajax
		(
			{
				type: 'GET',

				url: 'data/phps/_php.last.mood.php?SOULIFY_SIGN_IN_USER_EMAIL_GET_VALUE='+USER_SIGN_IN_EMAIL,

				dataType: 'json',

				success: function ( response ) 
				{
					$.ajax
					(
						{
							type: 'GET',

							url: 'data/phps/_php.moods.php',

							dataType: 'json',

							success: function ( data ) 
							{
								//get colours
								var _colour, _deepColour;
								
								for ( var i = 0; i < data.length; i ++ )
									if ( data [ i ].title == moodTitle )
									{
										_colour = data [ i ].colour;
										_deepColour = data [ i ].deepColour;
									}
										
								_updateUiBasedOnMood ( _colour, _deepColour, moodTitle );
							}
						}
					);
				}
			}
		);
	}
	
	function loadUiBasedOnLastMoodOnStartup ( )
	{
		$.ajax
		(
			{
				type: 'GET',

				url: 'data/phps/_php.last.mood.php?SOULIFY_SIGN_IN_USER_EMAIL_GET_VALUE='+USER_SIGN_IN_EMAIL,

				dataType: 'json',

				success: function ( response ) 
				{
					$.ajax
					(
						{
							type: 'GET',

							url: 'data/phps/_php.moods.php',

							dataType: 'json',

							success: function ( data ) 
							{
								//get current value
								var lastMood = response [ 0 ].title;
								
								//get colours
								var _colour, _deepColour;
								
								for ( var i = 0; i < data.length; i ++ )
									if ( data [ i ].title == lastMood )
									{
										_colour = data [ i ].colour;
										_deepColour = data [ i ].deepColour;
									}
										
								_updateUiBasedOnMood ( _colour, _deepColour, lastMood );
							}
						}
					);
				}
			}
		);
	}

	
	function _updateUiBasedOnMood ( _colour, _deepColour, _moodText )
	{
		
		$.ajax
		(
			{
				type: 'GET',

				url: 'data/phps/_php.moods.php',

				dataType: 'json',

				success: function ( data ) 
				{
					console.log ( data );
		
					moodColours = data;
	
							
					//re-establish element visuals
						//re-stablish mood icon
						document.getElementById ( 'WidgetUserInformationConfigurationAreaZeroAreaComponentZero' ).src = 'data/images/moods/' + _moodText + '.png';
						document.getElementById ( 'WidgetUserInformationConfigurationAreaZeroAreaComponentOne' ).value = _moodText;
						
						CURRENTLY_SELECTED_MOOD_COLOUR = _colour;
						CURRENTLY_SELECTED_MOOD_DEEP_COLOUR = _deepColour;
						
						//re-establish all widget background colours
						for ( var w = 0; w < widgetLabelCollection.length; w ++ )
							document.getElementById ( '' + widgetLabelCollection [ w ] ).style.backgroundColor = _colour;
							
						//re-establish all <button> background colours
						for ( var b = 0; b < buttonLabelCollection.length; b ++ )
							document.getElementById ( '' + buttonLabelCollection [ b ] ).style.backgroundColor = _colour;
							
						//re-establish all <select> background colours
						for ( var m = 0; m < selectLabelCollection.length; m ++ )
							document.getElementById ( '' + selectLabelCollection [ m ] ).style.backgroundColor = _colour;
							
						//re-establish all <labels/divs> colours
						for ( var m = 0; m < labelLabelCollection.length; m ++ )
							document.getElementById ( '' + labelLabelCollection [ m ] ).style.color = _deepColour;
							
						//re-establish all genreAreaZero background colours
						for ( var m = 0; m < genreAreaZeroLabelCollection.length; m ++ )
							document.getElementById ( '' + genreAreaZeroLabelCollection [ m ] ).style.backgroundColor = _colour;
							
							//re-establish all genreAreaZero Component background colours
							for ( var m = 0; m < genreAreaZeroComponentZeroLabelCollection.length; m ++ )
								document.getElementById ( '' + genreAreaZeroComponentZeroLabelCollection [ m ] ).style.color = _deepColour;
								
						//re-establish all genreAreaOne background colours
						for ( var m = 0; m < genreAreaOneLabelCollection.length; m ++ )
							document.getElementById ( '' + genreAreaOneLabelCollection [ m ] ).style.backgroundColor = _colour;
							
							//re-establish all genreAreaOne Component background colours
							for ( var m = 0; m < genreAreaOneComponentZeroLabelCollection.length; m ++ )
								document.getElementById ( '' + genreAreaOneComponentZeroLabelCollection [ m ] ).style.color = _deepColour;
							
						//re-establish all user information background colours
						/*for ( var m = 0; m < widgetUserInformationIds.length; m ++ )
							document.getElementById ( '' + widgetUserInformationIds [ m ] ).style.backgroundColor = _colour;*/

						//re-establish all dummy user information background colours
						if ( widgetDummyInformationIds != null && widgetUserInformationIds != null )
							for ( var m = widgetUserInformationIds.length; m < widgetDummyInformationIds.length; m ++ )
								document.getElementById ( '' + widgetDummyInformationIds [ m ] ).style.backgroundColor = _colour;
							
						//re-establish all miscellaneous background colours
						for ( var m = 0; m < miscellaneousLabelCollection.length; m ++ )
							document.getElementById ( '' + miscellaneousLabelCollection [ m ] ).style.backgroundColor = _colour;
							
						//change loader's default bg colour to soulify's default bg colour
						$( ".pace" ).find ( '.pace-progress' ).css ( 'background', ''+_colour );
							
						//profile favourites circular overlay
						$('#ProfileFavouritesWidgetAreaComponentOneB::after').each(function(){
						  $(this).css('border-top', '45px solid ' + _colour);
						  $(this).css('border-top-color', ''+ _colour);
						});

						//reset directory colour
						document.getElementById ( 'ProfileWidgetAreaComponentOne' ).style.color = _colour;
						
						
						//reset html bg colour
						document.getElementById ( 'html' ).style.backgroundColor = _deepColour;

						
						/* Desktops and laptops ----------- */
						if ( !DESKTOP_MODE )
						{
							//reset mobile nav bar colour
							document.getElementById ( 'MobileNavigationArea' ).style.backgroundColor = _deepColour;
							document.getElementById ( 'html' ).style.backgroundColor = _colour;
						}
						
						
						//reset artiste rating psuedo element
						//document.getElementById ( '' + miscellaneousLabelCollection [ 1 ] ).style.backgroundColor.af
				}
			}
		);
	}
	
	//////////////////////////////////////////////////////////
	//ESTABLISH drag-ability
	//////////////////////////////////////////////////////////
	$
	(
		function ( ) 
		{
			$( "div" ).each 
			( 
				function ( index ) 
				{
					$( this ).draggable ( );
				}
			);
		}
	);