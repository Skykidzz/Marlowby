buttons = function(x, y, w, h, t, b) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.t = t;
	this.b = b;
    this.oe = [x,y,w,h,x,y,w,h]
    this.hov = 0;
	this.hol = 0;
    this.pre = 0;
	if(this.t == 0 || this.t == 1) {
		this.xx = this.x + this.w / 2;
		this.ww = 0;
	}
}

buttons.prototype.draw = function() {
push()
if(this.t == 0) {
	if(this.hov == 1) {
		holl = 1;
	}else{
		holl = 0;
	}
}
//fill(131, 0, 240, 255 - window.pageYOffset * size[0] * 3)
if(this.t == 1) {
   this.oe[0] = ss[0] / 2 - 200 * size[0] / 2
   this.oe[2] = this.oe[6] * size[1]
   this.oe[1] = this.oe[5] * size[0]
   this.oe[3] = this.oe[7] * size[0]
}else{
	this.oe[0] = this.oe[4] * size[1]
   this.oe[2] = this.oe[6] * size [1]
   this.oe[1] = this.oe[5] * size[0]
   this.oe[3] = this.oe[7] * size[0]
}
   if(this.t == 0) {
   noStroke()
//stroke(255,255,255)
var textb = ""
	if(this.b == 0) {
		textb = "Home"
	}
	if(this.b == 1) {
		textb = "About"
	}
	if(this.b == 2) {
		textb = "Subscriptions"
	}
	if(this.b == 3) {
		textb = "Github"
	}
	if(this.b == 4) {
		textb = "Login / Sign up"
	}
	if(this.b == 5) {
		if(li[2][0].length < 20) {
		textb = li[2][0]
		}
	}
	noStroke()
	fill(cosc[3])
	if(this.b == 0) {
   rect(this.x, this.y, this.w, this.h, 0,0,0,5 * size[0])
	}else{
   rect(this.x, this.y, this.w, this.h)
	}
	stroke(0,0,0)
	var ts = 19 * size[0]
	textSize(ts)
	noStroke()
	fill(cosc[4])
	textAlign(CENTER, CENTER); 
	textWrap(WORD)
	textFont(fonts[1])
	text(textb, this.oe[0], this.y + this.h /2, this.oe[2] - 2)
	//pop()
   }
   
   if(this.t == 0 || this.t == 1) {
	 if(this.hov == 1) {
	this.xx -= ((this.xx - this.x - 30 * size[0]) * delh) / 4
	this.ww -= ((this.ww - this.w + 60 * size[0]) * delh) / 4
   }else{
	if(this.ww < 3 * size[0]) {
		this.xx = this.x + this.w / 2;
		this.ww = 0;
	}else{
	this.xx -= ((this.xx - this.x - this.w / 2) * delh) / 6
	this.ww -= ((this.ww - 0) * delh) / 6
	}
   }
}
   if(this.t == 1) {
	push()
	fill(cosc[1])
	rect(this.x, this.y, this.w, this.h)
	var ts = 16 * size[0]
	textSize(ts)
	noStroke()
	fill(cosc[4])
	textAlign(CENTER, CENTER); 
	textWrap(WORD)
	textFont(fonts[1])
	if(this.b == 0) {
		texb = "Login"
	}
	if(this.b == 1) {
		texb = "Sign Up"
	}
	text(texb, this.oe[0], this.y + this.h /2, this.oe[2] - 2)
   }
   if(this.hov == 1) {
	this.xx -= ((this.xx - this.x - 30 * size[0]) * delh) / 4
	this.ww -= ((this.ww - this.w + 60 * size[0]) * delh) / 4

	}
   noStroke()
   fill(cosc[4])
   rect(this.xx, getTextBottomY(textb,this.oe[0], this.y + this.h /2, this.oe[2] - 2 * size[0]), this.ww, 2 * size[0] , 5 * size[0])
pop()
}

buttons.prototype.use = async function() {
if(this.x < mouseX && this.x + this.w > mouseX && this.y < mouseY && this.y + this.h > mouseY) {
	if(this.t == 0) {
		if(holl == 0 || this.hol == 1) {
	this.hov = 1;
	this.hol = 1;
		}else{
	this.hov = 0;
		}
	}else{
	this.hov = 1;
	}
	}else{
		this.hol = 0;
		this.hov = 0;
	}
    	if(this.hov === 1 && mouseIsPressed) {
		if(this.oc == 1) {
			if(ml == 0) {
				this.pre = 1;
			}
			}else{
		this.pre = 1;
		}
	}else{
		this.pre = 0;
	}
    if(this.t == 0 || this.t == 1) {
		if(this.hov == 1) {
			this.x -= ((this.x - (this.oe[0] - (this.oe[2] / 60) * size[0])) * delh) / 2
			this.y -= ((this.y - (this.oe[1] - (this.oe[2] / 60) * size[0])) * delh) / 2
			this.w -= ((this.w - (this.oe[2] + (this.oe[2] / 30) * size[0])) * delh) / 2
			this.h -= ((this.h - (this.oe[3] + (this.oe[2] / 30) * size[0])) * delh) / 2
		}else{
			this.x -= ((this.x - this.oe[0]) * delh) / 2
			this.y -= ((this.y - this.oe[1]) * delh) / 2
			this.w -= ((this.w - this.oe[2]) * delh) / 2
			this.h -= ((this.h - this.oe[3]) * delh) / 2
		}
	}
	if(this.pre == 1 && ml == 0) {
		if(this.t == 0) {
			if(this.b == 3) {
			window.open(gitlink)
			}else{
			loadPage(this.b, 1)
			}
		}
		if(this.t == 1) {
			if(this.b == 0) {
				var pac = await sendInfo({pack: "getinfACL", user: inpb[0].value(), pass: inpb[1].value()}, true)
				if(pac.message[0] == "t") {
					//[logged in, user number, [username, password]]
					li = [1, pac.message[1], pac.message[2]]
					print(li)
					gt[2] = "Success!"
					gt[3] = 1
				}else{
					gt[2] = "Incorrect Username Or Password."
					gt[3] = 1
				}
			}
			if(this.b == 1) {	
				var pac = await sendInfo({pack: "getinfAC", user: inpb[2].value()}, true)
				print(pac.message)
				if(pac.message == "f") {
					if(!inpb[2].value() == "" || !inpb[3].value() == "") {
				gt[0] = "Account Created!"
				gt[1] = 1
				sendInfo({pack: "makeacc", user: inpb[2].value(), pass: inpb[3].value()}, false)
					}else{
					gt[0] = "Missing Username Or Password."
					gt[1] = 1
					}
				}else{
					gt[0] = "Username Already Used."
				gt[1] = 1
				}
			}
		}
	}
	if(li[0] == 1 && this.b == 4) {
		this.b = 5;
	}
	if(li[0] == 0 && this.b == 5) {
		this.b = 4;
	}
}

function getTextBottomY(txt, x, y, w) {
  let currentSize = textSize();
  let spacing = textLeading();
  let words = String(txt).split(' ');
  let lineCount = 1;
  let currentLine = '';
  for (let i = 0; i < words.length; i++) {
    let testLine = currentLine + words[i] + ' ';
    if (textWidth(testLine) > w && i > 0) {
      lineCount++;
      currentLine = words[i] + ' ';
    } else {
      currentLine = testLine;
    }
  }
  let totalTextHeight = lineCount * spacing;
  return y + (totalTextHeight / 2) + (currentSize * 0.12);
}


