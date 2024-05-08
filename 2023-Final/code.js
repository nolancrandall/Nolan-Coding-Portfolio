
// My final project for the JavaScript I decided to create a portfolio that showcased some of my projects. I created my own connect 4 game and improved my shooting star project from earlier and connected them with an interface that switches between the two. This project is much different than anything I have codede before, and I learned a lot of new techniques such as using scenes and transparent objects.


// variables
var x = 1;
var scene = "intro";
var xPositions = [-100];
var yPositions = [-100];
var c = [color(252, 0, 0)];
var y = 1;
var xPos = 54;
var yPos = 89;
var y = 369;
var x = 0;
var h = 100;
var l = 100;
var c1 = color(216, 236, 237); 
var c2 = color(4, 0, 255);
var b = 500;

var art = function() {
    // all of shooting star is in this function
    background(29, 40, 115);
    // background stars
    fill(255, 255, 255);
    ellipse(100, 122, 3, 3);
    ellipse(169, 166, 3, 3);
    ellipse(165, 142, 3, 3);
    ellipse(198, 163, 3, 3);
    ellipse(197, 140, 3, 3);
    ellipse(224, 122, 3, 3);
    ellipse(250, 108, 3, 3);
    ellipse(283, 104, 3, 3);
    ellipse(136, 47, 3, 3);
    ellipse(40, 182, 3, 3);
    ellipse(350, 159, 3, 3);
    ellipse(261, 231, 3, 3);
    ellipse(46, 69, 3, 3);
    //smaller stars
    ellipse(100, 184, 2, 2);
    ellipse(275, 166, 2, 2);
    ellipse(311, 142, 2, 2);
    ellipse(198, 64, 2, 2);
    ellipse(359, 51, 2, 2);
    ellipse(224, 267, 2, 2);
    ellipse(156, 270, 2, 2);
    ellipse(177, 225, 2, 2);
    ellipse(67, 228, 2, 2);
    ellipse(311, 182, 2, 2);
    ellipse(89, 42, 2, 2);
    ellipse(152, 81, 4, 4);
    ellipse(20, 255, 2, 2);
    
    // shooting star
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    triangle(xPos - 5, yPos + 1, xPos+5, yPos - 2, xPos - 20, yPos - 21);
    
    //spotlight
    fill(82, 94, 161, 240);
    triangle(87, 468, mouseX + 57, mouseY, mouseX - 57, mouseY);
    ellipse(mouseX, mouseY, 114, 56);
    //bat logo
    fill(250, 255, 145);
    rect(mouseX - 21, mouseY - 6, 42, 12);
    triangle(mouseX - 50, mouseY - 10, mouseX - 18, mouseY - 10, mouseX, mouseY + 23);
    triangle(mouseX + 50, mouseY - 10, mouseX + 18, mouseY - 10, mouseX, mouseY + 23);
    triangle(mouseX - 14, mouseY + 5, mouseX + 14, mouseY + 5, mouseX, mouseY + 23);
    //ears
    triangle(mouseX - 8, mouseY - 15, mouseX - 3, mouseY - 5, mouseX - 13, mouseY - 5);
    triangle(mouseX + 8, mouseY - 15, mouseX + 13, mouseY - 5, mouseX + 3, mouseY - 5);
    // clouds
    fill(84, 84, 84, 230);
    noStroke();
    ellipse(h, l, 120, 70);
    ellipse(h - 43, l, 76, 45);
    ellipse(h + 51, l, 65, 35);
    //buildings
    fill(0, 0, 0);
    rect(70, 250, 70, 150, 0);
    rect(0, 300, 80, 100, 0);
    rect(138, 334, 70, 70, 0);
    rect(206, 308, 90, 90, 0);
    rect(295, 275, 108, 152, 0);
    rect(329, 223, 51, 195, 0);
    //windows
    for (var row = 306; row < 386; row += 22) {
        noStroke();
        fill(255, 230, 3);
        rect(19, row, 11, 14);
    }
    for (var row = 306; row < 386; row += 22) {
        noStroke();
        fill(255, 230, 3);
        rect(47, row, 11, 14);
    }
    for (var row = 260; row < 386; row += 22) {
        noStroke();
        fill(255, 230, 3);
        rect(82, row, 11, 14);
    }
    for (var row = 260; row < 386; row += 22) {
        noStroke();
        fill(255, 230, 3);
        rect(114, row, 11, 14);
    }
    for (var row = 348; row < 386; row += 22) {
        noStroke();
        fill(255, 230, 3);
        rect(149, row, 11, 14);
    }
    for (var row = 348; row < 386; row += 22) {
        noStroke();
        fill(255, 230, 3);
        rect(168, row, 11, 14);
    }
    for (var row = 348; row < 386; row += 22) {
        noStroke();
        fill(255, 230, 3);
        rect(187, row, 11, 14);
    }
    for (var row = 326; row < 386; row += 22) {
        noStroke();
        fill(255, 230, 3);
        rect(217, row, 11, 14);
    }
    for (var row = 326; row < 386; row += 22) {
        noStroke();
        fill(255, 230, 3);
        rect(247, row, 11, 14);
    }
    for (var row = 326; row < 386; row += 22) {
        noStroke();
        fill(255, 230, 3);
        rect(277, row, 11, 14);
    }
    for (var row = 282; row < 386; row += 22) {
        noStroke();
        fill(255, 230, 3);
        rect(309, row, 11, 14);
    }
    for (var row = 238; row < 386; row += 22) {
        noStroke();
        fill(255, 230, 3);
        rect(350, row, 11, 14);
    }

    // movement
    yPos += 1;
    xPos += 1.5;
    y -= 3;
    x += 5;
    h += 0.5;
    b += 5;
    //loops
    if (h >= 500) {
        h = -120;   
        l = random(41, 224);
    }
    if (xPos >= 600) {
        yPos = random(-111, 0);
        xPos = random(-62, 122);
    }
// back arrow
fill(255, 255, 255);
rect(17, 9, 18, 8);
triangle(2, 13, 19, 24, 19, 4);
if (mouseX > 0 && mouseX < 35 && mouseY > 0 && mouseY < 24) {
    scene = "intro";
    x = 0;
    xPositions = [-100];
    yPositions = [-100];
}
};

