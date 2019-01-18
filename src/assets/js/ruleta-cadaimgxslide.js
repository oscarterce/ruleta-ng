    // The responisve parameter is the only difference needed to make a wheel responsive.
    
    let theWheel = new Winwheel({
        'numSegments'  : 6,
        'textFontSize' : 22,
        'textAlignment'     : 'outer',
        'textOrientation'   : 'curved',
        'textMargin'        : 45,
        'responsive'   : true,  // This wheel is responsive!
        'drawMode'          : 'segmentImage',
        
        'segments'     :
        [
            {'image' : '../assets/img/1.png', 'text' : '+100'}, // 0 - 60
            {'image' : '../assets/img/2.png', 'text' : '+200'}, // 61 - 120
            {'image' : '../assets/img/3.png', 'text' : '+300'}, // 62 - 180
            {'image' : '../assets/img/4.png', 'text' : '+400'}, // 181 - 240
            {'image' : '../assets/img/5.png', 'text' : '+500'}, // 241 - 300
            {'image' : '../assets/img/6.png', 'text' : '+600'} // 301 - 360
        ],
        //'outerRadius': 70,
        //'innerRadius': 150,
        'pins' :
        {
            'outerRadius': 6,
            'responsive' : true, // This must be set to true if pin size is to be responsive.
        },
        'animation' :
        {
            'type'     : 'spinToStop',
            'duration' : 5,
            'spins'    : 3,
            'callbackFinished' : alertPrize,
            'stopAngle':60
        },
        
    });
    

    let canvas = document.getElementById('canvas');
    canvas.onclick = function (evt)
    {

        var i, xDiff, yDiff, dist, result, cX, cY, startLength; 
        xPos=null; yPos=null; circX=null; circY=null; 
        evt= evt || event;
        xPos=evt.offsetX || evt.pageX;
        yPos=evt.offsetY || evt.pageY;
        cX=canvas.width/2
        cY=canvas.height/2
        xDiff=Math.abs(cX-xPos);
        yDiff=Math.abs(cY-yPos);
        dist=Math.sqrt(Math.pow(xDiff,2)+Math.pow(yDiff,2));
        if(dist <=75){
            theWheel.stopAnimation(false);
            theWheel.rotationAngle = theWheel.rotationAngle % 360;
            theWheel.startAnimation();            
        }
    }

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