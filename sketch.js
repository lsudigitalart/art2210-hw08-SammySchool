let generateCreature = false;
let creatureW = 0;
let creatureH = 0;
let creatureM = 50;
let flipBody = false;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(0);
  translate(width / 2, height / 2);

  if (generateCreature) {
    creatureBuilder(creatureW, creatureH, creatureM, flipBody);
  }
}

function creatureBuilder(creatureWidth, creatureHeight, creatureMouth, flipBody) {
  
  fill(255);
  let bodyHeight = creatureHeight;
  let bodyWidth = creatureWidth;

  let x1, y1, x2, y2, x3, y3;

  //flips the guy depending on where the mouse is

  if (!flipBody) {
    x1 = 0;
    y1 = -bodyHeight / 2;

    x2 = -bodyWidth / 2;
    y2 = bodyHeight / 2;

    x3 = bodyWidth / 2;
    y3 = bodyHeight / 2;
  } 
  else {
    x1 = 0;
    y1 = bodyHeight / 2;

    x2 = -bodyWidth / 2;
    y2 = -bodyHeight / 2;

    x3 = bodyWidth / 2;
    y3 = -bodyHeight / 2;
  }

  triangle(x1, y1, x2, y2, x3, y3);

  //eyes

  fill(0);
  let eyeSize = 20;

  let eyeOffsetX = creatureWidth / 8;
  let eyeOffsetY = creatureHeight / 4;

  let eyeLeftX = -eyeOffsetX - eyeSize / 2;
  let eyeLeftY = -eyeOffsetY - eyeSize / 2;
  square(eyeLeftX, eyeLeftY, eyeSize);

  let eyeRightX = eyeOffsetX - eyeSize / 2;
  let eyeRightY = -eyeOffsetY - eyeSize / 2;
  square(eyeRightX, eyeRightY, eyeSize);

  let w = creatureHeight / 4;
  ellipse(0, 0, w, creatureMouth);

  //fangs rooted at top of the mouth

  let fangWidth = w / 8;
  let fangHeight = creatureMouth / 4;

  let x1_left = -w / 4 - fangWidth / 2;
  let y1_left = -creatureMouth / 2;

  let x2_left = -w / 4;
  let y2_left = y1_left + fangHeight;

  let x3_left = -w / 4 + fangWidth / 2;
  let y3_left = y1_left;

  let x1_right = w / 4 - fangWidth / 2;
  let y1_right = -creatureMouth / 2;

  let x2_right = w / 4;
  let y2_right = y1_right + fangHeight;

  let x3_right = w / 4 + fangWidth / 2;
  let y3_right = y1_right;

  fill(255);
  triangle(x1_left, y1_left, x2_left, y2_left, x3_left, y3_left);
  triangle(x1_right, y1_right, x2_right, y2_right, x3_right, y3_right);
}

function mousePressed() {
  generateCreature = true;

  creatureW = 250;

  //to flip or not to flip

  if (mouseY < height / 2) {
    creatureH = random(250, 500);
    flipBody = false;
  }

  if (mouseY > height / 2) {
    creatureH = random(50, 250);
    flipBody = true;
  }
}
