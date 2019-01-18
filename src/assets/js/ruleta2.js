    // The responisve parameter is the only difference needed to make a wheel responsive.
    
    let theWheel = new Winwheel({
        'numSegments'  : 6,
        'textFontSize' : 22,
        'textAlignment'     : 'outer',
        'textOrientation'   : 'curved',
        'textMargin'        : 45,
        'responsive'   : true,  // This wheel is responsive!
        'segments'     :
        [
            {'fillStyle' : '#eae56f', 'text' : '+100'},
            {'fillStyle' : '#89f26e', 'text' : '+500'},
            {'fillStyle' : '#7de6ef', 'text' : '+200'},
            {'fillStyle' : '#e7706f', 'text' : '+300'},
            {'fillStyle' : '#424EFC', 'text' : '+400'},
            {'fillStyle' : '#89f26e', 'text' : '+800'}
        ],
        'pins' :
        {
            'outerRadius': 6,
            'responsive' : true, // This must be set to true if pin size is to be responsive.
        },
        'animation' :
        {
            'type'     : 'spinToStop',
            'duration' : 5,
            'spins'    : 8,
            'callbackFinished' : alertPrize
        },
        
    });
    let loadedImg = new Image();
    // Create callback to execute once the image has finished loading.
    loadedImg.onload = function()
    {
        theWheel.wheelImage = loadedImg;    // Make wheelImage equal the loaded image object.
        theWheel.draw();                    // Also call draw function to render the wheel.
    }
    // Set the image source, once complete this will trigger the onLoad callback (above).
    loadedImg.src = "assets/css/planes.png";  


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