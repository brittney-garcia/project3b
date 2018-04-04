
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {

  background(66, 244, 238);
  rotateY(millis() / 1000);
  box(100);
	stroke(65, 202, 244);
	fill(244, 163, 65);

	ellipse(mouseX, mouseY, 200, 200);
	fill(60,200,100)
}
