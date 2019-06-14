const game = new Game();

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.parent("canvas");
  game.setup();
}

function draw() {
  clear();
  background("pink");
  game.draw();
}

function keyPressed() {
  game.player.keyPressed();
  game.player2.keyPressed2();
}
