var ss = [];
var oss = [0,0];
var size = [];
var ps = [];

function getScreen() {
	let sw = window.screen.width;
	let sh = window.screen.height;
	if ((window.innerWidth > window.innerHeight) !== (sw > sh)) {
		return [sh, sw];
	}
	return [sw, sh];
}

var ScreenCorrection = function () {
	if(window.innerWidth !== oss[0] || window.innerHeight !== oss[1] || thin[1] == 1) {
		reshapewin(window.innerWidth, window.innerHeight)
		calcSize()
		resizeCanvas(ps[0] * size[1], ps[1] * size[0])
		thin[1] = 2;
		print(thin[1])
	}
	calcSize()
}

function calcSize() {
	size = [0, ss[0] / ss[2], ss[1]/ ss[3], ss[2] / ss[3]]
	if(size[1] > size[2]) {
		size[0] = size[2] * 1.3444763231197773
	}else{
		size[0] = size[1] * 1.3444763231197773
	}
}

function reshapewin(w,h) {
	oss = [w, h]
	ss = [w, h,  window.screen.width,window.screen.height];
}

function reshapecan(w,h) {
resizeCanvas(w,h)
}

function createWindow(w,h) {
createCanvas(w, h);
ps = [w,h];
oss = [w, h]
ss = [w, h,  getScreen()[0],getScreen()[1]];
}
function GCD(x, y) {
    while (y !== 0) {
        [x, y] = [y, x % y]
    }
    return x;
}

//By: Evan Bailey