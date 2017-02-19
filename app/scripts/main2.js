var yellow = [60, 200, 50];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var color = [yellow, blue, purple];

var title1 = 'Iel Cunanan';
var title2 = 'Web techie';
var title3 = 'Avid game watcher';

window.onload = function timedDraw() {
	setInterval(drawTitle1, 2500);
	setInterval(drawTitle2, 5000);
	setInterval(drawTitle3, 7500);
};

function drawTitle1() {
	drawName(title1, color);
};
function drawTitle2() {
	drawName(title2, color);
};
function drawTitle3() {
	drawName(title3, color);
};

bubbleShape = 'circle';

bounceBubbles();