var connect4 = function() {
// connect 4 code
// collums/rows
background(c1);
for (var row = 63; row < 358; row += 49) {
        noStroke();
        fill(84, 94, 201);
        rect(27, row, 334, 5);
}
for (var row = 27; row < 358; row += 47) {
        noStroke();
        fill(84, 94, 201);
        rect(row, 63, 5, 299);
}

for (var i = 0; i < xPositions.length; i++) {
        fill(c[i]);
        ellipse(xPositions[i], yPositions[i], 35, 35);
        if (scene === "intro") {
            x = 0;
        }
    }
// back arrow
fill(0, 0, 0);
rect(17, 9, 18, 8);
triangle(2, 13, 19, 24, 19, 4);
//circle around the cursor
stroke(0, 0, 0);
fill(0, 0, 0, 0);
ellipse(mouseX, mouseY, 35, 35);
if (mouseX > 0 && mouseX < 35 && mouseY > 0 && mouseY < 24) {
    scene = "intro";
    xPositions = [-100];
    yPositions = [-100];
    x = 0;
}
// reset button
fill(0, 0, 0);
text("Reset", 346, 24);
if (mouseX > 346 && mouseX < 400 && mouseY > 0 && mouseY < 30) {
    xPositions = [-100];
    yPositions = [-100];
    x = 0;
}
};

mouseClicked = function() {
    //color switch
    x ++;
    if (x === 4) {
        c.push(color(255, 238, 0));
    }
    else if (x % 2 === 1) {
    c.push(color(255, 0, 0));
    }
    else if (x % 2 === 0) {
    c.push(color(255, 238, 0));
    }
    // places dot on cursor
    xPositions.push(mouseX);
    yPositions.push(mouseY);
};

draw = function() {
    //switches between the states
    switch(scene) {
        case "intro":
            background(82, 82, 82);
            fill(255, 255, 255);
            rect(40, 218, 123, 70);
            rect(243, 218, 123, 70);
            fill(255, 0, 60);
            textSize(30);
            text("My Portfolio", 116, 71);
            textSize(18);
            text("Connect 4", 59, 262);
            text("Shooting Star", 251, 262);
            if (mouseX > 40 && mouseX < 163 && mouseY > 218 && mouseY < 288) {
                xPositions = [-100];
                yPositions = [-100];
                x = 0;
                scene = "connect4";
            }
            if (mouseX > 244 && mouseX < 380 && mouseY > 218 && mouseY < 288) {
            scene = "art";
            }
        break;
        case "connect4":
            connect4();
        break;
        case "art":
            art();
        break;
        default:
}
};
