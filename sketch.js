let width = 800;
let height = 550;
let rectX = 50;
let rectY = 70;

function setup() {
    createCanvas(width, height);
}

function draw() {
    background(0);

    fill(255);
    quad(rectX,rectY,rectX+10,rectY+80,rectX+700,rectY+50,rectX+710,rectY);
    quad(rectX-10,rectY+90,rectX-20,rectY+160,rectX+400,rectY+130,rectX+420,rectY+50);
    quad(rectX+90,rectY+125,rectX+110,rectY+210,rectX+700,rectY+235,rectX+725,rectY+120);
    quad(rectX+430,rectY+50,rectX+410,rectY+120,rectX+710,rectY+130,rectX+720,rectY+50);

    translate(800, 550);
    rotate(radians(180));
    fill(255);
    quad(rectX,rectY,rectX+10,rectY+80,rectX+700,rectY+50,rectX+710,rectY);
    quad(rectX-10,rectY+90,rectX-20,rectY+160,rectX+400,rectY+130,rectX+420,rectY+50);
    quad(rectX+90,rectY+125,rectX+110,rectY+210,rectX+700,rectY+235,rectX+725,rectY+120);
    quad(rectX+430,rectY+50,rectX+410,rectY+120,rectX+710,rectY+130,rectX+720,rectY+50);
}
