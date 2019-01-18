    // The responisve parameter is the only difference needed to make a wheel responsive.
    
    let theWheel = new Winwheel({
        'numSegments'       : 4,         // Specify number of segments.
                'outerRadius'       : 150,       // Set outer radius so wheel fits inside the background.
                'drawMode'          : 'image',   // drawMode must be set to image.
                'drawText'          : true,      // Need to set this true if want code-drawn text on image wheels.
                'textFontSize'      : 12,        // Set text options as desired.
                'textOrientation'   : 'curved',
                'textDirection'     : 'reversed',
                'textAlignment'     : 'outer',
                'textMargin'        : 5,
                'textFontFamily'    : 'monospace',
                'textStrokeStyle'   : 'black',
                'textLineWidth'     : 2,
                'textFillStyle'     : 'white',
                'responsive'   : true,
                'segments'     :                // Define segments.
                [
                   {'text' : 'T-55 Vampire'},
                   {'text' : 'P-40 Kittyhawk'},
                   {'text' : 'North American Harvard'},
                   {'text' : 'L-39C Albatross'}
                ],
                'animation' :                   // Specify the animation to use.
                {
                    'type'     : 'spinToStop',
                    'duration' : 5,     // Duration in seconds.
                    'spins'    : 8,     // Number of complete spins.
                    'callbackFinished' : alertPrize
                }
        
    });
    let loadedImg = new Image();
    // Create callback to execute once the image has finished loading.
    loadedImg.onload = function()
    {
        theWheel.wheelImage = loadedImg;    // Make wheelImage equal the loaded image object.
        theWheel.draw();                    // Also call draw function to render the wheel.
    }
    // Set the image source, once complete this will trigger the onLoad callback (above).
    loadedImg.src = "../assets/css/planes.png";  


    // Called by the onClick of the canvas, starts the spinning.
    function startSpin()
    {
        theWheel.stopAnimation(false);
        theWheel.rotationAngle = theWheel.rotationAngle % 360;
        theWheel.startAnimation();
    }
    function alertPrize(indicatedSegment)
    {
      alert("Ha ganado " + indicatedSegment.text);
    }