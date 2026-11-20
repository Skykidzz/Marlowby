var trans = [0,0,0,0,0]
var inpb = []
var gt = ["", 0]
var thin = [0]

function loadPage(p, t) {
	ps = [ss[2], ss[1]]
    for(i = 5; i <  butt.length; i++) {
    butt.pop()
    }
    if(t !== 0) {
        if(t == 1) {
            trans = [p,1,1,0,0]
        }
    }else{
        page = p
    }
    if(t == 0) {
    if(page == 0) {
        ps = [ss[2], 1800]
	}
    if(page == 4) {
        inpb.push(createInput(''));
        inpb.push(createInput(''));
        inpb.push(createInput(''));
        inpb.push(createInput(''));
        butt.push(new buttons(ss[0] / 2 - (200 * size[0]) / 2, 340,100,35, 1, 0))
        butt.push(new buttons(ss[0] / 2 - (200 * size[0]) / 2, 590,100,35, 1, 1))
    }   
}
}

function Page() {
     push()
        fill(131, 0, 240, 255 - window.pageYOffset * size[0] * 3)
        stroke(0, 255 - window.pageYOffset * size[0] * 3)
       
    pop()
    if(page == 1) {
        fill(255)
        push()
        noStroke()
        fill(cosc[2])
        rect(590  * size[0], 160 * size[0] + (500 / 2 - 320 / 2) * size[0], (ss[0] - 620 * size[0]), 320  * size[0])
        rect(10  * size[0], 160 * size[0], 500  * size[0], 500  * size[0])
        pop()
        push()
        noStroke()
        fill(cosc[1])
        rect(600  * size[0], 150 * size[0] + (500 / 2 - 320 / 2) * size[0], (ss[0] - 620 * size[0]), 320  * size[0])
        rect(20  * size[0], 150 * size[0], 500  * size[0], 500  * size[0])
        pop()
        push()
        fill(255)
        strokeWeight(3 * size[0])
        stroke(0)
        textWrap(WORD);
        textSize(36 * size[0])
        text("About Us:",620  * size[0], 140 * size[0] + (500 / 2 - 250 / 2) * size[0], (ss[0] - 630 * size[0]), 250  * size[0])
        textSize(24 * size[0])
        text("Every month, we will send out some of the best local products from cities all across the U.S right to your doorstep. Experience the cultures first hand through our curated boxes. Subscribe today and begin your journey throughout all of the different businesses.", 620  * size[0], 200 * size[0] + (500 / 2 - 250 / 2) * size[0], (ss[0] - 630 * size[0]), 250  * size[0])
        pop()
    }
    if(page == 4) {
        push()
        fill(cosc[4])
        textSize(50 * size[0])
        textFont(fonts[1])
        text("Login:", (ss[0] / 2 - textWidth("Login:") / 2),200 * size[0])
        rect((ss[0] / 2 - 250 * size[0] / 2),220 * size[0], 250 * size[0], 1 * size[0])
        textSize(20 * size[0])
        text("Username:", (ss[0] / 2 - (200 * size[0]) / 2),255 * size[0])
        text("Password:", (ss[0] / 2 - (200 * size[0]) / 2), 305 * size[0])
        text("Username:", (ss[0] / 2 - (200 * size[0]) / 2),505 * size[0])
        text("Password:", (ss[0] / 2 - (200 * size[0]) / 2), 555 * size[0])
        if(gt[1] > 0 && gt[1] < 75) {
            gt[1]++;
        }else{
            gt[1] = 0;
            gt[0] = ""
        }
         if(gt[3] > 0 && gt[3] < 75) {
            gt[3]++;
        }else{
            gt[3] = 0;
            gt[2] = ""
        }
        text(gt[2], (ss[0] / 2 - (200 * size[0]) / 2), 395 * size[0])
        text(gt[0], (ss[0] / 2 - (200 * size[0]) / 2), 655 * size[0])
         if(inpb.length > 0) {
        inpb[0].position((ss[0] / 2 - (200 * size[0]) / 2), 260 * size[0]);
        inpb[1].position((ss[0] / 2 - (200 * size[0]) / 2), 310 * size[0]);
        inpb[2].position((ss[0] / 2 - (200 * size[0]) / 2), 510 * size[0]);
        inpb[3].position((ss[0] / 2 - (200 * size[0]) / 2), 560 * size[0]);
        inpb[0].size(200 * size[0], 15 * size[0]);
        inpb[1].size(200 * size[0], 15 * size[0]);
        inpb[2].size(200 * size[0], 15 * size[0]);
        inpb[3].size(200 * size[0], 15 * size[0]);
         }
         fill(cosc[4])
        textSize(50 * size[0])
        textFont(fonts[1])
          text("Sign Up:", (ss[0] / 2 - textWidth("Sign Up:") / 2),440 * size[0])
          rect((ss[0] / 2 - 250 * size[0] / 2),460 * size[0], 250 * size[0], 1 * size[0])
         if(li[0] == 1 && thin[0] == 0) {
            loadPage(5, 1)
            thin[0] = 1
         }
          pop() 
    }
}

function Trans() {
    if(trans[4] == 0 && trans[3] > 2 && trans[3] < 200) {
    for(var i = 0; i < inpb.length; i++) {
    inpb[i].remove()
    }
    inpb = []
}
    if(trans[1] == 1) {
        if(trans[2] == 1) {
            if(trans[4] == 0) {
            trans[3] -= ((trans[3] - 255) * delh) / 2.5
        if(trans[3] > 254) {
           loadPage(trans[0], 0)
           print(inpb)
           resizeCanvas(ps[0] * size[1], ps[1] * size[0])
            trans[4] = 1
        }
    }else{
        if(trans[3] < 2) {
        trans = [0,0,0,0,0]
        }
    trans[3] -= ((trans[3] - 0) * delh) / 3
    }
    }
    }
    fill(0,0,0,trans[3])
    rect(0,0,ss[2], ss[3])
}