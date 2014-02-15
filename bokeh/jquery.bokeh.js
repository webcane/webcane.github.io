/*
* Author:      Marco Kuiper (http://www.marcofolio.net/)
* Modify:      cane (http://cane.0fees.net/)
*/

$(document).ready(function()
{
	// Paint with default settings
	repaint();
	
});

// Master function that paints all the bokeh effects
function repaint() {	
  
    // Retrieve all user submitted data
	var numberOfBokehs = 200;
	var bokehMinSize = 30;
	var bokehMaxSize = 100;
	var orbColour = '150, 150, 150';
	
	// Check if we need to create gradients
	var useGradients = true;
	
	// Check if we need to create random colours
	var useRandomColours = true;
	
	// Generate the bokeh orbs
	for(var i = 0; i < numberOfBokehs; i++) {
		
		// Generate a random bokeh size
		var bokehSize = randomXToY(bokehMinSize, bokehMaxSize);		

		if(useRandomColours) {
			// Generate the random bokeh colour
			var bokehColour = randomColour();
		} else {
			// Use the given RGB code
			var bokehColour = orbColour;
		}
		
		// Create the bokeh
		var bokeh = $("<div />")
			.addClass("bokeh")
			.css({
					'left' : Math.floor(Math.random()* screen.width - 2*bokehSize ) + 'px',
					'top' : Math.floor(Math.random()* screen.height - 2*bokehSize ) + 'px',
					'width' : bokehSize + 'px',
					'height' : bokehSize + 'px',
					'border-radius' : Math.floor(bokehSize/2) + 'px',
					'-moz-border-radius' : Math.floor(bokehSize)/2 + 'px',
					'-webkit-border-radius' : Math.floor(bokehSize)/2 + 'px',
					'border' : '1px solid rgba(' + bokehColour + ', 0.7)',
					'background' : 'rgba(' + bokehColour + ', 0.3)'
				});
				
		if(useGradients){
			bokeh.css({
				// Gradients for Firefox
				'background' : '-moz-radial-gradient( contain, rgba('+ bokehColour +', 0.1), rgba(' + bokehColour + ',0.4))',
				// Freaking ugly workaround to make gradients work for Safari too, by applying it to the background-image
				'background-image' : '-webkit-gradient(radial, center center, 0, center center, 70.5, from(rgba('+ bokehColour +', 0.1)), to(rgba(' + bokehColour + ',0.4)))'				
			});
		} else {
			bokeh.css({
				'background' : 'rgba(' + bokehColour + ', 0.3)'
				/* 'background-color' : 'rgba(0,0,0,.1)' */
			});
		}
		/*if(jQuery.browser.opera) {
			bokeh.css({
				'background' : 'rgba(' + bokehColour + ', 0.3)'
			});
        }*/
	
		// Append to container
		bokeh.appendTo("#bokehs");
		//bokeh.appendTo(this);
	}                 
   };    

   
// Function to get a random value between two values
// http://roshanbh.com.np/2008/09/get-random-number-range-two-numbers-javascript.html
function randomXToY(minVal,maxVal,floatVal) {
  var randVal = minVal+(Math.random()*(maxVal-minVal));
  return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
}

// Function to generate a random colour in RBA
// Modified from: http://develobert.blogspot.com/2008/06/random-color-generation-with-javascript.html
function randomColour() {
	var rint = getRandomInt(100, 254);
	return (rint) + ',' + (rint) + ',' + (rint);
}

// использование Math.round() даст неравномерное распределение!
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}   