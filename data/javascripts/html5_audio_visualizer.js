/*
 * An audio spectrum visualizer built with HTML5 Audio API
 * Author:Wayou
 ************ Modified  By: Jordan Micah Bennett to dynamically adapt new colours. ************
 * License:feel free to use but keep this info please!
 * Feb 15, 2014
 * For more infomation or support you can :
 * view the project page:https://github.com/Wayou/HTML5_Audio_Visualizer/
 * view online demo:http://wayouliu.duapp.com/mess/audio_visualizer.html
 * view the blog on how this is done:http://www.cnblogs.com/Wayou/p/html5_audio_api_visualizer.html
 * or contact me:liuwayong@gmail.com
 Made slightly more dyanamic by Jordan Micah Bennett, Rimann Developers (tm)
 */
 
 
 /*
	JORDAN_USAGE_NOTES_I: NOTE, the system is such that enables a file manager to load music, the visualizer will reflect the loaded mp3.

		JORDAN_USAGE_NOTES_II: HTML_ELEMENT_ID_ONE represents the id of the html container element , consisting of element HTML_ELEMENT_ID_ZERO, HTML_ELEMENT_ID_TWO, HTML_ELEMENT_ID_THREE below:

			JORDAN_USAGE_NOTES_III: HTML_ELEMENT_ID_ZERO represents the id of the html container element , consisting of element HTML_ELEMENT_ID_TWO, HTML_ELEMENT_ID_THREE below

			JORDAN_USAGE_NOTES_IV: HTML_ELEMENT_ID_THREE represents the id of the html element whose output (text) is modified based on the activities in this class.
			
			JORDAN_USAGE_NOTES_V: HTML_ELEMENT_ID_TWO represents the id of the html file element , consisting of element HTML_ELEMENT_ID_TWO below
			
		JORDAN_USAGE_NOTES_V: HTML_ELEMENT_ID_FOUR represents the id of the canvas, upon which the visualizer is drawn.

		***JORDAN_USAGE_NOTES_CONCLUSION***
		The ids HTML_ELEMENT_ID_<INDEX> represent html elements which the audio visualizer communicates with to show changes/
		essential information to the user regarding the mp3 currently loaded in the visualizer class.
		1.HTML_ELEMENT_ID_ONE master container div, containing div below:
		2.HTML_ELEMENT_ID_ZERO sub container div containing file manager label showing changes
		3.HTML_ELEMENT_ID_TWO file manager and label showing changes
		4.HTML_ELEMENT_ID_THREE text label showing changes
		5.HTML_ELEMENT_ID_FOUR canvas target of visualizer
 */

 var HTML_ELEMENT_ID_ZERO = 'ProfileVolumeControlWidgetAreaComponentZero';
 var HTML_ELEMENT_ID_ONE = 'ProfileVolumeControlWidgetAreaComponentOne';
 var HTML_ELEMENT_ID_TWO = 'ProfileVolumeControlWidgetAreaComponentTwo';
 var HTML_ELEMENT_ID_THREE = 'ProfileVolumeControlWidgetAreaComponentThree';
 var HTML_ELEMENT_ID_FOUR = 'ProfileVolumeControlWidgetAreaComponentFour';
 
