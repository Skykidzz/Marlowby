var page = 0;
var butt = [];
var delh = 0;
var cosc = []
var ml = 0;
var img = []
var fonts = []
var gitlink = "https://github.com/Skykidzz/Marlowby"
var li = [0]

function preload() {
 	   fonts.push("default")
	   fonts.push(loadFont("Fonts/Gabriola.ttf"))
	   img.push(loadImage("Images/logoo.png"))
	   img.push(loadImage("Images/DSC02627.jpg"))
	   img.push(loadImage("Images/background.jpg"))
	   img.push(loadImage("Images/blue.png"))
}

function setup() {
	// [Background, Misc A, Misc B,  Nav bar, Text]
	cosc = [color(0,0,0), color(30,30,30), color(0,0,0,60), color(50,50,50, 200), color(255,255,255)]
	createWindow(400, 1800)
	//sendInfo({pack: "remacc", usern: 0}, false)
	ScreenCorrection();
	loadPage(0, 0);
	background(100);
	for(var i = 4; i > -1; i--) {
        butt.push(new buttons(ss[2] - 125 * (i + 1), 0, 125, 70, 0, -(i - 4)))
       }
}

function grad(x,y,w,h,c1,c2,a) {
for(var i = 0; i < h; i += 1) {
	noFill()
	push()
	let inter = map(i, 0, 0 + h, 0, 1);
  let c = lerpColor(c1, c2, inter);
	strokeWeight(4)
	//red(c1), green(c1), blue(c1), 255 - (255/(h - 1))*i
	stroke(red(c), green(c), blue(c), (255 - (255/(h - 1))*i) - window.pageYOffset * size[0])
	line(x, y + i, x + w, y + i)
	pop()
}
}

function draw() {
	//reciveInfo()
	if(thin[2] == 0) {
		thin[1] = 1
		thin[2] = 1
	}
	strokeWeight(1 * size[0])
	strokeJoin(ROUND)
	delh = deltaTime / 20;
	ScreenCorrection();
	background(cosc[0])
	image(img[2], 0,0,ss[0],ss[1] * size[0])
	push()
	fill(cosc[3])
	noStroke()
	rect(0,0,210 * size[0], 70 * size[0])
	image(img[0], 10 * size[0], 10 * size[0], 50 * size[0], 50 * size[0])
	push()
	textSize(35 * size[0])
	fill(cosc[4])
	textFont(fonts[1])
	text("Marlowby", 80 * size[0], 45 * size[0])
	pop()
	Page();
	var bd = [];
	var bd2 = []
	for(var i = 0; i < butt.length; i++) {
		butt[i].use()
		
		if(butt[i].hov == 1 && butt[i].t >= 0 && butt[i].t <= 5) {
			bd2.push(i)
		}else{
			bd.push(i)
		}
	}
	for(var i = 0; i < bd2.length; i++) {
		bd.push(bd2[i])
	}
	for(var i = 0; i < butt.length; i++) {
		butt[bd[i]].draw()
	}
	Trans()
	if(mouseIsPressed) {
		ml = 1;
	}else{
		ml = 0;
	}
}