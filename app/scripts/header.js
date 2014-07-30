// Detect if the browser is IE or not.
// If it is not IE, we assume that the browser is NS.
var IE = document.all ? true : false

var verticalPosition;
var verticalPositionBefore;
var windowWidth = 1024;
var windowHeight;

// If NS -- that is, !IE -- then set up for mouse capture
if (!IE) document.captureEvents(Event.MOUSEMOVE)

// Set-up to use getMouseXY function onMouseMove
document.onmousemove = getMouseXY;

// Temporary variables to hold mouse x-y pos.s
var tempX = 0;
var tempY = 0;

var objectArray = new Array();

fillObjectArray();
positionDivs();

function fillObjectArray() {
    var birdDiv = document.getElementById("object1");
    var birdX = 312; //position div from half width of the page
    var birdY = 33;
    var birdFactor = 0.05; //parallax shift factor, the bigger the value, the more it shift for parallax movement
    var birdArray = new Array();
    birdArray.push(birdDiv, birdX, birdY, birdFactor);
    objectArray.push(birdArray);

    var bush1Div = document.getElementById("object2");
    var bush1X = -28;
    var bush1Y = 352;
    var bush1Factor = 0.06;
    var bush1Array = new Array();
    bush1Array.push(bush1Div, bush1X, bush1Y, bush1Factor);
    objectArray.push(bush1Array);

    var bush2Div = document.getElementById("object3");
    var bush2X = 802;
    var bush2Y = 352;
    var bush2Factor = 0.06;
    var bush2Array = new Array();
    bush2Array.push(bush2Div, bush2X, bush2Y, bush2Factor);
    objectArray.push(bush2Array);

}

// Main function to retrieve mouse x-y pos.s

function getMouseXY(e) {
    if (IE) {
        // grab the x-y pos.s if browser is IE
        tempX = event.clientX + document.body.scrollLeft
        tempY = event.clientY + document.body.scrollTop
    } else {
        // grab the x-y pos.s if browser is NS
        tempX = e.pageX
        tempY = e.pageY
    }
    // catch possible negative values in NS4
    if (tempX < 0) {
        tempX = 0
    }
    if (tempY < 0) {
        tempY = 0
    }

    moveDiv(tempX);

    return true
}

function moveDiv(tempX) {
    for (var i = 0; i < objectArray.length; i++) {
        var yourDivPositionX = objectArray[i][3] * (0.5 * windowWidth - tempX) + objectArray[i][1];
        objectArray[i][0].style.left = yourDivPositionX + 'px';
    }
}

function positionDivs() {
    for (var i = 0; i < objectArray.length; i++) {
        objectArray[i][0].style.left = objectArray[i][1] + "px";
        objectArray[i][0].style.top = objectArray[i][2] + "px";
    }
}