window.onload = function() {
    new Visualizer().ini();
};
var Visualizer = function() {
    this.file = null, //the current file
    this.fileName = null, //the current file name
    this.audioContext = null,
    this.source = null, //the audio source
    this.info = document.getElementById(HTML_ELEMENT_ID_ZERO).innerHTML, //this used to upgrade the UI information
    this.infoUpdateId = null, //to sotore the setTimeout ID and clear the interval
    this.animationId = null,
    this.status = 0, //flag for sound is playing 1 or stopped 0
    this.forceStop = false,
    this.allCapsReachBottom = false
};
//'#00f','#00f'
Visualizer.prototype = {
    ini: function() {
        this._prepareAPI();
		//capColour,barColour
		//JORDAN_MODIFICATION 0
		if ( CURRENTLY_SELECTED_MOOD_DEEP_COLOUR == null && CURRENTLY_SELECTED_MOOD_COLOUR == null )
			this._addEventListner('rgba(52, 250, 226, 1)','rgba(31, 107, 98, 1)');
		else
			this._addEventListner(CURRENTLY_SELECTED_MOOD_COLOUR,CURRENTLY_SELECTED_MOOD_DEEP_COLOUR);
		//JORDAN_MODIFICATION 0 END
    },
    _prepareAPI: function() {
        //fix browser vender for AudioContext and requestAnimationFrame
        window.AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.msAudioContext;
        window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame;
        window.cancelAnimationFrame = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.msCancelAnimationFrame;
        try {
            this.audioContext = new AudioContext();
        } catch (e) {
            this._updateInfo('!Your browser does not support AudioContext', false);
            console.log(e);
        }
    },
    _addEventListner: function(capColour,barColour) {

        var that = this,
            audioInput = document.getElementById(HTML_ELEMENT_ID_TWO),
            dropContainer = document.getElementsByTagName(HTML_ELEMENT_ID_FOUR)[0];
        //listen the file upload
        audioInput.onchange = function() {
            //the if statement fixes the file selction cancle, because the onchange will trigger even the file selection been canceled
            if (audioInput.files.length !== 0) {
                //only process the first file
                that.file = audioInput.files[0];
                that.fileName = that.file.name;
                if (that.status === 1) {
                    //the sound is still playing but we upload another file, so set the forceStop flag to true
                    that.forceStop = true;
                };
                document.getElementById(HTML_ELEMENT_ID_ONE).style.opacity = 1;
                //that._updateInfo('Uploading', true);
                //once the file is ready,start the visualizer
				AUDIOTAGJS_AMBIENT_AUDIO.pause ( );
				
				if ( CURRENTLY_SELECTED_MOOD_DEEP_COLOUR == null && CURRENTLY_SELECTED_MOOD_COLOUR == null )
					that._start(capColour,barColour);
				else
					that._start(CURRENTLY_SELECTED_MOOD_COLOUR,CURRENTLY_SELECTED_MOOD_DEEP_COLOUR);
            };
        };
	

        //listen the drag & drop
        dropContainer.addEventListener("dragenter", function() {
            document.getElementById(HTML_ELEMENT_ID_ONE).style.opacity = 1;
            that._updateInfo('Drop it on the page', true);
        }, false);
        dropContainer.addEventListener("dragover", function(e) {
            e.stopPropagation();
            e.preventDefault();
            //set the drop mode
            e.dataTransfer.dropEffect = 'copy';
        }, false);
        dropContainer.addEventListener("dragleave", function() {
            document.getElementById(HTML_ELEMENT_ID_ONE).style.opacity = 0.2;
            that._updateInfo(that.info, false);
        }, false);
        dropContainer.addEventListener("drop", function(e) {
            e.stopPropagation();
            e.preventDefault();
            document.getElementById(HTML_ELEMENT_ID_ONE).style.opacity = 1;
            that._updateInfo('Uploading', true);
            //get the dropped file
            that.file = e.dataTransfer.files[0];
            if (that.status === 1) {
                document.getElementById(HTML_ELEMENT_ID_ONE).style.opacity = 1;
                that.forceStop = true;
            };
            that.fileName = that.file.name;
			
			
            //once the file is ready,start the visualizer
			AUDIOTAGJS_AMBIENT_AUDIO.pause ( );
            that._start(capColour,barColour);
        }, false);
		
		            //once the file is ready,start the visualizer

		

    },
    _start: function(capColour,barColour) {
        //read and decode the file into audio array buffer 
        var that = this,
            file = this.file,
            fr = new FileReader();
        fr.onload = function(e) {
            var fileResult = e.target.result;
            var audioContext = that.audioContext;
            if (audioContext === null) {
                alert('audio context is null');
            };
            that._updateInfo('Soulifying audio', true);
            audioContext.decodeAudioData(fileResult, function(buffer) {
                that._updateInfo('sooulification successfull!', true);
                that._visualize(audioContext, buffer,capColour,barColour);
            }, function(e) {
                that._updateInfo('!Fail to decode the file', false);
                console.log(e);
            });
        };
        fr.onerror = function(e) {
            that._updateInfo('!Fail to read the file', false);
            console.log(e);
        };
        //assign the file to the reader
        this._updateInfo('Starting to read the file', true);
        fr.readAsArrayBuffer(file);
    },
    _visualize: function(audioContext, buffer,capColour,barColour) {
        var audioBufferSouceNode = audioContext.createBufferSource(),
            analyser = audioContext.createAnalyser(),
            that = this;
        //connect the source to the analyser
        audioBufferSouceNode.connect(analyser);
        //connect the analyser to the destination(the speaker), or we won't hear the sound
        analyser.connect(audioContext.destination);
        //then assign the buffer to the buffer source node
        audioBufferSouceNode.buffer = buffer;
        //play the source
        if (!audioBufferSouceNode.start) {
            audioBufferSouceNode.start = audioBufferSouceNode.noteOn //in old browsers use noteOn method
            audioBufferSouceNode.stop = audioBufferSouceNode.noteOff //in old browsers use noteOn method
        };
        //stop the previous sound if any
        if (this.animationId !== null) {
            cancelAnimationFrame(this.animationId);
        }
        if (this.source !== null) {
            this.source.stop(0);
        }
        audioBufferSouceNode.start(0);
        this.status = 1;
        this.source = audioBufferSouceNode;
        audioBufferSouceNode.onended = function() {
            that._audioEnd(that);
        };
        this._updateInfo('Playing ' + this.fileName, false);
        this.info = 'Playing ' + this.fileName;
        document.getElementById(HTML_ELEMENT_ID_ONE).style.opacity = 0.2;
        this._drawSpectrum(analyser,capColour,barColour);
    },
    _drawSpectrum: function(analyser,capColour,barColour) {
        var that = this,
            canvas = document.getElementById(HTML_ELEMENT_ID_FOUR),
            cwidth = canvas.width,
            cheight = canvas.height - 2,
            meterWidth = 12, //width of the meters in the spectrum
            gap = 0, //gap between meters //JORDAN_EDIT 0 >> 
            capHeight = 100,
            capStyle = capColour,
            meterNum = 800 / (10 + 2), //count of the meters
            capYPositionArray = []; ////store the vertical position of hte caps for the preivous frame
        ctx = canvas.getContext('2d'),
        gradient = ctx.createLinearGradient(0, 0, 0, 300);
		
        gradient.addColorStop(1, /*JORDAN_EDIT 1 >> added bar and cap colour attributes, and propagated upwards at init to allow for customized colouring */ barColour); 
		//JORDAN_EDIT 2 >> removed multiple colour stops , thus allowing only solid colour
		
        var drawMeter = function() {
            var array = new Uint8Array(analyser.frequencyBinCount);
            analyser.getByteFrequencyData(array);
            if (that.status === 0) {
                //fix when some sounds end the value still not back to zero
                for (var i = array.length - 1; i >= 0; i--) {
                    array[i] = 0;
                };
                allCapsReachBottom = true;
                for (var i = capYPositionArray.length - 1; i >= 0; i--) {
                    allCapsReachBottom = allCapsReachBottom && (capYPositionArray[i] === 0);
                };
                if (allCapsReachBottom) {
                    cancelAnimationFrame(that.animationId); //since the sound is top and animation finished, stop the requestAnimation to prevent potential memory leak,THIS IS VERY IMPORTANT!
                    return;
                };
            };
            var step = Math.round(array.length / meterNum); //sample limited data from the total array
            ctx.clearRect(0, 0, cwidth, cheight);
            for (var i = 0; i < meterNum; i++) {
                var value = array[i * step];
                if (capYPositionArray.length < Math.round(meterNum)) {
                    capYPositionArray.push(value);
                };
                ctx.fillStyle = capStyle;
                //draw the cap, with transition effect
                if (value < capYPositionArray[i]) {
                    ctx.fillRect(i * 12, cheight - (--capYPositionArray[i]), meterWidth, capHeight);
                } else {
                    ctx.fillRect(i * 12, cheight - value, meterWidth, capHeight);
                    capYPositionArray[i] = value;
                };
                ctx.fillStyle = gradient; //set the filllStyle to gradient for a better look
                ctx.fillRect(i * 12 /*meterWidth+gap*/ , cheight - value + capHeight, meterWidth, cheight); //the meter
            }
            that.animationId = requestAnimationFrame(drawMeter);
        }
        this.animationId = requestAnimationFrame(drawMeter);
    },
    _audioEnd: function(instance) {
        if (this.forceStop) {
            this.forceStop = false;
            this.status = 1;
            return;
        };
        this.status = 0;
        var text = 'HTML5 Audio API showcase | An Audio Viusalizer';
        document.getElementById(HTML_ELEMENT_ID_ONE).style.opacity = 1;
        document.getElementById(HTML_ELEMENT_ID_ZERO).innerHTML = text;
        instance.info = text;
        document.getElementById(HTML_ELEMENT_ID_TWO).value = '';
    },
    _updateInfo: function(text, processing) {
        var infoBar = document.getElementById(HTML_ELEMENT_ID_ZERO),
            dots = '...',
            i = 0,
            that = this;
        infoBar.innerHTML = text + dots.substring(0, i++);
        if (this.infoUpdateId !== null) {
            clearTimeout(this.infoUpdateId);
        };
        if (processing) {
            //animate dots at the end of the info text
            var animateDot = function() {
                if (i > 3) {
                    i = 0
                };
                infoBar.innerHTML = text + dots.substring(0, i++);
                that.infoUpdateId = setTimeout(animateDot, 250);
            }
            this.infoUpdateId = setTimeout(animateDot, 250);
        };
    }
}