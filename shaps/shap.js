(function() {
    var canvas = document.getElementById('canvas'),
    ctx  = canvas.getContext('2d');

    // resize the canvas to fill browser window dynamically
    window.addEventListener('resize', resizeCanvas, false);

    function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            /**
             * Your drawings need to be inside this function otherwise they will be reset when 
             * you resize the browser window and the canvas goes will be cleared.
             */
            drawStuff(); 
    }
    resizeCanvas();

    function drawStuff() {
        // do your drawing stuff here

        // Circle
        ctx.beginPath();
        // Agr: x, y, r, sAngle, eAngle, counterclockwise
        // x: The x-coordinate of the center of the circle
        // y: The y-coordinate of the center of the circle
        // r: The radius of the circle
        // sAngle: The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
        // eAngle: The ending angle, in radians
        // counterclockwise: Optional. Specifies whether the drawing should be counterclockwise or clockwise. False is default, and indicates clockwise, while true indicates counter-clockwise.
        ctx.arc(60, 60, 50, 0, 2 * Math.PI);
        ctx.stroke();
    }
})();